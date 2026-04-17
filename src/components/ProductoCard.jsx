import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "react-toastify";
import { useState, useMemo } from "react";

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

  // 🔥 NORMALIZAR IMÁGENES (clave del fix)
  const imagenes = useMemo(() => {
    if (producto?.imagenes && Array.isArray(producto.imagenes)) {
      return producto.imagenes;
    }
    if (producto?.imagen) {
      return [producto.imagen];
    }
    return ["/placeholder.jpg"]; // fallback
  }, [producto]);

  const [index, setIndex] = useState(0);

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
          src={imagenes[index]}
          alt={producto.nombre}
          sx={imagenSx}
        />

        {/* Flechas SOLO si hay más de una */}
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
                left: 5,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                background: "rgba(0,0,0,0.3)",
                color: "#fff",
                px: 1,
                borderRadius: 1,
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
                right: 5,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                background: "rgba(0,0,0,0.3)",
                color: "#fff",
                px: 1,
                borderRadius: 1,
              }}
            >
              ▶
            </Box>
          </>
        )}

        {/* Badge */}
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

      {/* MINIATURAS */}
      {imagenes.length > 1 && (
        <Stack direction="row" spacing={1} mt={1} px={1}>
          {imagenes.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              onClick={() => setIndex(i)}
              sx={{
                width: 40,
                height: 40,
                objectFit: "cover",
                cursor: "pointer",
                border:
                  index === i
                    ? "2px solid #1976d2"
                    : "1px solid #ccc",
                borderRadius: 1,
              }}
            />
          ))}
        </Stack>
      )}

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
