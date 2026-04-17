import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getUserProfile } from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [access, setAccess] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [user, setUser] = useState(null);

  // 🔥 estados separados (CLAVE)
  const [loading, setLoading] = useState(true); // carga inicial app
  const [authenticating, setAuthenticating] = useState(false); // login en proceso

  // =========================
  // 🔐 RECUPERAR TOKENS
  // =========================
  useEffect(() => {
    const savedAccess = localStorage.getItem("access");
    const savedRefresh = localStorage.getItem("refresh");

    if (savedAccess) setAccess(savedAccess);
    if (savedRefresh) setRefresh(savedRefresh);
    else setLoading(false); // si no hay nada, termina carga inicial
  }, []);

  // =========================
  // 👤 OBTENER PERFIL
  // =========================
  useEffect(() => {
    const fetchProfile = async () => {
      if (!access) {
        setUser(null);
        setLoading(false);
        return;
      }

      setLoading(true); // 🔥 bloquea UI correctamente

      try {
        const data = await getUserProfile(access);
        setUser(data);
      } catch (err) {
        console.error("Error obteniendo perfil:", err);
        setUser(null);
      } finally {
        setLoading(false);
        setAuthenticating(false); // 🔥 termina login visual
      }
    };

    fetchProfile();
  }, [access]);

  // =========================
  // 🔑 LOGIN
  // =========================
  const login = (accessToken, refreshToken) => {
    setAuthenticating(true); // 🔥 evita flash

    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);

    setAccess(accessToken);
    setRefresh(refreshToken);
  };

  // =========================
  // 🚪 LOGOUT
  // =========================
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    setAccess(null);
    setRefresh(null);
    setUser(null);
  };

  const isAuthenticated = !!access;

  // =========================
  // 📦 CONTEXTO
  // =========================
  const value = useMemo(
    () => ({
      access,
      refresh,
      user,
      isAuthenticated,
      login,
      logout,
      loading,
      authenticating, // 🔥 importante
    }),
    [access, refresh, user, isAuthenticated, loading, authenticating]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// =========================
// 🔌 HOOK
// =========================
export const useAuth = () => useContext(AuthContext);
