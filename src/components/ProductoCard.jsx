import { useState, useMemo } from "react";
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

  // 🔥 TODAS LAS VARIANTES
  const variantes = producto.variantes || [];

  // 🔥 seleccionar variante por defecto (la primera)
  const [varianteSeleccionada, setVarianteSeleccionada] = useState(
    variantes[0] || null
  );

  // 👇 imagen seleccionada
  const [imagenActiva, setImagenActiva] = useState(producto.imagen);

  // 👇 todas las imágenes
  const imagenes = [
    producto.imagen,
    ...(producto.imagenes?.map((img) => img.imagen) || []),
  ].filter(Boolean);

  // 🔥 precio dinámico
  const precioMostrar = varianteSeleccionada
    ? varianteSeleccionada.precio
    : variantes.length > 0
    ? Math.min(...variantes.map((v) => v.precio))
    : producto.precio;

  // 🔥 stock dinámico
  const stockDisponible = varianteSeleccionada
    ? varianteSeleccionada.stock
    : variantes.reduce((acc, v) => acc + v.stock, 0);

  const onAdd = async () => {
    if (!isAuthenticated) {
      toast.warn("Debes iniciar sesión para agregar productos");
      navigate("/login");
      return;
    }

    if (!varianteSeleccionada) {
      toast.warn("Selecciona una variante");
      return;
    }

    if (onAgregar) {
      onAgregar(varianteSeleccionada);
      return;
    }

    try {
      await agregarAlCarrito(varianteSeleccionada.id, 1);
      toast.success(`${producto.nombre} agregado al carrito ✅`);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <Card sx={cardSx} elevation={0}>
      {/* Imagen */}
      <Box sx={imagenBoxSx}>
        <Box
          component="img"
          src={imagenActiva}
          alt={producto.nombre}
          sx={imagenSx}
        />

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

      {/* Miniaturas */}
      {imagenes.length > 1 && (
        <Stack direction="row" spacing={1} sx={{ px: 1, mt: 1, justifyContent: "center" }}>
          {imagenes.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`img-${i}`}
              onClick={() => setImagenActiva(img)}
              sx={{
                width: 45,
                height: 45,
                objectFit: "cover",
                borderRadius: 1,
                cursor: "pointer",
                border:
                  imagenActiva === img
                    ? "2px solid #1976d2"
                    : "1px solid #999",
              }}
            />
          ))}
        </Stack>
      )}

      {/* Contenido */}
      <Box sx={contenidoSx}>
        <Typography variant="h6" fontWeight="bold" sx={tituloSx}>
          {producto.nombre}
        </Typography>

        {/* 🔥 VARIANTES (selector simple) */}
        {variantes.length > 0 && (
          <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap" }}>
            {variantes.map((v) => (
              <Chip
                key={v.id}
                label={v.nombre}
                clickable
                color={
                  varianteSeleccionada?.id === v.id ? "primary" : "default"
                }
                onClick={() => setVarianteSeleccionada(v)}
              />
            ))}
          </Stack>
        )}

        {/* Precio */}
        <Stack direction="row" alignItems="center" spacing={0.5} sx={precioStackSx}>
          <MonetizationOnIcon color="primary" />
          <Typography variant="h6" color="primary" fontWeight="bold">
            ${precioMostrar}
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
            sx={botonAgregarSx(stockDisponible)}
            onClick={onAdd}
            disabled={stockDisponible === 0}
          >
            {stockDisponible > 0 ? "Agregar al carrito" : "Agotado"}
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
