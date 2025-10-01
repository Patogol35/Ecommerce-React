const loginStyles = {
  container: (theme) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #121212 0%, #1e1e1e 100%)"
        : "linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)",
  }),

  paper: (theme) => ({
    p: 4,
    borderRadius: 3,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 24px rgba(0,0,0,0.5)"
        : "0 12px 24px rgba(0,0,0,0.15)",
    backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
  }),

  titulo: (theme) => ({
    color: theme.palette.mode === "dark" ? "#42a5f5" : "#1976d2",
  }),

  subtitulo: {
    mb: 2,
  },

  botonLogin: (theme) => ({
    py: 1.5,
    fontWeight: "bold",
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #42a5f5, #1976d2)"
        : "linear-gradient(135deg, #1976d2, #42a5f5)",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    },
    transition: "all 0.3s",
  }),

  botonRegister: (theme) => ({
    py: 1.5,
    fontWeight: "bold",
    borderColor: theme.palette.mode === "dark" ? "#42a5f5" : "#1976d2",
    color: theme.palette.mode === "dark" ? "#42a5f5" : "#1976d2",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(66,165,245,0.08)"
          : "rgba(25,118,210,0.08)",
      transform: "scale(1.03)",
      borderColor: theme.palette.mode === "dark" ? "#42a5f5" : "#1976d2",
    },
    transition: "all 0.3s",
  }),
};

export default loginStyles;
