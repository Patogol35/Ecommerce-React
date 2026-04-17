import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "react-toastify";
import { useState } from "react";

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

  const [index, setIndex] = useState(0);

  // 🔥 NORMALIZADOR REAL (aquí estaba el problema)
  const imagenes = (() => {
    if (!producto) return [];

    // Django: [{imagen: "..."}]
    if (Array.isArray(producto.imagenes)) {
      if (producto.imagenes.length === 0) return [];

      if (typeof producto.imagenes[0] === "object") {
        return producto.imagenes.map((img) => img.imagen);
      }

      return producto.imagenes;
    }

    // Imagen única
    if (producto.imagen) {
      return [producto.imagen];
    }

    return [];
  })();

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
      <Box sx={{ ...imagenBoxSx, position: "relative" }}>
        <Box
          component="img"
          src={imagenes[index] || ""}
          alt={producto?.nombre}
          sx={imagenSx}
        />

        {/* FLECHAS */}
        {imagenes.length > 1 && (
          <>
            <Box
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? imagenes.length - 1 : prev - 1
                )
              }
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                px: 1,
                borderRadius: 1,
                cursor: "pointer",
                zIndex: 2,
              }}
            >
              ◀
            </Box>

            <Box
              onClick={() =>
                setIndex((prev) =>
                  prev === imagenes.length - 1 ? 0 : prev + 1
                )
              }
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                px: 1,
                borderRadius: 1,
                cursor: "pointer",
                zIndex: 2,
              }}
            >
              ▶
            </Box>
          </>
        )}

        {/* BADGE */}
        {producto?.nuevo && (
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
          {producto?.nombre}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          sx={precioStackSx}
        >
          <MonetizationOnIcon color="primary" />
          <Typography variant="h6" color="primary" fontWeight="bold">
            {producto?.precio}
          </Typography>
        </Stack>

        <Divider sx={dividerSx} />

        <Stack spacing={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
            sx={botonAgregarSx(producto?.stock)}
            onClick={onAdd}
            disabled={producto?.stock === 0}
          >
            {producto?.stock > 0 ? "Agregar al carrito" : "Agotado"}
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
