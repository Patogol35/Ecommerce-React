import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useCarrito } from "../../context/CarritoContext";
import { carritoItemStyles } from "./Carrito.styles";

export default function CarritoItem({
  it,
  incrementar,
  decrementar,
  calcularSubtotal,
}) {
  const { eliminarItem } = useCarrito();
  const producto = it.producto;

  return (
    <Card sx={carritoItemStyles.card}>
      <CardMedia
        component="img"
        image={producto?.imagen}
        alt={producto?.nombre}
        sx={(theme) => carritoItemStyles.media(theme)}
      />

      <CardContent sx={carritoItemStyles.content}>
        <Typography variant="h6">{producto?.nombre}</Typography>
        <Typography color="text.secondary">
          ${producto?.precio?.toLocaleString()}
        </Typography>

        <Box sx={carritoItemStyles.controls}>
          <IconButton onClick={() => decrementar(it)}>
            <Remove />
          </IconButton>

          <Typography>{it.cantidad}</Typography>

          <IconButton onClick={() => incrementar(it)}>
            <Add />
          </IconButton>
        </Box>

        <Typography sx={carritoItemStyles.subtotal}>
          Subtotal: ${calcularSubtotal(it).toLocaleString()}
        </Typography>

        <Button
          color="error"
          startIcon={<Delete />}
          onClick={() => eliminarItem(it.id)}
        >
          Eliminar
        </Button>
      </CardContent>
    </Card>
  );
}
