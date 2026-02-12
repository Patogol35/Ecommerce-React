import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Chip,
  TextField,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { toast } from "react-toastify";
import { calcularSubtotal } from "../utils/carritoUtils";
import carritoItemStyles from "./CarritoItem.styles";

export default function CarritoItem({
  it,
  incrementar,
  decrementar,
  setCantidad,
  eliminarItem,
}) {
  const stock = it.producto?.stock ?? 0;

  return (
    <Card sx={(theme) => carritoItemStyles.card(theme)}>
      {/* Imagen producto */}
      <CardMedia
        component="img"
        image={it.producto?.imagen || undefined}
        alt={it.producto?.nombre}
        sx={(theme) => carritoItemStyles.media(theme)}
      />

      {/* Info producto */}
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

        {/* Precio + Stock */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip
            icon={<MonetizationOnIcon />}
            label={calcularSubtotal(it).toFixed(2)}
            color="success"
            sx={carritoItemStyles.chipSubtotal}
          />

          <Chip
            label={`Stock: ${stock} unidades`}
            color={stock > 0 ? "info" : "default"}
            sx={carritoItemStyles.chipStock}
          />
        </Box>
      </CardContent>

      {/* Controles cantidad + eliminar */}
      <Box sx={(theme) => carritoItemStyles.controlesWrapper(theme)}>
        <Box sx={(theme) => carritoItemStyles.cantidadWrapper(theme)}>
          {/* Botón restar */}
          <IconButton
            onClick={() => decrementar(it)}
            disabled={it.cantidad <= 1}
            sx={(theme) => carritoItemStyles.botonCantidad(theme)}
          >
            <RemoveIcon />
          </IconButton>

          {/* Input cantidad */}
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
                toast.warning(`No puedes pedir más de ${stock} unidades`);
                setCantidad(it.id, stock);
              } else {
                setCantidad(it.id, 1);
              }
            }}
            sx={carritoItemStyles.cantidadInput}
          />

          {/* Botón sumar */}
          <IconButton
            onClick={() => incrementar(it)}
            disabled={it.cantidad >= stock}
            sx={(theme) => carritoItemStyles.botonCantidad(theme)}
          >
            <AddIcon />
          </IconButton>
        </Box>

        {/* Botón eliminar */}
        <IconButton
          onClick={() => eliminarItem(it.id)}
          sx={carritoItemStyles.botonEliminar}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
      }
