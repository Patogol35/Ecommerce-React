const styles = {
  /* ================= ROOT ================= */
  root: {
    pb: { xs: 10, sm: 3 }, // espacio cuando footer es fixed
  },

  /* ================= HEADER ================= */
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    mt: 4,
    mb: 4,
    fontWeight: 700,
    letterSpacing: 0.5,
  },

  headerIcon: {
    fontSize: 32,
  },

  /* ================= CARD PRODUCTO ================= */
  card: (theme) => ({
    borderRadius: 4,
    p: 2.5,

    backgroundColor: "background.paper",

    border: "1.5px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.25)" // blanco en oscuro
        : "rgba(0,0,0,0.4)",       // negro en claro

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 20px rgba(0,0,0,0.6)"
        : "0 8px 20px rgba(0,0,0,0.08)",

    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      borderColor:
        theme.palette.mode === "dark"
          ? "#ffffff"
          : "#000000",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 12px 30px rgba(0,0,0,0.8)"
          : "0 12px 30px rgba(0,0,0,0.15)",
    },
  }),

  /* ================= FOOTER ================= */
  footerBox: (theme) => ({
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 20, sm: "auto" },
    left: { xs: "50%", sm: "auto" },
    transform: { xs: "translateX(-50%)", sm: "none" },

    width: { xs: "92%", sm: "100%" },
    maxWidth: { xs: 440, sm: "none" },

    borderRadius: 4,
    padding: "18px 20px",

    backdropFilter: "blur(12px)",

    background:
      theme.palette.mode === "dark"
        ? "rgba(30, 30, 30, 0.75)"
        : "rgba(255, 255, 255, 0.85)",

    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.08)"
        : "rgba(0,0,0,0.06)",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 10px 30px rgba(0,0,0,0.6)"
        : "0 10px 30px rgba(0,0,0,0.1)",

    display: "flex",
    flexDirection: "column",
    gap: 2,

    zIndex: 1200,
  }),

  /* ================= DIVIDER ================= */
  divider: {
    opacity: 0.15,
  },

  /* ================= TOTAL ================= */
  total: (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    fontWeight: 600,
    fontSize: "1rem",

    color: theme.palette.text.primary,

    padding: "10px 14px",
    borderRadius: 2,

    background:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.04)"
        : "rgba(0,0,0,0.03)",

    border: "1px solid",
    borderColor: "divider",
  }),

  totalAmount: {
    fontWeight: 700,
    fontSize: "1.1rem",
  },

  /* ================= BUTTON PAGAR ================= */
  button: (theme) => ({
    py: 1.2,
    borderRadius: 3,
    fontWeight: 700,
    fontSize: "0.95rem",
    letterSpacing: 0.5,
    textTransform: "none",

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #1976d2, #42a5f5)"
        : "linear-gradient(135deg, #1565c0, #1976d2)",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 6px 20px rgba(0,0,0,0.6)"
        : "0 6px 20px rgba(0,0,0,0.2)",

    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 10px 25px rgba(0,0,0,0.7)"
          : "0 10px 25px rgba(0,0,0,0.3)",
    },
  }),
};

export default styles;
