import { useState } from "react";
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
  IconButton,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  cardSx,
  imagenBoxSx,
  chipNuevoSx,
  contenidoSx,
  tituloSx,
  precioStackSx,
  dividerSx,
  botonAgregarSx,
  botonDetallesSx,
} from "./ProductoCard.styles";

export default function ProductoCard({ producto, onVerDetalle, onAgregar }) {
  const { isAuthenticated } = useAuth();
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  // 🧠 IMÁGENES (BD + extra demo)
  const imagenes = [
    producto.imagen,
    "/imagenes/demo.jpg", // 👈 cambia si quieres otra
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  const onAdd = async () => {
    if (!isAuthenticated) {
      toast.warn("Debes iniciar sesión para agregar productos");
      navigate("/login");
      return;
    }

    if (onAgregar) {
      onAgregar(producto);
      return;
    }

    try {
      await agregarAlCarrito(producto.id, 1);
      toast.success(`${producto.nombre} agregado al carrito ✅`);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <Card sx={cardSx} elevation={0}>
      {/* 🔥 IMAGEN + CARRUSEL */}
      <Box
        sx={{
          ...imagenBoxSx,
          position: "relative",
          height: 200,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={imagenes[index]}
          alt={producto.nombre}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // 👈 🔥 clave (no recorta)
            backgroundColor: "#f5f5f5", // 👈 opcional (mejor estética)
          }}
          onClick={nextImage}
        />

        {/* ← */}
        <IconButton
          onClick={prevImage}
          sx={{
            position: "absolute",
            top: "50%",
            left: 5,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.3)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* → */}
        <IconButton
          onClick={nextImage}
          sx={{
            position: "absolute",
            top: "50%",
            right: 5,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.3)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>

        {/* CHIP NUEVO */}
        {producto.nuevo && (
          <Chip
            icon={<StarIcon />}
            label="Nuevo"
            color="secondary"
            size="small"
            sx={chipNuevoSx}
          />
        )}
      </Box>

      {/* CONTENIDO */}
      <Box sx={contenidoSx}>
        <Typography variant="h6" fontWeight="bold" sx={tituloSx}>
          {producto.nombre}
        </Typography>

        {/* PRECIO */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          sx={precioStackSx}
        >
          <MonetizationOnIcon color="primary" />
          <Typography variant="h6" color="primary" fontWeight="bold">
            {producto.precio}
          </Typography>
        </Stack>

        <Divider sx={dividerSx} />

        {/* BOTONES */}
        <Stack spacing={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
            sx={botonAgregarSx(producto.stock)}
            onClick={onAdd}
            disabled={producto.stock === 0}
          >
            {producto.stock > 0 ? "Agregar al carrito" : "Agotado"}
          </Button>

          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            startIcon={<InfoIcon />}
            sx={botonDetallesSx}
            onClick={() =>
              onVerDetalle
                ? onVerDetalle()
                : navigate(`/producto/${producto.id}`, {
                    state: { producto },
                  })
            }
          >
            Ver detalles
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}
