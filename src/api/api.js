// =============================
//  BASE URL
// =============================
const BASE_URL = import.meta.env.VITE_API_URL.replace(/\/$/, ""); 
// (Evita doble // en las rutas)


// =============================
//  REFRESH TOKEN
// =============================
export const refreshToken = async (refresh) => {
  const res = await fetch(`${BASE_URL}/api/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (!res.ok) throw new Error("No se pudo refrescar el token");
  return res.json();
};


// =============================
//  AUTH FETCH — V3 (FINAL)
// =============================
async function authFetch(url, options = {}) {
  let token = localStorage.getItem("access");

  let headers = {
    ...(options.headers || {}),
    ...(options.body && { "Content-Type": "application/json" }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  let res = await fetch(url, { ...options, headers });

  // Si expira el access → intenta refrescar
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
      console.warn("Refresh token inválido → limpiando sesión");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      throw new Error("⚠️ Tu sesión expiró. Vuelve a iniciar sesión.");
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
    const msg = data?.detail || data?.error || `Error ${res.status}`;
    throw new Error(msg);
  }

  return data;
}


// =============================
//  HELPERS GET / POST / PUT / DELETE
// =============================
export const api = {
  get: (endpoint) => authFetch(`${BASE_URL}${endpoint}`, { method: "GET" }),
  
  post: (endpoint, body = {}) =>
    authFetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  
  put: (endpoint, body = {}) =>
    authFetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  delete: (endpoint) =>
    authFetch(`${BASE_URL}${endpoint}`, { method: "DELETE" }),
};


// =============================
//  ENDPOINTS
// =============================

// AUTH
export const login = (credentials) =>
  api.post("/api/token/", credentials);

export const register = (data) =>
  api.post("/api/register/", data);

// PRODUCTOS
export const getProductos = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return api.get(`/api/productos/${query ? `?${query}` : ""}`);
};

// CATEGORÍAS
export const getCategorias = () => api.get("/api/categorias/");

// CARRITO
export const getCarrito = () => api.get("/api/carrito/");

export const agregarAlCarrito = (producto_id, cantidad = 1) =>
  api.post("/api/carrito/agregar/", { producto_id, cantidad });

export const eliminarDelCarrito = (itemId) =>
  api.delete(`/api/carrito/eliminar/${itemId}/`);

export const setCantidadItem = (itemId, cantidad) =>
  api.put(`/api/carrito/actualizar/${itemId}/`, { cantidad });

// PEDIDOS
export const crearPedido = () => api.post("/api/pedido/crear/");

export const getPedidos = (page = 1) =>
  api.get(`/api/pedidos/?page=${page}`);

// PERFIL
export const getUserProfile = () => api.get("/api/user/profile/");
