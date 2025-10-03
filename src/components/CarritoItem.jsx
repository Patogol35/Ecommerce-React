import { useState, useEffect } from "react";
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

  // Estado local para el input
  const [inputCantidad, setInputCantidad] = useState(it.cantidad);

  // Sincroniza si cambia la cantidad desde afuera
  useEffect(() => {
    setInputCantidad(it.cantidad);
  }, [it.cantidad]);

  return (
    <Card sx={carritoItemStyles.card}>
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
            onClick={() => decrementar(it)}
            sx={carritoItemStyles.botonCantidad}
          >
            <RemoveIcon />
          </IconButton>

          <TextField
            type="text" // cambio clave para poder borrar todo de una vez
            size="small"
            value={inputCantidad}
            inputProps={{ inputMode: "numeric" }} // muestra teclado numérico en móviles
            onChange={(e) => {
              const valor = e.target.value;

              // permite borrar y escribir libre
              setInputCantidad(valor);

              const nuevaCantidad = Number(valor);

              if (valor === "") return; // temporalmente vacío

              if (!Number.isNaN(nuevaCantidad) && nuevaCantidad >= 1 && nuevaCantidad <= stock) {
                setCantidad(it.id, nuevaCantidad);
              }

              if (nuevaCantidad > stock) {
                toast.warning(`No puedes pedir más de ${stock} unidades`);
                setCantidad(it.id, stock);
                setInputCantidad(stock);
              }
            }}
            onBlur={() => {
              let nuevaCantidad = Number(inputCantidad);

              if (!nuevaCantidad || nuevaCantidad < 1) {
                nuevaCantidad = 1;
              } else if (nuevaCantidad > stock) {
                toast.warning(`No puedes pedir más de ${stock} unidades`);
                nuevaCantidad = stock;
              }

              setCantidad(it.id, nuevaCantidad);
              setInputCantidad(nuevaCantidad);
            }}
            sx={carritoItemStyles.cantidadInput}
          />

          <IconButton
            onClick={() => incrementar(it)}
            disabled={it.cantidad >= stock}
            sx={carritoItemStyles.botonCantidad}
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
