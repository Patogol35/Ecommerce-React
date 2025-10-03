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
  theme,
  incrementar,
  decrementar,
  setCantidad,
  eliminarItem,
}) {
  const stock = it.producto?.stock ?? 0;

  // Manejo de mantener presionado botones
  const handleHold = (action, item) => {
    // Ejecutar de una vez en el click
    if (action === "inc" && item.cantidad < stock) incrementar(item);
    if (action === "dec" && item.cantidad > 1) decrementar(item);

    // Luego repetir mientras se mantenga
    let interval = setInterval(() => {
      if (action === "inc" && item.cantidad < stock) incrementar(item);
      if (action === "dec" && item.cantidad > 1) decrementar(item);
    }, 120); // velocidad (ms)

    const stop = () => clearInterval(interval);

    document.addEventListener("mouseup", stop, { once: true });
    document.addEventListener("touchend", stop, { once: true });
  };

  return (
    <Card sx={carritoItemStyles.card}>
      <CardMedia
        component="img"
        image={it.producto?.imagen || undefined}
        alt={it.producto?.nombre}
        sx={(theme) => carritoItemStyles.media(theme)}
      />

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

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip
            icon={<MonetizationOnIcon />}
            label={`$${calcularSubtotal(it).toFixed(2)}`}
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
      <Box sx={carritoItemStyles.controlesWrapper}>
        <Box sx={carritoItemStyles.cantidadWrapper}>
          <IconButton
            onMouseDown={() => handleHold("dec", it)}
            onTouchStart={() => handleHold("dec", it)}
          >
            <RemoveIcon />
          </IconButton>

          <TextField
            type="number"
            size="small"
            value={it.cantidad}
            inputProps={{ min: 1, max: stock }}
            onChange={(e) => {
              const nuevaCantidad = Number(e.target.value);
              if (nuevaCantidad >= 1 && nuevaCantidad <= stock) {
                setCantidad(it.id, nuevaCantidad);
              } else if (nuevaCantidad > stock) {
                toast.warning(`No puedes pedir más de ${stock} unidades`);
                setCantidad(it.id, stock);
              }
            }}
            sx={carritoItemStyles.cantidadInput}
          />

          <IconButton
            onMouseDown={() => handleHold("inc", it)}
            onTouchStart={() => handleHold("inc", it)}
            disabled={it.cantidad >= stock}
          >
            <AddIcon />
          </IconButton>
        </Box>

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
