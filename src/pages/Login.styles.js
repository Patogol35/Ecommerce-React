const loginStyles = {
  container: (theme) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #0d1117 0%, #1b1f23 100%)"
        : "linear-gradient(135deg, #64b5f6 0%, #1976d2 100%)",
  }),

  paper: (theme) => ({
    padding: theme.spacing(4),
    borderRadius: 4,
    width: "100%",
    maxWidth: 420,               // 🔥 MÁS COMPACTO Y ELEGANTE
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    backdropFilter: "blur(10px)", // 🔥 GLASS EFFECT
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 20px 40px rgba(0,0,0,0.6)"
        : "0 20px 40px rgba(0,0,0,0.2)",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(30,30,30, 0.85)"
        : "rgba(255,255,255,0.9)",
  }),

  titulo: (theme) => ({
    fontWeight: "bold",
    textAlign: "center",
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#0d47a1",
  }),

  subtitulo: {
    textAlign: "center",
    opacity: 0.8,
    marginBottom: 8,
  },

  botonLogin: (theme) => ({
    padding: "12px",
    fontWeight: "bold",
    borderRadius: 2,
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #64b5f6, #1976d2)"
        : "linear-gradient(135deg, #1976d2, #64b5f6)",
    transition: "0.25s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 8px 20px rgba(0,0,0,0.5)"
          : "0 8px 20px rgba(0,0,0,0.2)",
    },
  }),

  botonRegister: (theme) => ({
    padding: "12px",
    fontWeight: "bold",
    borderRadius: 2,
    borderColor: theme.palette.mode === "dark" ? "#64b5f6" : "#1976d2",
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#1976d2",
    transition: "0.25s ease",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(100,181,246,0.1)"
          : "rgba(25,118,210,0.1)",
      transform: "translateY(-2px)",
      borderColor: theme.palette.mode === "dark" ? "#64b5f6" : "#1976d2",
    },
  }),
};

export default loginStyles;
