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
        display: "flex",
        flexDirection: "column",
        backgroundColor: "red",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
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

          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
          color: theme.palette.primary.contrastText,

          boxShadow:
            theme.palette.mode === "dark"
              ? "0 12px 30px rgba(0,0,0,0.6)"
              : "0 10px 25px rgba(0,0,0,0.25)",

          transition: "all 0.25s ease",

          "&:hover": {
            transform: "translateY(-3px) scale(1.05)",
            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          },
        }}
      >
        <ShoppingCartIcon />
      </IconButton>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 3,
          mt: "auto",

          color: "text.secondary",

          borderTop: "1px solid",
          borderColor: "divider",

          backgroundColor: "background.paper",

          transition: "background-color 0.3s ease",
        }}
      >
        © 2026 · Mi tienda
      </Box>
    </Box>
  );
      }
