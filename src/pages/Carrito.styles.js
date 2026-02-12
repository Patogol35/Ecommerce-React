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

    backgroundColor: "transparent",
    boxShadow: "none",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,

    zIndex: 1200,
  }),

  divider: {
    display: "none",
  },

  total: (theme) => ({
    fontWeight: 700,
    fontSize: "0.85rem",

    color:
      theme.palette.mode === "dark"
        ? theme.palette.primary.light
        : theme.palette.primary.main,

    borderRadius: 20,
    px: 2,
    py: 0.6,

    background:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.08)"
        : "rgba(25,118,210,0.08)",

    border: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.15)"
        : "rgba(25,118,210,0.2)"
    }`,
  }),

  button: (theme) => ({
    py: 0.9,
    px: 3,
    fontWeight: 600,
    fontSize: "0.85rem",
    borderRadius: 20, // pill shape elegante

    background: theme.palette.primary.main,

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 4px 14px rgba(0,0,0,0.6)"
        : "0 4px 14px rgba(0,0,0,0.15)",

    transition: "all 0.2s ease",

    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 6px 18px rgba(0,0,0,0.7)"
          : "0 6px 18px rgba(0,0,0,0.25)",
    },
  }),
};

export default styles;
