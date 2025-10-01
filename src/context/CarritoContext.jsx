import { createContext, useContext, useEffect, useState } from "react";
import {
  agregarAlCarrito as apiAgregar,
  getCarrito as apiGetCarrito,
  eliminarDelCarrito as apiEliminar,
  setCantidadItem as apiSetCantidad,
} from "../api/api";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

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

  // ✅ Actualizar cantidad
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
      toast.error(e.message || "No se pudo actualizar la cantidad");
    }
  };

  // ✅ Agregar producto (optimista)
  const agregarAlCarrito = async (producto_id, cantidad = 1, productoInfo = null) => {
    if (!access) throw new Error("Debes iniciar sesión.");

    // Estado anterior por si falla
    const prevCarrito = JSON.parse(JSON.stringify(carrito));

    // Optimista: actualizamos al instante
    if (productoInfo) {
      setCarrito((prev) => {
        const existe = prev.items.find((it) => it.producto.id === producto_id);
        if (existe) {
          return {
            ...prev,
            items: prev.items.map((it) =>
              it.producto.id === producto_id
                ? { ...it, cantidad: it.cantidad + cantidad }
                : it
            ),
          };
        }
        return {
          ...prev,
          items: [
            ...prev.items,
            {
              id: Date.now(), // id temporal
              producto: productoInfo,
              cantidad,
              subtotal: productoInfo.precio * cantidad,
            },
          ],
        };
      });
    }

    try {
      await apiAgregar(producto_id, cantidad, access);
      await cargarCarrito(); // sincronizamos con backend
    } catch (e) {
      console.error(e);
      toast.error(e.message || "No se pudo agregar el producto");
      setCarrito(prevCarrito); // rollback
    }
  };

  const eliminarItem = async (itemId) => {
    if (!access) throw new Error("Debes iniciar sesión.");
    try {
      await apiEliminar(itemId, access);
      setCarrito((prev) => ({
        ...prev,
        items: prev.items.filter((it) => it.id !== itemId),
      }));
      toast.warn("Producto eliminado ❌");
    } catch (e) {
      console.error(e);
      toast.error(e.message || "No se pudo eliminar el producto");
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
