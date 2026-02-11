import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Carrito from "./pages/Carrito";
import Pedidos from "./pages/Pedidos";
import ProductoDetalle from "./pages/ProductoDetalle";

import { AuthProvider } from "./context/AuthContext";
import { CarritoProvider } from "./context/CarritoContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import { ThemeModeProvider, useThemeMode } from "./context/ThemeContext";

/* 🔹 Wrapper para conectar ThemeContext con MUI */
function AppTheme({ children }) {
  const { theme } = useThemeMode();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function App() {
  return (
    <ThemeModeProvider>
      <AppTheme>
        <CssBaseline />

        <BrowserRouter>
          <AuthProvider>
            <CarritoProvider>
              <Routes>
                {/* Todas las rutas dentro del Layout muestran el menú */}
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />

                  {/* Login y Register también muestran el menú */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  <Route
                    path="/carrito"
                    element={
                      <ProtectedRoute>
                        <Carrito />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/pedidos"
                    element={
                      <ProtectedRoute>
                        <Pedidos />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="/producto/:id" element={<ProductoDetalle />} />
                </Route>
              </Routes>
            </CarritoProvider>
          </AuthProvider>
        </BrowserRouter>
      </AppTheme>
    </ThemeModeProvider>
  );
}

export default App;
