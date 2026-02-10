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
        backgroundColor: isDark
          ? "rgba(15,23,42,0.95)"   // dark elegante
          : theme.palette.background.default,
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
        <Box
          sx={{
            backgroundColor: isDark
              ? "rgba(30,41,59,0.85)"
              : "#fff",
            borderRadius: 3,
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 3 },
            boxShadow: isDark
              ? "0 10px 30px rgba(0,0,0,0.45)"
              : "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
