const loginStyles = {
  container: (theme) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.breakpoints.down("sm") ? "16px" : "32px",
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 100%)"
        : "linear-gradient(135deg, #64b5f6 0%, #1976d2 100%)",
  }),

  paper: (theme) => ({
    padding: theme.breakpoints.down("sm") ? "28px" : "40px",
    borderRadius: 20,
    width: "100%",
    maxWidth: "420px", // 🔥 evita que se vea demasiado grande en PC
    display: "flex",
    flexDirection: "column",
    gap: 28,
    backdropFilter: "blur(10px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 32px rgba(0,0,0,0.6)"
        : "0 8px 32px rgba(0,0,0,0.18)",
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(30,30,30,0.9)" : "rgba(255,255,255,0.9)",
    animation: "fadeIn 0.5s ease",
  }),

  titulo: (theme) => ({
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#1976d2",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "1.8rem",
  }),

  subtitulo: {
    textAlign: "center",
    opacity: 0.8,
  },

  botonLogin: (theme) => ({
    py: 1.4,
    fontWeight: 700,
    borderRadius: 2,
    fontSize: "1.05rem",
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #64b5f6, #1976d2)"
        : "linear-gradient(135deg, #1976d2, #64b5f6)",
    "&:hover": {
      transform: "scale(1.04)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    },
    transition: "all 0.25s ease",
  }),

  botonRegister: (theme) => ({
    py: 1.4,
    fontWeight: 700,
    fontSize: "1.05rem",
    borderRadius: 2,
    borderColor: theme.palette.mode === "dark" ? "#64b5f6" : "#1976d2",
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#1976d2",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(100,181,246,0.08)"
          : "rgba(25,118,210,0.1)",
      transform: "scale(1.04)",
    },
    transition: "all 0.25s ease",
  }),
};
