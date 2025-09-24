import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { ThemeModeProvider } from "./context/ThemeModeContext"; // <- importa tu ThemeModeProvider

function App() {
  return (
    <ThemeModeProvider> {/* <- envuelves todo aquí */}
      <BrowserRouter>
        <AuthProvider>
          <CarritoProvider>
            <Routes>
              {/* Todas las rutas con Navbar entran en Layout */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
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

              {/* Estas no muestran Navbar */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </CarritoProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeModeProvider>
  );
}

export default App;
