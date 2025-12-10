const loginStyles = {
  container: (theme) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(160deg, #0a0a0a 0%, #141414 100%)"
        : "linear-gradient(160deg, #2196f3 0%, #1565c0 100%)",
  }),

  paper: (theme) => ({
    padding: theme.spacing(3),
    borderRadius: 12,
    width: "100%",
    maxWidth: 380,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    overflow: "hidden",
  }),

  titulo: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "1.5rem",
    marginBottom: 4,
  },

  subtitulo: {
    textAlign: "center",
    opacity: 0.8,
    marginTop: -10,
    marginBottom: 6,
  },

  botonLogin: {
    padding: "12px",
    fontWeight: 600,
    borderRadius: 8,
    background: "linear-gradient(135deg, #1976d2, #42a5f5)",
    transition: "0.25s",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    },
  },

  botonRegister: {
    padding: "12px",
    fontWeight: 600,
    borderRadius: 8,
    borderColor: "#1976d2",
    color: "#1976d2",
    "&:hover": {
      backgroundColor: "rgba(25,118,210,0.1)",
      transform: "translateY(-2px)",
    },
  },
};

export default loginStyles;
