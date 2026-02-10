import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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

      {/* Footer opcional */}
      <Box sx={{ textAlign: "center", py: 3, opacity: 0.6 }}>
        © 2026 · Mi tienda
      </Box>
    </Box>
  );
}
