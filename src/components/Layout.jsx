import { Box, Container, Fab, Badge } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCarrito } from "../context/CarritoContext";

export default function Layout() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { carrito } = useCarrito();

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />

      <Container
        sx={{
          pt: `calc(${theme.mixins.toolbar.minHeight}px + 16px)`,
          pb: 4,
        }}
      >
        <Outlet />
      </Container>

      {/* BOTÓN FLOTANTE DEL CARRITO */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1300,
        }}
        onClick={() => navigate("/carrito")}
      >
        <Badge badgeContent={carrito.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Fab>
    </Box>
  );
        }
