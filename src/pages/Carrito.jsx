import { useEffect, useMemo, useState, useCallback } from "react";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import { crearPedido } from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import {
  Typography,
  Box,
  Divider,
  Button,
  CircularProgress,
  useTheme,
} from "@mui/material";

import { motion } from "framer-motion";

import CarritoItem from "../components/CarritoItem";
import { calcularSubtotal } from "../utils/carritoUtils";
import styles from "./Carrito.styles";

function CarritoFooter({ totalFmt, comprar, loadingCompra }) {
  const theme = useTheme();
  return (
    <Box sx={styles.footerBox(theme)}>
      <Divider sx={styles.divider} />
      <Typography variant="h6" sx={{ mb: 1, display: { xs: "none", sm: "block" } }}>
        Total: <strong>${totalFmt}</strong>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ShoppingCartCheckoutIcon />}
        sx={styles.button(totalFmt)}
        onClick={comprar}
        disabled={parseFloat(totalFmt) <= 0 || loadingCompra}
      >
        {loadingCompra ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <>Finalizar compra – ${totalFmt}</>
        )}
      </Button>
    </Box>
  );
}

export default function Carrito() {
  const { items, cargarCarrito, loading, limpiarLocal, setCantidad, eliminarItem } = useCarrito();
  const { access } = useAuth();
  const navigate = useNavigate();
  const [loadingCompra, setLoadingCompra] = useState(false);

  useEffect(() => { cargarCarrito(); }, []);

  const total = useMemo(() => items.reduce((acc, it) => acc + calcularSubtotal(it), 0), [items]);
  const totalFmt = useMemo(() => total.toFixed(2), [total]);

  const comprar = async () => {
    setLoadingCompra(true);
    try {
      const res = await crearPedido(access);
      if (res?.error) return toast.error(res.error);
      toast.success("Pedido realizado ✅");
      limpiarLocal();
      navigate("/pedidos");
    } catch (e) {
      toast.error(e.message || "Ocurrió un error en la compra");
    } finally {
      setLoadingCompra(false);
    }
  };

  const incrementar = useCallback(
    (it) => {
      const stock = it.producto?.stock ?? 0;
      it.cantidad < stock
        ? setCantidad(it.id, it.cantidad + 1)
        : toast.warning(`Solo hay ${stock} unidades disponibles`);
    },
    [setCantidad]
  );

  const decrementar = useCallback(
    (it) => it.cantidad > 1 && setCantidad(it.id, it.cantidad - 1),
    [setCantidad]
  );

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <ShoppingCartIcon sx={styles.headerIcon} />
        <Typography variant="h5">
          Mi Carrito {items.length > 0 && `(${items.length})`}
        </Typography>
      </Box>

      {loading && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Cargando carrito...</Typography>
        </Box>
      )}

      {!loading && items.length === 0 && (
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <RemoveShoppingCartIcon sx={{ fontSize: 60, color: "text.disabled" }} />
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
            Tu carrito está vacío
          </Typography>
        </Box>
      )}

      {!loading &&
        items.map((it) => (
          <motion.div
            key={it.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CarritoItem
              it={it}
              incrementar={incrementar}
              decrementar={decrementar}
              setCantidad={setCantidad}
              eliminarItem={eliminarItem}
            />
            <Typography variant="body2" align="right" sx={{ mb: 2, color: "text.secondary" }}>
              Subtotal: ${calcularSubtotal(it).toFixed(2)}
            </Typography>
          </motion.div>
        ))}

      {!loading && items.length > 0 && (
        <CarritoFooter totalFmt={totalFmt} comprar={comprar} loadingCompra={loadingCompra} />
      )}
    </Box>
  );
}
