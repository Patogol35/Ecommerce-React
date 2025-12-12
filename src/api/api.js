// ===============================
// BASE URL
// ===============================
const BASE_URL = import.meta.env.VITE_API_URL;

// ===============================
// REFRESH TOKEN
// ===============================
export const refreshToken = async (refresh) => {
  const res = await fetch(`${BASE_URL}/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (!res.ok) throw new Error("No se pudo refrescar el token");
  return res.json();
};

// ===============================
// FETCH CON AUTH Y REFRESH AUTO
// ===============================
async function authFetch(url, options = {}, tokens, setTokens) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: tokens?.access ? `Bearer ${tokens.access}` : "",
        ...options.headers,
      },
    });

    // Si el token expiró
    if (res.status === 401 && tokens?.refresh) {
      const newTokens = await refreshToken(tokens.refresh);
      setTokens({
        access: newTokens.access,
        refresh: tokens.refresh,
      });

      // Reintentar petición con nuevo access
      const retry = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newTokens.access}`,
          ...options.headers,
        },
      });

      return retry;
    }

    return res;
  } catch (err) {
    console.error("Request failed:", err);
    throw err;
  }
}

// ===============================
// LOGIN
// ===============================
export const login = async (username, password) => {
  const res = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Credenciales incorrectas");
  return res.json();
};

// ===============================
// REGISTRO
// ===============================
export const register = async (data) => {
  const res = await fetch(`${BASE_URL}/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error al registrar");
  return res.json();
};

// ===============================
// OBTENER PRODUCTOS
// ===============================
export const getProductos = async () => {
  const res = await fetch(`${BASE_URL}/productos/`);

  if (!res.ok) throw new Error("No se pudieron obtener los productos");
  return res.json();
};

// ===============================
// CARRITO
// ===============================
export const getCarrito = async (tokens, setTokens) => {
  const res = await authFetch(`${BASE_URL}/carrito/`, {}, tokens, setTokens);

  if (!res.ok) throw new Error("No se pudo obtener el carrito");
  return res.json();
};

export const agregarAlCarrito = async (producto_id, cantidad, tokens, setTokens) => {
  const res = await authFetch(
    `${BASE_URL}/carrito/agregar/`,
    {
      method: "POST",
      body: JSON.stringify({ producto_id, cantidad }),
    },
    tokens,
    setTokens
  );

  if (!res.ok) throw new Error("No se pudo agregar al carrito");
  return res.json();
};

export const setCantidadItem = async (item_id, cantidad, tokens, setTokens) => {
  const res = await authFetch(
    `${BASE_URL}/carrito/cantidad/`,
    {
      method: "PUT",
      body: JSON.stringify({ item_id, cantidad }),
    },
    tokens,
    setTokens
  );

  if (!res.ok) throw new Error("No se pudo actualizar cantidad");
  return res.json();
};

export const eliminarDelCarrito = async (item_id, tokens, setTokens) => {
  const res = await authFetch(
    `${BASE_URL}/carrito/eliminar/`,
    {
      method: "DELETE",
      body: JSON.stringify({ item_id }),
    },
    tokens,
    setTokens
  );

  if (!res.ok) throw new Error("No se pudo eliminar del carrito");
  return res.json();
};
