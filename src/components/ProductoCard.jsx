import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "react-toastify";

import {
  Card,
  Typography,
  Button,
  Chip,
  Box,
  Divider,
  Stack,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import {
  cardSx,
  imagenBoxSx,
  imagenSx,
  chipNuevoSx,
  contenidoSx,
  tituloSx,
  precioStackSx,
  dividerSx,
  botonAgregarSx,
  botonDetallesSx,
} from "./ProductoCard.styles";

function ProductoCard({ producto, onVerDetalle, onAgregar }) {
  const { isAuthenticated } = useAuth();
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  if (!producto) return null;

  const precioFormateado = Number(producto.precio || 0).toFixed(2);

  // 🔥 TODAS LAS IMÁGENES DE LOS 15 PRODUCTOS
  const imagenes = useMemo(() => {
    const imagenesPorProducto = {
      1: ["https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/5tj6S7Ol.jpg"],
      2: ["https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/jF2qFKH.png"],
      3: ["https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/8Km9tLL.jpg"],
      4: ["https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/8Km9tLL.jpg"],
      5: ["https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/5tj6S7Ol.jpg"],
      6: ["https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/jF2qFKH.png"],
      7: ["https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/5tj6S7Ol.jpg"],
      8: ["https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/jF2qFKH.png"],
      9: ["https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/8Km9tLL.jpg"],
      10:["https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/8Km9tLL.jpg"],
      11:["https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/5tj6S7Ol.jpg"],
      12:["https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/jF2qFKH.png"],
      13:["https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/5tj6S7Ol.jpg"],
      14:["https://i.imgur.com/8Km9tLL.jpg","https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/jF2qFKH.png"],
      15:["https://i.imgur.com/5tj6S7Ol.jpg","https://i.imgur.com/jF2qFKH.png","https://i.imgur.com/8Km9tLL.jpg"],
    };

    return (
      imagenesPorProducto[producto.id] || [
        producto.imagen,
        producto.imagen,
        producto.imagen,
      ]
    );
  }, [producto]);

  // 🔁 AUTOPLAY
  useEffect(() => {
    if (imagenes.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagenes.length]);

  useEffect(() => {
    setIndex(0);
  }, [producto.id]);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  const onAdd = async () => {
    if (loading) return;

    if (!isAuthenticated) {
      toast.warn("Debes iniciar sesión para agregar productos");
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      await agregarAlCarrito(producto.id, 1);
      toast.success(`${producto.nombre} agregado al carrito ✅`);
    } catch (e) {
      toast.error("Error al agregar producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ ...cardSx, opacity: producto.stock === 0 ? 0.7 : 1 }}>
      
      <Box sx={{ ...imagenBoxSx, position: "relative" }}>
        <Box
          component="img"
          key={index}
          src={imagenes[index]}
          sx={{ ...imagenSx, transition: "0.5s" }}
        />

        <Button onClick={anterior} sx={{ position: "absolute", left: 5, top: "50%" }}>{"<"}</Button>
        <Button onClick={siguiente} sx={{ position: "absolute", right: 5, top: "50%" }}>{">"}</Button>

        <Box sx={{ position: "absolute", bottom: 5, width: "100%", display: "flex", justifyContent: "center", gap: 1 }}>
          {imagenes.map((_, i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: i === index ? "#fff" : "#999",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={contenidoSx}>
        <Typography>{producto.nombre}</Typography>
        <Typography>${precioFormateado}</Typography>

        <Button onClick={onAdd} disabled={loading}>
          {loading ? "Agregando..." : "Agregar"}
        </Button>
      </Box>
    </Card>
  );
}

export default React.memo(ProductoCard);
