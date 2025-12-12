// =========================
// BASE URL
// =========================
const BASE_URL = import.meta.env.VITE_API_URL;

// -------------------------
// REFRESH TOKEN
// -------------------------
export const refreshToken = async (refresh) => {
  const res = await fetch(`${BASE_URL}/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (!res.ok) throw new Error("No se pudo refrescar el token");

  return res.json();
};

// -------------------------
// LOGIN
// -------------------------
export const login = async (username, password) => {
  const res = await fetch(`${BASE_URL}/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Error en login");
  }

  return res.json();
};

// =========================
// PRODUCTOS
// =========================
export const getProductos = async () => {
  const res = await fetch(`${BASE_URL}/productos/`);
  if (!res.ok) throw new Error("Error obteniendo productos");
  return res.json();
};

// =========================
// CARRITO
// =========================
export const getCarrito = async (token) => {
  const res = await fetch(`${BASE_URL}/carrito/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Error obteniendo carrito");

  return res.json();
};

export const agregarAlCarrito = async (token, producto_id, cantidad) => {
  const res = await fetch(`${BASE_URL}/carrito/agregar/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ producto_id, cantidad }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Error agregando al carrito");
  }

  return res.json();
};

export const eliminarDelCarrito = async (token, item_id) => {
  const res = await fetch(`${BASE_URL}/carrito/eliminar/${item_id}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Error eliminando del carrito");

  return res.json();
};

export const actualizarCantidadCarrito = async (token, item_id, cantidad) => {
  const res = await fetch(`${BASE_URL}/carrito/actualizar/${item_id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ cantidad }),
  });

  if (!res.ok) throw new Error("Error actualizando cantidad");

  return res.json();
};

// =========================
// PEDIDOS
// =========================
export const crearPedido = async (token) => {
  const res = await fetch(`${BASE_URL}/pedido/crear/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Error creando pedido");

  return res.json();
};

export const getPedidosUsuario = async (token) => {
  const res = await fetch(`${BASE_URL}/pedidos/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Error obteniendo pedidos");

  return res.json();
};
