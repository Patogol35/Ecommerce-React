import React, { useState } from "react";
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

  // 🔒 Validación defensiva
  if (!producto) return null;

  // 📌 Formato precio
  const precioFormateado = Number(producto.precio || 0).toFixed(2);

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

  // 🔍 Ver detalles
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
      {/* Imagen */}
      <Box sx={imagenBoxSx}>
        <Box
          component="img"
          src={producto.imagen || "/placeholder.png"}
          alt={`Imagen de ${producto.nombre}`}
          loading="lazy"
          sx={imagenSx}
        />

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

      {/* Contenido */}
      <Box sx={contenidoSx}>
        <Typography variant="h6" sx={tituloSx}>
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
            ${precioFormateado}
          </Typography>
        </Stack>

        {/* Stock */}
        <Typography variant="body2" color="text.secondary">
          Stock: {producto.stock}
        </Typography>

        <Divider sx={dividerSx} />

        {/* Botones */}
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

// 🚀 Optimización
export default React.memo(ProductoCard);
