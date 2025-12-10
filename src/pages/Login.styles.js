const loginStyles = {
  container: (theme) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1), // 🔥 MUCHÍSIMO MENOS ESPACIO
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(160deg, #0a0a0a 0%, #141414 100%)"
        : "linear-gradient(160deg, #2196f3 0%, #1565c0 100%)",
  }),

  paper: (theme) => ({
    padding: theme.spacing(3),
    borderRadius: 14,
    width: "100%",
    maxWidth: 360,                // 🔥 MÁS PEQUEÑO Y ELEGANTE
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(20,20,20,0.85)"
        : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 28px rgba(0,0,0,0.6)"
        : "0 12px 28px rgba(0,0,0,0.15)",
  }),

  titulo: (theme) => ({
    fontWeight: 700,
    textAlign: "center",
    fontSize: "1.6rem",
    marginBottom: theme.spacing(1), // 🔥 MENOS ESPACIO ARRIBA Y ABAJO
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#0d47a1",
  }),

  subtitulo: {
    textAlign: "center",
    opacity: 0.75,
    marginTop: -8,               // 🔥 MÁS COMPACTO
    marginBottom: 4,
  },

  botonLogin: (theme) => ({
    padding: "10px",
    fontWeight: 600,
    borderRadius: 10,
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #1e88e5, #1565c0)"
        : "linear-gradient(135deg, #1565c0, #42a5f5)",
    transition: "0.25s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 8px 18px rgba(0,0,0,0.55)"
          : "0 8px 18px rgba(0,0,0,0.22)",
    },
  }),

  botonRegister: (theme) => ({
    padding: "10px",
    fontWeight: 600,
    borderRadius: 10,
    borderColor: theme.palette.mode === "dark" ? "#64b5f6" : "#1565c0",
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#1565c0",
    transition: "0.25s ease",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(100,181,246,0.1)"
          : "rgba(21,101,192,0.1)",
      transform: "translateY(-2px)",
    },
  }),
};

export default loginStyles;
