const styles = {
  /* =========================
     ROOT – FONDO + ESPACIADO
  ========================= */
  root: (theme) => ({
    minHeight: "100vh",

    // 🔑 padding ajustado (sin hueco abajo)
    pb: { xs: 11, sm: 4 },
    px: { xs: 1, sm: 2 },

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg, #0f0f0f 0%, #181818 100%)"
        : "linear-gradient(180deg, #f5f6f8 0%, #ffffff 100%)",
  }),

  /* =========================
     HEADER
  ========================= */
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

  /* =========================
     FOOTER (TOTAL + BOTÓN)
     👉 diseño original intacto
  ========================= */
  footerBox: (theme) => ({
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 12, sm: "auto" },
    left: { xs: "50%", sm: "auto" },
    transform: { xs: "translateX(-50%)", sm: "none" },

    width: { xs: "92%", sm: "100%" },
    maxWidth: 420,

    p: 1.8, // 👈 compacto, sin aire extra
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
    gap: 1.2,

    zIndex: 1200,
  }),

  divider: {
    display: "none",
  },

  /* =========================
     TOTAL (ORIGINAL)
  ========================= */
  total: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 1.2,

    fontWeight: 700,
    fontSize: "0.9rem",

    color: "#fff",

    borderRadius: 20,
    px: 2.2,
    py: 0.7,

    background:
      theme.palette.mode === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.main,

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 4px 12px rgba(0,0,0,0.6)"
        : "0 4px 12px rgba(0,0,0,0.2)",
  }),

  /* =========================
     BOTÓN (ORIGINAL)
  ========================= */
  button: (theme) => ({
    py: 0.9,
    px: 3,
    fontWeight: 600,
    fontSize: "0.85rem",
    borderRadius: 20,

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
