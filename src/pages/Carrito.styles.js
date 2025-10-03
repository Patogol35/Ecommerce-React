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
    mt: 4,
    mb: 4,
    fontWeight: 700,
    fontSize: "1.6rem",        // ✅ mucho más grande
    textTransform: "uppercase" // ✅ estilo más marcado
  },

  headerIcon: {
    fontSize: 44,              // ✅ más grande
    color: "primary.main",
  },

  footerBox: (theme) => ({
    textAlign: "right",
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 12, sm: "auto" }, // ✅ se separa del borde
    left: { xs: 12, sm: 0 },        // ✅ margenes internos
    right: { xs: 12, sm: 0 },
    borderRadius: { xs: 3, sm: 0 }, // ✅ redondeado solo en mobile
    bgcolor: theme.palette.mode === "dark"
      ? "rgba(30,30,30,0.9)"
      : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(12px)",
    p: { xs: 2.5, sm: 0 },
    boxShadow: {
      xs:
        theme.palette.mode === "dark"
          ? "0 -6px 20px rgba(0,0,0,0.7)"
          : "0 -4px 16px rgba(0,0,0,0.15)",
      sm: "none",
    },
    border: { xs: `1px solid ${theme.palette.divider}`, sm: "none" },
  }),

  divider: {
    mb: 3, // ✅ más aire
    display: { xs: "none", sm: "block" },
  },

  button: {
    width: { xs: "100%", sm: "auto" },
    transition: "all 0.25s ease",
    fontWeight: "bold",
    borderRadius: 3,
    py: 1.4,
    px: { xs: 3, sm: 4 },
    fontSize: "1rem",
    background: "linear-gradient(90deg, #1976d2, #42a5f5)", // ✅ visible
    color: "#fff",
    "&:hover": {
      transform: "translateY(-3px) scale(1.05)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
      background: "linear-gradient(90deg, #1565c0, #1e88e5)",
    },
  },
};

export default styles;
