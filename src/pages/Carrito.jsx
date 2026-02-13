import { useMemo, useCallback } from "react";
import { useCarrito } from "../../context/CarritoContext";
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import CarritoItem from "./CarritoItem";
import { carritoStyles as styles } from "./Carrito.styles";

export default function Carrito() {
  const { items, loading, setCantidad } = useCarrito();
  const theme = useTheme();

  const calcularSubtotal = (item) =>
    (item.producto?.precio ?? 0) * item.cantidad;

  const total = useMemo(
    () => items.reduce((acc, it) => acc + calcularSubtotal(it), 0),
    [items]
  );

  const incrementar = useCallback(
    (it) => {
      const stock = it.producto?.stock ?? 0;
      if (it.cantidad < stock) {
        setCantidad(it.id, it.cantidad + 1);
      } else {
        toast.warning(`Solo hay ${stock} unidades disponibles`);
      }
    },
    [setCantidad]
  );

  const decrementar = useCallback(
    (it) => {
      if (it.cantidad > 1) {
        setCantidad(it.id, it.cantidad - 1);
      }
    },
    [setCantidad]
  );

  if (loading)
    return (
      <Box sx={styles.loaderContainer}>
        <CircularProgress />
      </Box>
    );

  return (
    <Container sx={styles.container}>
      <Typography variant="h4" gutterBottom>
        Carrito
      </Typography>

      {items.length === 0 ? (
        <Typography>Tu carrito está vacío.</Typography>
      ) : (
        <>
          {items.map((it) => (
            <CarritoItem
              key={it.id}
              it={it}
              incrementar={incrementar}
              decrementar={decrementar}
              calcularSubtotal={calcularSubtotal}
            />
          ))}

          <Box sx={styles.footerBox(theme)}>
            <Typography variant="h6">
              Total: ${total.toLocaleString()}
            </Typography>
            <Button variant="contained" color="primary">
              Finalizar compra
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}
