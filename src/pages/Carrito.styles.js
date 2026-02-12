const styles = {
  root: {
    pb: { xs: 14, sm: 6 }, // espacio para el flotante
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    color: "primary.main",
    mt: 3,
    mb: 3,
  },

  headerIcon: {
    fontSize: 34,
  },

  footerBox: () => ({
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 20, sm: "auto" },
    left: { xs: "50%", sm: "auto" },
    transform: { xs: "translateX(-50%)", sm: "none" },

    width: { xs: "90%", sm: "100%" },
    maxWidth: { xs: 420, sm: "none" },

    // ❌ sin fondo
    backgroundColor: "transparent",
    backdropFilter: "none",
    boxShadow: "none",

    display: "flex",
    flexDirection: { xs: "row", sm: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,

    zIndex: 1200,
  }),

  divider: {
    display: "none",
  },

  total: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    fontWeight: 700,
    fontSize: "0.95rem",

    color:
      theme.palette.mode === "dark"
        ? theme.palette.primary.light
        : theme.palette.primary.main,
  }),

  button: (theme) => ({
    py: 0.9,
    px: 2.5,
    fontWeight: 600,
    fontSize: "0.85rem",
    borderRadius: 2,

    background: theme.palette.primary.main,

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 4px 12px rgba(0,0,0,0.6)"
        : "0 4px 12px rgba(0,0,0,0.15)",

    transition: "all 0.2s ease",

    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 6px 16px rgba(0,0,0,0.7)"
          : "0 6px 16px rgba(0,0,0,0.25)",
    },
  }),
};

export default styles;
