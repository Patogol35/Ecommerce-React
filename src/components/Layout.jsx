import { Box, Container, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Layout() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "#0f172a"
            : "#f8fafc",
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

          backgroundColor: "primary.main",
          color: "primary.contrastText",

          boxShadow:
            theme.palette.mode === "dark"
              ? "0 12px 30px rgba(0,0,0,0.6)"
              : "0 10px 25px rgba(0,0,0,0.35)",

          transition: "all .25s ease",

          "&:hover": {
            backgroundColor: "primary.dark",
            transform: "translateY(-2px)",
          },
        }}
      >
        <ShoppingCartIcon />
      </IconButton>

      {/* Footer */}
      <Box
        sx={{
          textAlign: "center",
          py: 3,
          opacity: 0.6,
          color: "text.secondary",
        }}
      >
        © 2026 · Mi tienda
      </Box>
    </Box>
  );
}
