import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Chip,
  TextField,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import { toast } from "react-toastify";
import { calcularSubtotal } from "../utils/carritoUtils";
import carritoItemStyles from "./CarritoItem.styles";

function CarritoItem({
  it,
  incrementar,
  decrementar,
  setCantidad,
  eliminarItem,
}) {
  const stock = it.producto?.stock ?? 0;
  const [loading, setLoading] = useState(false);

  // 🧠 Formateo precio
  const subtotal = calcularSubtotal(it).toFixed(2);

  // ➕ Incrementar con control
  const handleIncrementar = async () => {
    if (loading || it.cantidad >= stock) return;

    setLoading(true);
    try {
      await incrementar(it);
    } finally {
      setLoading(false);
    }
  };

  // ➖ Decrementar
  const handleDecrementar = async () => {
    if (loading || it.cantidad <= 1) return;

    setLoading(true);
    try {
      await decrementar(it);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={carritoItemStyles.card}>
      {/* Imagen */}
      <CardMedia
        component="img"
        image={it.producto?.imagen || "/placeholder.png"}
        alt={`Imagen de ${it.producto?.nombre}`}
        loading="lazy"
        sx={(theme) => carritoItemStyles.media(theme)}
      />

      {/* Info */}
      <CardContent sx={carritoItemStyles.content}>
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {it.producto?.nombre}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={carritoItemStyles.descripcion}
          >
            {it.producto?.descripcion}
          </Typography>
        </Box>

        {/* Chips */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip
            icon={<MonetizationOnIcon />}
            label={`$${subtotal}`}
            color="success"
            sx={carritoItemStyles.chipSubtotal}
          />

          <Chip
            label={
              stock > 0 ? `Stock: ${stock}` : "Sin stock"
            }
            color={stock > 0 ? "info" : "error"}
            sx={carritoItemStyles.chipStock}
          />
        </Box>
      </CardContent>

      {/* Controles */}
      <Box sx={carritoItemStyles.controlesWrapper}>
        <Box sx={carritoItemStyles.cantidadWrapper}>
          <IconButton
            onClick={handleDecrementar}
            disabled={it.cantidad <= 1 || loading}
            sx={carritoItemStyles.botonCantidad}
          >
            <RemoveIcon />
          </IconButton>

          <TextField
            type="number"
            size="small"
            value={it.cantidad}
            inputProps={{ min: 1, max: stock }}
            onChange={(e) => {
              const value = e.target.value;

              if (value === "") {
                setCantidad(it.id, 1);
                return;
              }

              const nuevaCantidad = Number(value);

              if (nuevaCantidad >= 1 && nuevaCantidad <= stock) {
                setCantidad(it.id, nuevaCantidad);
              } else if (nuevaCantidad > stock) {
                toast.warning(`Máximo disponible: ${stock}`);
                setCantidad(it.id, stock);
              } else {
                setCantidad(it.id, 1);
              }
            }}
            sx={carritoItemStyles.cantidadInput}
          />

          <IconButton
            onClick={handleIncrementar}
            disabled={it.cantidad >= stock || loading}
            sx={carritoItemStyles.botonCantidad}
          >
            <AddIcon />
          </IconButton>
        </Box>

        {/* Eliminar */}
        <Tooltip title="Eliminar producto">
          <IconButton
            onClick={() => eliminarItem(it.id)}
            sx={carritoItemStyles.botonEliminar}
          >
            {loading ? <CircularProgress size={20} /> : <DeleteIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

export default React.memo(CarritoItem);
