import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

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

// 🔥 IMPORTANTE
import AuthGate from "./AuthGate";

function App() {
  return (
    <GoogleOAuthProvider clientId="6793546722-48rr78ea6tsderktj36dvihijcofjm8f.apps.googleusercontent.com">
      <BrowserRouter>
        <AuthProvider>
          {/* 🔥 BLOQUEA RENDER HASTA QUE AUTH TERMINE */}
          <AuthGate>
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
          </AuthGate>
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
