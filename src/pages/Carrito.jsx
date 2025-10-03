import { useEffect, useMemo } from "react";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import { crearPedido } from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import {
  Typography,
  Box,
  Divider,
  Button,
  useTheme,
} from "@mui/material";

import CarritoItem from "../components/CarritoItem";
import { calcularSubtotal } from "../utils/carritoUtils";

import styles from "./Carrito.styles";

export default function Carrito() {
  const theme = useTheme();
  const {
    items,
    cargarCarrito,
    loading,
    limpiarLocal,
    setCantidad,
    eliminarItem,
  } = useCarrito();

  const { access } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    cargarCarrito();
  }, []);

  const total = useMemo(
    () => items.reduce((acc, it) => acc + calcularSubtotal(it), 0),
    [items]
  );

  const comprar = async () => {
    try {
      const res = await crearPedido(access);
      if (res?.error) {
        toast.error(res.error);
        return;
      }
      toast.success("Pedido realizado ✅");
      limpiarLocal();
      navigate("/pedidos");
    } catch (e) {
      toast.error(e.message || "Ocurrió un error en la compra");
    }
  };

  const incrementar = (it) => {
    const stock = it.producto?.stock ?? 0;
    if (it.cantidad < stock) {
      setCantidad(it.id, it.cantidad + 1);
    } else {
      toast.warning(`Solo hay ${stock} unidades disponibles`);
    }
  };

  const decrementar = (it) =>
    it.cantidad > 1 && setCantidad(it.id, it.cantidad - 1);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <ShoppingCartIcon sx={styles.headerIcon} />
        <Typography variant="h5">Mi Carrito</Typography>
      </Box>

      {loading && <Typography>Cargando carrito...</Typography>}

      {!loading && items.length === 0 && (
        <Typography>Tu carrito está vacío.</Typography>
      )}

      {!loading &&
        items.map((it) => (
          <CarritoItem
            key={it.id}
            it={it}
            theme={theme}
            incrementar={incrementar}
            decrementar={decrementar}
            setCantidad={setCantidad}
            eliminarItem={eliminarItem}
          />
        ))}

      {!loading && items.length > 0 && (
        <Box sx={styles.footerBox(theme)}>
          <Divider sx={styles.divider} />

          <Typography variant="h6" gutterBottom sx={{ mb: 1, display: { xs: "none", sm: "block" } }}>
            Total: <strong>${total.toFixed(2)}</strong>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ShoppingCartCheckoutIcon />}
            sx={styles.button(total)} // 👈 total dinámico
            onClick={comprar}
          >
            Finalizar compra – ${total.toFixed(2)}
          </Button>
        </Box>
      )}
    </Box>
  );
            }
