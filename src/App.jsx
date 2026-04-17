import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CircularProgress, Box } from "@mui/material";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Carrito from "./pages/Carrito";
import Pedidos from "./pages/Pedidos";
import ProductoDetalle from "./pages/ProductoDetalle";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { CarritoProvider } from "./context/CarritoContext";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

// 🔥 Componente interno (LA CLAVE)
function AppContent() {
  const { loading } = useAuth();

  // 🔥 bloquea render
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <CarritoProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
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

          <Route
            path="/producto/:id"
            element={<ProductoDetalle />}
          />
        </Route>
      </Routes>
    </CarritoProvider>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId="6793546722-48rr78ea6tsderktj36dvihijcofjm8f.apps.googleusercontent.com">
      <BrowserRouter>
        <AuthProvider>
          <AppContent /> {/* 🔥 aquí está el fix */}
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
