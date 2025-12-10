const loginStyles = {
  container: (theme) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(160deg, #0c0c0c 0%, #1a1a1a 100%)"
        : "linear-gradient(160deg, #e3f2fd 0%, #bbdefb 100%)",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.5),
    },
  }),

  paper: (theme) => ({
    width: "100%",
    maxWidth: 380,
    padding: theme.spacing(4),
    borderRadius: 24,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),

    backgroundColor:
      theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 28px rgba(0,0,0,0.6)"
        : "0 12px 28px rgba(0,0,0,0.15)",

    transition: "0.3s ease",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      borderRadius: 18,
      gap: theme.spacing(2.5),
    },
  }),

  titulo: (theme) => ({
    textAlign: "center",
    fontSize: "1.9rem",
    fontWeight: 700,
    letterSpacing: "0.5px",

    color:
      theme.palette.mode === "dark" ? "#90caf9" : "#1565c0",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
  }),

  subtitulo: {
    textAlign: "center",
    opacity: 0.7,
    fontSize: "0.95rem",
    marginTop: "-10px",
  },

  botonLogin: (theme) => ({
    padding: "14px",
    fontWeight: 700,
    borderRadius: 14,
    fontSize: "1rem",

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #42a5f5, #1e88e5)"
        : "linear-gradient(135deg, #1e88e5, #42a5f5)",
    color: "#fff",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 6px 14px rgba(66,165,245,0.4)"
        : "0 6px 14px rgba(30,136,229,0.35)",

    transition: "all 0.25s ease",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 8px 18px rgba(66,165,245,0.45)"
          : "0 8px 18px rgba(30,136,229,0.4)",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "12px",
      borderRadius: 12,
    },
  }),

  botonRegister: (theme) => ({
    padding: "13px",
    fontWeight: 700,
    borderRadius: 12,
    fontSize: "1rem",

    border: `2px solid ${
      theme.palette.mode === "dark" ? "#42a5f5" : "#1e88e5"
    }`,
    color: theme.palette.mode === "dark" ? "#42a5f5" : "#1e88e5",

    transition: "all 0.25s ease",
    "&:hover": {
      background:
        theme.palette.mode === "dark"
          ? "rgba(66,165,245,0.12)"
          : "rgba(30,136,229,0.12)",
      transform: "scale(1.02)",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "11px",
      borderRadius: 10,
    },
  }),
};

export default loginStyles;
