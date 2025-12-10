const loginStyles = {
  container: (theme) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 100%)"
        : "linear-gradient(145deg, #64b5f6 0%, #1976d2 100%)",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  }),

  paper: (theme) => ({
    padding: theme.spacing(4),
    borderRadius: 20,
    width: "100%",
    maxWidth: 420, 
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),

    backgroundColor:
      theme.palette.mode === "dark" ? "#1e1e1e" : "rgba(255,255,255,0.9)",
    backdropFilter: "blur(6px)",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 20px 40px rgba(0,0,0,0.5)"
        : "0 20px 40px rgba(0,0,0,0.2)",

    transition: "all 0.3s ease",

    // Responsive padding
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      borderRadius: 16,
    },
  }),

  titulo: (theme) => ({
    fontWeight: 700,
    textAlign: "center",
    fontSize: "1.8rem",
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#0d47a1",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  }),

  subtitulo: {
    textAlign: "center",
    opacity: 0.8,
    marginBottom: 8,
  },

  botonLogin: (theme) => ({
    padding: "14px",
    borderRadius: 12,
    fontWeight: 700,

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #1e88e5, #42a5f5)"
        : "linear-gradient(135deg, #1976d2, #64b5f6)",

    color: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",

    transition: "all 0.25s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    },
  }),

  botonRegister: (theme) => ({
    padding: "14px",
    borderRadius: 12,
    fontWeight: 700,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.mode === "dark" ? "#64b5f6" : "#1976d2",
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#0d47a1",

    transition: "all 0.25s ease",
    "&:hover": {
      background:
        theme.palette.mode === "dark"
          ? "rgba(100,181,246,0.12)"
          : "rgba(25,118,210,0.12)",
      transform: "scale(1.03)",
    },
  }),
};

export default loginStyles;
