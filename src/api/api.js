// BASE URL
const BASE_URL = import.meta.env.VITE_API_URL;

// REFRESH TOKEN
export const refreshToken = async (refresh) => {
  const res = await fetch(`${BASE_URL}/api/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (!res.ok) throw new Error("No se pudo refrescar el token");
  return res.json();
};

// FETCH CON AUTO REFRESH
async function authFetch(url, options = {}, token) {
  let headers = {
    ...(options.headers || {}),
    ...(options.body && { "Content-Type": "application/json" }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  let res = await fetch(url, { ...options, headers });

  if (res.status === 401 && localStorage.getItem("refresh")) {
    try {
      const newTokens = await refreshToken(localStorage.getItem("refresh"));

      if (newTokens?.access) {
        localStorage.setItem("access", newTokens.access);
        token = newTokens.access;

        headers = {
          ...(options.headers || {}),
          ...(options.body && { "Content-Type": "application/json" }),
          Authorization: `Bearer ${token}`,
        };

        res = await fetch(url, { ...options, headers });
      }
    } catch (err) {
      console.error("Refresh token inválido:", err);
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      throw new Error("⚠️ Tu sesión expiró, vuelve a iniciar sesión.");
    }
  }

  const text = await res.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  if (!res.ok) {
    const error = new Error("Request failed");
    error.response = {
      status: res.status,
      data: data,
    };
    throw error;
  }

  return data;
}

// ENDPOINTS
// AUTH
export const login = async (credentials) => {
  return authFetch(`${BASE_URL}/api/token/`, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};

export const register = async (data) => {
  return authFetch(`${BASE_URL}/api/register/`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// PRODUCTOS
export const getProductos = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const url = query
    ? `${BASE_URL}/api/productos/?${query}`
    : `${BASE_URL}/api/productos/`;

  return authFetch(url, { method: "GET" });
};

// CATEGORÍAS
export const getCategorias = async () => {
  return authFetch(`${BASE_URL}/api/categorias/`, { method: "GET" });
};

// CARRITO
export const getCarrito = async (token) => {
  return authFetch(`${BASE_URL}/api/carrito/`, { method: "GET" }, token);
};

export const agregarAlCarrito = async (producto_id, token, cantidad = 1) => {
  return authFetch(
    `${BASE_URL}/api/carrito/agregar/`,
    {
      method: "POST",
      body: JSON.stringify({ producto_id, cantidad }),
    },
    token
  );
};

export const eliminarDelCarrito = async (itemId, token) => {
  return authFetch(
    `${BASE_URL}/api/carrito/eliminar/${itemId}/`,
    { method: "DELETE" },
    token
  );
};

export const setCantidadItem = async (itemId, token, cantidad) => {
  return authFetch(
    `${BASE_URL}/api/carrito/actualizar/${itemId}/`,
    { method: "PUT", body: JSON.stringify({ cantidad }) },
    token
  );
};

// PEDIDOS
export const crearPedido = async (token) => {
  return authFetch(`${BASE_URL}/api/pedido/crear/`, { method: "POST" }, token);
};

export const getPedidos = async (token, page = 1) => {
  return authFetch(
    `${BASE_URL}/api/pedidos/?page=${page}`,
    { method: "GET" },
    token
  );
};

// PERFIL
export const getUserProfile = async (token) => {
  return authFetch(`${BASE_URL}/api/user/profile/`, { method: "GET" }, token);
};
