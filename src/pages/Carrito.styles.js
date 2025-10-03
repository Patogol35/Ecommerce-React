const styles = {
  root: {
    pb: { xs: 14, sm: 6 },
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    color: "primary.main",
    mt: 3,
    mb: 3,
    fontWeight: 700,          // más marcado
    fontSize: "1.35rem",      // un poco más grande
    letterSpacing: 0.5,       // más limpio
  },

  headerIcon: {
    fontSize: 40,             // más grande para balancear el título
    color: "primary.main",    // coherente con el header
  },

  footerBox: (theme) => ({
    textAlign: "right",
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 0, sm: "auto" },
    left: 0,
    right: 0,
    bgcolor: { 
      xs: theme.palette.mode === "dark"
        ? "rgba(18,18,18,0.85)"   // oscuro translúcido
        : "rgba(255,255,255,0.85)" // claro translúcido
    },
    backdropFilter: "blur(10px)", // ✅ efecto vidrio más notorio
    p: { xs: 2, sm: 0 },
    boxShadow: {
      xs:
        theme.palette.mode === "dark"
          ? "0 -6px 18px rgba(0,0,0,0.7)" // más marcado en dark
          : "0 -4px 14px rgba(0,0,0,0.15)", // limpio en light
      sm: "none",
    },
    borderTop: {
      xs: `1px solid ${theme.palette.divider}`,
      sm: "none",
    },
  }),

  divider: {
    mb: 2,
    display: { xs: "none", sm: "block" },
  },

  button: {
    width: { xs: "100%", sm: "auto" },
    transition: "all 0.25s ease",
    fontWeight: "bold",
    borderRadius: 3,
    py: 1.3,
    px: { xs: 2.5, sm: 4 }, // más cómodos
    fontSize: "1rem",       // más legible
    "&:hover": {
      transform: "translateY(-2px) scale(1.04)", // movimiento más elegante
      boxShadow: 6,
    },
  },
};

export default styles;
