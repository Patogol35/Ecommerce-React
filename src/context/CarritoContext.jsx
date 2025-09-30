import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const { token } = useAuth();
  const [carrito, setCarrito] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------------------------
  // 🔄 Obtener carrito del backend
  // ---------------------------
  const fetchCarrito = async () => {
    if (!token) return;
    try {
      const res = await fetch("/api/carrito/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Error al obtener el carrito");

      const data = await res.json();
      setCarrito(data);
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------------------
  // ➕ Agregar producto
  // ---------------------------
  const agregarAlCarrito = async (productoId, cantidad = 1) => {
    if (!token) throw new Error("Debes iniciar sesión");

    try {
      const res = await fetch("/api/agregar-al-carrito/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ producto_id: productoId, cantidad }),
      });

      const data = await res.json();

      if (!res.ok) {
        // 👀 Lanzar error con el mensaje real del backend
        throw new Error(data.error || "Error al agregar al carrito");
      }

      // ✅ Actualizamos el carrito en memoria
      fetchCarrito();
      return data;
    } catch (err) {
      throw err;
    }
  };

  // ---------------------------
  // ❌ Eliminar item
  // ---------------------------
  const eliminarDelCarrito = async (itemId) => {
    try {
      const res = await fetch(`/api/eliminar-del-carrito/${itemId}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al eliminar del carrito");
      }

      fetchCarrito();
      return data;
    } catch (err) {
      throw err;
    }
  };

  // ---------------------------
  // 🔄 Actualizar cantidad
  // ---------------------------
  const actualizarCantidad = async (itemId, cantidad) => {
    try {
      const res = await fetch(`/api/actualizar-cantidad/${itemId}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cantidad }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al actualizar cantidad");
      }

      fetchCarrito();
      return data;
    } catch (err) {
      throw err;
    }
  };

  // ---------------------------
  // 🛒 Crear pedido
  // ---------------------------
  const crearPedido = async () => {
    try {
      const res = await fetch("/api/crear-pedido/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al crear pedido");
      }

      fetchCarrito(); // limpiar carrito tras pedido
      return data;
    } catch (err) {
      throw err;
    }
  };

  // ---------------------------
  // Cargar carrito al iniciar
  // ---------------------------
  useEffect(() => {
    if (token) {
      fetchCarrito();
    } else {
      setCarrito(null);
    }
  }, [token]);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        loading,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        crearPedido,
        fetchCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContext);
