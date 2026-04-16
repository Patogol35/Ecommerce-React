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

  // 🧠 CONFIG DE IMÁGENES EXTRA (AQUÍ controlas los 15 productos)
  const imagenesExtra = {
    1: ["/imagenes/1-1.jpg"],
    2: ["/imagenes/2-1.jpg"],
    3: ["/imagenes/3-1.jpg"],
    4: ["/imagenes/4-1.jpg"],
    5: ["/imagenes/5-1.jpg"],
    6: ["/imagenes/6-1.jpg"],
    7: ["/imagenes/7-1.jpg"],
    8: ["/imagenes/8-1.jpg"],
    9: ["/imagenes/9-1.jpg"],
    10: ["/imagenes/10-1.jpg"],
    11: ["/imagenes/11-1.jpg"],
    12: ["/imagenes/12-1.jpg"],
    13: ["/imagenes/13-1.jpg"],
    14: ["/imagenes/14-1.jpg"],
    15: ["/imagenes/15-1.jpg"],
  };

  // 🔥 combinar imagen BD + extras si existen
  const imagenes = [
    producto.imagen,
    ...(imagenesExtra[producto.id] || []),
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
      {/* IMAGEN */}
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
            objectFit: "contain",
            backgroundColor: "#f5f5f5",
          }}
          onClick={nextImage}
        />

        {/* Flechas solo si hay más de 1 imagen */}
        {imagenes.length > 1 && (
          <>
            <IconButton
              onClick={prevImage}
              sx={{
                position: "absolute",
                top: "50%",
                left: 5,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.3)",
                color: "#fff",
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={nextImage}
              sx={{
                position: "absolute",
                top: "50%",
                right: 5,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.3)",
                color: "#fff",
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}

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
