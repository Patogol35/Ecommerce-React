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
  imagenSx,
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

  // 🧠 IMÁGENES (BD + extra del front)
  const imagenExtra = `/imagenes/productos/${producto.id}.jpg`; // opcional dinámico
  const imagenes = [producto.imagen, imagenExtra];

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
      {/* Imagen + carrusel */}
      <Box sx={{ ...imagenBoxSx, position: "relative" }}>
        <Box
          component="img"
          src={imagenes[index]}
          alt={producto.nombre}
          sx={imagenSx}
          onClick={nextImage} // 👈 click cambia imagen
        />

        {/* Botón izquierda */}
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

        {/* Botón derecha */}
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

        {/* Chip Nuevo */}
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

      {/* Contenido */}
      <Box sx={contenidoSx}>
        <Typography variant="h6" fontWeight="bold" sx={tituloSx}>
          {producto.nombre}
        </Typography>

        {/* Precio */}
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

        {/* Botones */}
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
