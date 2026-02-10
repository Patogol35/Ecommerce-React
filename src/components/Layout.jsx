import { Box, Container, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Layout() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#0f172a" : "#f8fafc",
        transition: "background-color .3s ease",
      }}
    >
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{
          pt: `calc(${theme.mixins.toolbar.minHeight}px + 24px)`,
          pb: 6,
        }}
      >
        <Outlet />
      </Container>

      {/* BOTÓN FLOTANTE DEL CARRITO */}
      <IconButton
        onClick={() => navigate("/carrito")}
        aria-label="Abrir carrito"
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
          boxShadow: isDark
            ? "0 12px 30px rgba(0,0,0,0.55)"
            : "0 10px 25px rgba(0,0,0,0.35)",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <ShoppingCartIcon />
      </IconButton>

      {/* Footer */}
      <Box sx={{ textAlign: "center", py: 3, opacity: 0.6 }}>
        © 2026 · Mi tienda
      </Box>
    </Box>
  );
      }
