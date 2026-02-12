  const styles = {
  root: (theme) => ({
    minHeight: "100vh",
    pb: { xs: 18, sm: 6 },
    px: { xs: 1, sm: 2 },

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg, #0f0f0f 0%, #181818 100%)"
        : "linear-gradient(180deg, #f5f6f8 0%, #ffffff 100%)",
  }),

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

  footerBox: (theme) => ({
    position: { xs: "fixed", sm: "sticky" },
    bottom: { xs: 16, sm: 20 },

    width: { xs: "92%", sm: "100%" },
    maxWidth: 480,
    mx: "auto",

    p: 2.5,
    borderRadius: 4,

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(145deg, #1b1b1b, #242424)"
        : "#ffffff",

    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.3)"
        : "rgba(0,0,0,0.12)",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 32px rgba(0,0,0,0.8)"
        : "0 10px 28px rgba(0,0,0,0.2)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1.5,

    zIndex: 1200,
  }),

  divider: {
    display: "none",
  },

  total: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 1.2,

    fontWeight: 700,
    fontSize: "0.95rem",

    color: "#fff",

    borderRadius: 99,
    px: 2.5,
    py: 0.8,

    background:
      theme.palette.mode === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.main,

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 4px 14px rgba(0,0,0,0.7)"
        : "0 4px 14px rgba(0,0,0,0.25)",
  }),

  button: (theme) => ({
    py: 1,
    px: 3.5,
    fontWeight: 600,
    fontSize: "0.85rem",
    borderRadius: 99,

    background: theme.palette.primary.main,

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 6px 18px rgba(0,0,0,0.8)"
        : "0 6px 18px rgba(0,0,0,0.25)",

    transition: "all 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 10px 24px rgba(0,0,0,0.9)"
          : "0 10px 24px rgba(0,0,0,0.35)",
    },
  }),
};

export default styles;
