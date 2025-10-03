import { useEffect, useMemo, useState } from "react";
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

function CarritoFooter({ total, comprar, loadingCompra }) {
  const theme = useTheme();

  return (
    <Box sx={styles.footerBox(theme)}>
      <Divider sx={styles.divider} />

      <Typography
        variant="h6"
        gutterBottom
        sx={{ mb: 1, display: { xs: "none", sm: "block" } }}
      >
        Total: <strong>${total.toFixed(2)}</strong>
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ShoppingCartCheckoutIcon />}
        sx={styles.button(total)}
        onClick={comprar}
        disabled={total <= 0 || loadingCompra}
      >
        {loadingCompra ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <>Finalizar compra – ${total.toFixed(2)}</>
        )}
      </Button>
    </Box>
  );
}

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

  const [loadingCompra, setLoadingCompra] = useState(false);

  useEffect(() => {
    cargarCarrito();
  }, []);

  const total = useMemo(
    () => items.reduce((acc, it) => acc + calcularSubtotal(it), 0),
    [items]
  );

  const comprar = async () => {
    setLoadingCompra(true);
    try {
      const res = await crearPedido(access);
      if (res?.error) {
        toast.error(res.error);
        setLoadingCompra(false);
        return;
      }
      toast.success("Pedido realizado ✅");
      limpiarLocal();
      navigate("/pedidos");
    } catch (e) {
      toast.error(e.message || "Ocurrió un error en la compra");
    } finally {
      setLoadingCompra(false);
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
      {/* HEADER */}
      <Box sx={styles.header}>
        <ShoppingCartIcon sx={styles.headerIcon} />
        <Typography variant="h5">
          Mi Carrito {items.length > 0 && `(${items.length})`}
        </Typography>
      </Box>

      {/* LOADING */}
      {loading && <Typography>Cargando carrito...</Typography>}

      {/* VACÍO */}
      {!loading && items.length === 0 && (
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <RemoveShoppingCartIcon sx={{ fontSize: 60, color: "text.disabled" }} />
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
            Tu carrito está vacío
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 3 }}
            onClick={() => navigate("/productos")}
          >
            Explorar productos
          </Button>
        </Box>
      )}

      {/* ITEMS */}
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
            <Typography
              variant="body2"
              align="right"
              sx={{ mb: 2, color: "text.secondary" }}
            >
              Subtotal: ${calcularSubtotal(it).toFixed(2)}
            </Typography>
          </motion.div>
        ))}

      {/* FOOTER */}
      {!loading && items.length > 0 && (
        <CarritoFooter total={total} comprar={comprar} loadingCompra={loadingCompra} />
      )}
    </Box>
  );
          }
