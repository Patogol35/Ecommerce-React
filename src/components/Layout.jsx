import { Box, Container, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Layout() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      <Navbar />

      <Container
        sx={{
          pt: `calc(${theme.mixins.toolbar.minHeight}px + 16px)`,
          pb: 4,
        }}
      >
        <Outlet />
      </Container>

      {/* BOTÓN FLOTANTE DEL CARRITO (ARREGLADO) */}
      <IconButton
        onClick={() => navigate("/carrito")}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1300,
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
            }
