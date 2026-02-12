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
      sx={(theme) => ({
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        transition: "background-color 0.3s ease",
      })}
    >
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          pt: `calc(${theme.mixins.toolbar.minHeight}px + 24px)`,
          pb: 4,
        }}
      >
        <Outlet />
      </Container>

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

      <Box
        component="footer"
        sx={(theme) => ({
          textAlign: "center",
          py: 3,
          mt: "auto",
          color: theme.palette.text.secondary,
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          transition: "background-color 0.3s ease",
        })}
      >
        © 2026 · E-commerce Jorge Patricio
      </Box>
    </Box>
  );
}
