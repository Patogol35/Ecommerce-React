const styles = {
  root: {
    pb: { xs: 16, sm: 6 }, // espacio para el botón flotante
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
    fontSize: 36,
  },

  footerBox: (theme) => ({
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 20, sm: "auto" },
    left: { xs: "50%", sm: "auto" },
    transform: { xs: "translateX(-50%)", sm: "none" },

    width: { xs: "92%", sm: "100%" },
    maxWidth: { xs: 500, sm: "none" },

    backdropFilter: { xs: "blur(14px)", sm: "none" },

    backgroundColor: {
      xs:
        theme.palette.mode === "dark"
          ? "rgba(20,20,20,0.75)"
          : "rgba(255,255,255,0.75)",
      sm: "transparent",
    },

    borderRadius: { xs: 4, sm: 0 },

    boxShadow: {
      xs:
        theme.palette.mode === "dark"
          ? "0 8px 25px rgba(0,0,0,0.6)"
          : "0 8px 25px rgba(0,0,0,0.15)",
      sm: "none",
    },

    padding: { xs: 2.5, sm: 0 },

    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,

    zIndex: 1200,
  }),

  divider: {
    display: { xs: "none", sm: "block" },
    mb: 2,
  },

  total: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontWeight: 800,
    fontSize: "1.2rem",

    color:
      theme.palette.mode === "dark"
        ? theme.palette.primary.light
        : theme.palette.primary.main,

    background:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.05)"
        : "rgba(25,118,210,0.08)",

    padding: "0.6rem 1rem",
    borderRadius: 3,
  }),

  button: (theme) => ({
    width: { xs: "100%", sm: "auto" },
    py: 1.3,
    px: 4,
    fontWeight: 700,
    fontSize: "1rem",
    borderRadius: 3,

    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 6px 20px rgba(0,0,0,0.6)"
        : "0 6px 20px rgba(0,0,0,0.15)",

    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 10px 25px rgba(0,0,0,0.7)"
          : "0 10px 25px rgba(0,0,0,0.25)",
    },
  }),
};

export default styles;
