import { createContext, useContext, useState, useEffect } from "react";
import { refreshToken as apiRefreshToken } from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access") || null
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh") || null
  );
  const [loading, setLoading] = useState(true);

  // ------- LOGIN -------
  const login = (access, refresh) => {
    setAccessToken(access);
    setRefreshToken(refresh);

    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
  };

  // ------- LOGOUT -------
  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  };

  // ------- REFRESH TOKEN AUTOMÁTICO -------
  const attemptTokenRefresh = async () => {
    if (!refreshToken) {
      logout();
      return;
    }

    try {
      const data = await apiRefreshToken(refreshToken);

      if (data?.access) {
        setAccessToken(data.access);
        localStorage.setItem("access", data.access);
      } else {
        logout();
      }
    } catch (err) {
      logout();
    }
  };

  // Intentar refrescar token al iniciar la app
  useEffect(() => {
    const init = async () => {
      if (refreshToken && !accessToken) {
        await attemptTokenRefresh();
      }
      setLoading(false);
    };
    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        login,
        logout,
        loading,
        attemptTokenRefresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
