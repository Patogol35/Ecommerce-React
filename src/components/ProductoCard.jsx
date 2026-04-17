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

export default function ProductoCard({ producto, onVerDetalle, onAgregar }) {
  const { isAuthenticated } = useAuth();
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  // Carrusel
  const [index, setIndex] = useState(0);

  const imagenes = [
    producto.imagen,
    ...(producto.imagenes?.map((img) => img.imagen) || []),
  ].filter(Boolean);

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

  const prevImage = (e) => {
    e.stopPropagation();
    setIndex((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setIndex((prev) =>
      prev === imagenes.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Card sx={cardSx} elevation={0}>
      {/* Imagen */}
      <Box sx={{ ...imagenBoxSx, position: "relative" }}>
        <Box
          component="img"
          src={imagenes[index] || producto.imagen}
          alt={producto.nombre}
          sx={{
            ...imagenSx,
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain", // 🔥 mantiene proporción sin agrandar
          }}
        />

        {/* Flechas */}
        {imagenes.length > 1 && (
          <>
            <Button
              size="small"
              onClick={prevImage}
              sx={{
                position: "absolute",
                left: 5,
                top: "50%",
                transform: "translateY(-50%)",
                minWidth: "28px",
                padding: 0,
                color: "#fff",
                background: "rgba(0,0,0,0.3)",
              }}
            >
              ◀
            </Button>

            <Button
              size="small"
              onClick={nextImage}
              sx={{
                position: "absolute",
                right: 5,
                top: "50%",
                transform: "translateY(-50%)",
                minWidth: "28px",
                padding: 0,
                color: "#fff",
                background: "rgba(0,0,0,0.3)",
              }}
            >
              ▶
            </Button>
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
