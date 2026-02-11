import { useContext } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/CartContext";
import CarritoItem from "./CarritoItem";
import styles from "./Carrito.styles";

const Carrito = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={styles.root}>
      {/* ===== HEADER ===== */}
      <Box sx={styles.header}>
        <ShoppingCartIcon sx={styles.headerIcon} />
        <Typography variant="h4" fontWeight={800}>
          Mi Carrito
        </Typography>
      </Box>

      {/* ===== CONTENIDO ===== */}
      {cartItems.length === 0 ? (
        <Box textAlign="center" mt={6}>
          <Typography variant="h6" color="text.secondary">
            Tu carrito está vacío 🛒
          </Typography>
        </Box>
      ) : (
        <>
          {cartItems.map((item) => (
            <CarritoItem key={item.id} item={item} />
          ))}

          <Divider sx={styles.divider} />

          {/* ===== FOOTER TOTAL ===== */}
          <Box sx={styles.footerBox(theme)}>
            <Box sx={styles.total(theme)}>
              <Typography variant="subtitle1" fontWeight={700}>
                Total:
              </Typography>
              <Typography variant="h6" fontWeight={800}>
                ${totalPrice.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              onClick={clearCart}
              sx={styles.button(theme)}
            >
              Vaciar Carrito
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Carrito;
