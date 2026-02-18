import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getUserProfile } from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [access, setAccess] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Inicialización controlada
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedAccess = localStorage.getItem("access");
        const savedRefresh = localStorage.getItem("refresh");

        if (savedAccess) {
          setAccess(savedAccess);
          setRefresh(savedRefresh);

          // Obtener perfil solo si hay token
          const data = await getUserProfile(savedAccess);
          setUser(data);
        }
      } catch (err) {
        console.error("Error inicializando auth:", err);
        setUser(null);
        setAccess(null);
        setRefresh(null);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
      } finally {
        setLoading(false); 
      }
    };

    initializeAuth();
  }, []);

  const isAuthenticated = !!access;

  const login = async (accessToken, refreshToken) => {
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);

    setAccess(accessToken);
    setRefresh(refreshToken);

    try {
      const data = await getUserProfile(accessToken);
      setUser(data);
    } catch (err) {
      console.error("Error obteniendo perfil después de login:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setAccess(null);
    setRefresh(null);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      access,
      refresh,
      isAuthenticated,
      user,
      login,
      logout,
      loading,
    }),
    [access, refresh, isAuthenticated, user, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : null}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
