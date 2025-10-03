const styles = {
  root: {
    pb: { xs: 14, sm: 6 }, // padding inferior para que el footer fijo no tape nada
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    color: "primary.main",
    mt: 3,
    mb: 3,
    fontWeight: 600, // ✅ encabezado más fuerte
    fontSize: "1.25rem", // ✅ tamaño consistente
  },

  headerIcon: {
    fontSize: 36,
    opacity: 0.9, // ✅ suaviza un poco el icono
  },

  footerBox: (theme) => ({
    textAlign: "right",
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 0, sm: "auto" },
    left: 0,
    right: 0,
    bgcolor: { xs: theme.palette.background.paper, sm: "transparent" },
    p: { xs: 2, sm: 0 },
    boxShadow: {
      xs:
        theme.palette.mode === "dark"
          ? "0 -4px 16px rgba(0,0,0,0.6)" // ✅ sombra más suave pero profunda en dark
          : "0 -4px 12px rgba(0,0,0,0.12)", // ✅ un poco más ligera en light
      sm: "none",
    },
    borderTop: {
      xs: `1px solid ${theme.palette.divider}`, // ✅ dinámico
      sm: "none",
    },
    backdropFilter: { xs: "blur(6px)", sm: "none" }, // ✅ efecto de vidrio sutil en mobile
  }),

  divider: {
    mb: 2,
    display: { xs: "none", sm: "block" },
  },

  button: {
    width: { xs: "100%", sm: "auto" },
    transition: "all 0.3s ease",
    fontWeight: "bold",
    borderRadius: 3,
    py: 1.2,
    px: { xs: 2, sm: 3 }, // ✅ botones más cómodos
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: 6,
    },
  },
};

export default styles;
