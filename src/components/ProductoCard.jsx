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

  // 🔥 IMÁGENES PERSONALIZADAS POR PRODUCTO
  const imagenes = useMemo(() => {
    // 👇 CASO ESPECIAL: producto 1
    if (producto.id === 1) {
      return [
        "https://i.imgur.com/jF2qFKH.png", // 👈 tu imagen
        "https://i.imgur.com/8Km9tLL.jpg",
        "https://i.imgur.com/5tj6S7Ol.jpg",
      ];
    }

    // 👇 RESTO DE PRODUCTOS
    return [
      producto.imagen || `/img/producto-${producto.id}-1.jpg`,
      `/img/producto-${producto.id}-2.jpg`,
      `/img/producto-${producto.id}-3.jpg`,
    ];
  }, [producto]);

  // 🔁 AUTOPLAY
  useEffect(() => {
    if (imagenes.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagenes]);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  // ➕ Agregar producto
  const onAdd = async () => {
    if (loading) return;

    if (!isAuthenticated) {
      toast.warn("Debes iniciar sesión para agregar productos");
      navigate("/login");
      return;
    }

    if (onAgregar) {
      onAgregar(producto);
      return;
    }

    setLoading(true);

    try {
      await agregarAlCarrito(producto.id, 1);
      toast.success(`${producto.nombre} agregado al carrito ✅`);
    } catch (e) {
      toast.error(e?.message || "Error al agregar producto");
    } finally {
      setLoading(false);
    }
  };

  const handleVerDetalle = () => {
    if (onVerDetalle) return onVerDetalle();

    navigate(`/producto/${producto.id}`, {
      state: { producto },
    });
  };

  return (
    <Card
      sx={{
        ...cardSx,
        opacity: producto.stock === 0 ? 0.7 : 1,
      }}
      elevation={0}
    >
      {/* 🔥 CARRUSEL */}
      <Box sx={{ ...imagenBoxSx, position: "relative", overflow: "hidden" }}>
        <Box
          component="img"
          key={index}
          src={imagenes[index]}
          alt={`Imagen ${index}`}
          sx={{
            ...imagenSx,
            transition: "0.5s ease",
          }}
        />

        {/* ← */}
        <Button
          onClick={anterior}
          sx={{
            position: "absolute",
            top: "50%",
            left: 5,
            minWidth: "30px",
            color: "#fff",
            background: "rgba(0,0,0,0.4)",
          }}
        >
          {"<"}
        </Button>

        {/* → */}
        <Button
          onClick={siguiente}
          sx={{
            position: "absolute",
            top: "50%",
            right: 5,
            minWidth: "30px",
            color: "#fff",
            background: "rgba(0,0,0,0.4)",
          }}
        >
          {">"}
        </Button>

        {/* 🔘 DOTS */}
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {imagenes.map((_, i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>

        {producto.nuevo && (
          <Chip
            icon={<StarIcon />}
            label="Nuevo"
            size="small"
            sx={chipNuevoSx}
          />
        )}

        {producto.stock === 0 && (
          <Chip
            label="Sin stock"
            color="error"
            size="small"
            sx={{ position: "absolute", bottom: 10, right: 10 }}
          />
        )}
      </Box>

      {/* CONTENIDO */}
      <Box sx={contenidoSx}>
        <Typography variant="h6" sx={tituloSx}>
          {producto.nombre}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.5} sx={precioStackSx}>
          <MonetizationOnIcon color="primary" />
          <Typography variant="h6" color="primary" fontWeight="bold">
            ${precioFormateado}
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          Stock: {producto.stock}
        </Typography>

        <Divider sx={dividerSx} />

        <Stack spacing={1}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
            sx={botonAgregarSx(producto.stock)}
            onClick={onAdd}
            disabled={producto.stock === 0 || loading}
          >
            {loading
              ? "Agregando..."
              : producto.stock > 0
              ? "Agregar al carrito"
              : "Agotado"}
          </Button>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<InfoIcon />}
            sx={botonDetallesSx}
            onClick={handleVerDetalle}
          >
            Ver detalles
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}

export default React.memo(ProductoCard);
