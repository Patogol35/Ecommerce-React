import { createContext, useContext, useEffect, useState } from "react";
import {
  agregarAlCarrito as apiAgregar,
  getCarrito as apiGetCarrito,
  eliminarDelCarrito as apiEliminar,
  setCantidadItem as apiSetCantidad,
} from "../api/api";
import { useAuth } from "./AuthContext";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const { access } = useAuth();
  const [carrito, setCarrito] = useState({ items: [] });
  const [loading, setLoading] = useState(false);

  const cargarCarrito = async () => {
    if (!access) {
      setCarrito({ items: [] });
      return;
    }
    setLoading(true);
    try {
      const data = await apiGetCarrito(access);
      setCarrito(data);
    } catch (e) {
      console.error(e);
      setCarrito({ items: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarCarrito();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  // ✅ Set cantidad absoluta y sincronizada con backend
  const setCantidad = async (itemId, cantidad) => {
    if (!access) throw new Error("Debes iniciar sesión.");
    if (cantidad < 1) return;

    try {
      const res = await apiSetCantidad(itemId, cantidad, access);

      const cantidadFinal = res?.cantidad ?? cantidad;

      setCarrito((prev) => ({
        ...prev,
        items: prev.items.map((it) =>
          it.id === itemId
            ? {
                ...it,
                cantidad: cantidadFinal,
                subtotal: cantidadFinal * it.producto.precio,
              }
            : it
        ),
      }));
    } catch (e) {
      console.error(e);
      throw e; // 👈 que lo maneje el componente
    }
  };

  // ✅ Agregar producto al carrito con validación de stock
  const agregarAlCarrito = async (producto_id, cantidad = 1) => {
    if (!access) throw new Error("Debes iniciar sesión.");

    // 🔹 Validación en frontend
    const existente = carrito.items.find((it) => it.producto.id === producto_id);
    if (existente && existente.cantidad >= existente.producto.stock) {
      throw new Error(`Solo hay ${existente.producto.stock} unidades disponibles 🚨`);
    }

    try {
      await apiAgregar(producto_id, cantidad, access);
      await cargarCarrito();
    } catch (e) {
      console.error(e);
      throw e; // 👈 que lo maneje el componente
    }
  };

  // ✅ Eliminar item
  const eliminarItem = async (itemId) => {
    if (!access) throw new Error("Debes iniciar sesión.");
    try {
      await apiEliminar(itemId, access);
      setCarrito((prev) => ({
        ...prev,
        items: prev.items.filter((it) => it.id !== itemId),
      }));
    } catch (e) {
      console.error(e);
      throw e; // 👈 que lo maneje el componente
    }
  };

  const limpiarLocal = () => setCarrito({ items: [] });

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        items: carrito.items || [],
        loading,
        cargarCarrito,
        agregarAlCarrito,
        setCantidad,
        eliminarItem,
        limpiarLocal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContext);
