const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 3,
    mx: { xs: 2, sm: 0 },
    borderRadius: 4,
    overflow: "hidden",
    transition: "all 0.3s ease",

    backgroundColor:
      theme.palette.mode === "dark"
        ? "#1e1e1e"
        : "#ffffff",
    
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.18)"
        : "1px solid rgba(0,0,0,0.15)",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 6px 18px rgba(0,0,0,0.6)"
        : "0 6px 18px rgba(0,0,0,0.08)",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 10px 28px rgba(0,0,0,0.7)"
          : "0 10px 28px rgba(0,0,0,0.15)",
    },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 180 },
    height: { xs: 200, sm: 180 },
    objectFit: "contain",
    borderRadius: { xs: "16px 16px 0 0", sm: "16px 0 0 16px" },
    p: 2,
    transition: "transform 0.35s ease",

    bgcolor:
      theme.palette.mode === "dark"
        ? "#2a2a2a"
        : "#f4f6f8",

    "&:hover": { transform: "scale(1.06)" },
  }),

  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 2.5,
    gap: 1,
  },

  descripcion: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    mb: 1.5,
  },

  chipSubtotal: {
    fontWeight: "bold",
    fontSize: "0.95rem",
  },

  chipStock: {
    fontWeight: "bold",
    fontSize: "0.85rem",
    opacity: 0.85,
  },

  controlesWrapper: (theme) => ({
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    gap: 1.5,

    // 🔥 Separadores más visibles
    borderLeft:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.12)"
        : "1px solid rgba(0,0,0,0.08)",

    borderTop:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.12)"
        : "1px solid rgba(0,0,0,0.08)",
  }),

  cantidadWrapper: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 1,
    borderRadius: 2,
    px: 1,
    py: 0.5,

    backgroundColor:
      theme.palette.mode === "dark"
        ? "#2c2c2c"
        : "#f1f3f5",
  }),

  botonCantidad: (theme) => ({
    minWidth: 32,
    minHeight: 32,
    borderRadius: "50%",
    transition: "all 0.2s ease",

    backgroundColor:
      theme.palette.mode === "dark"
        ? "#3a3a3a"
        : "#ffffff",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 2px 6px rgba(0,0,0,0.6)"
        : "0 2px 6px rgba(0,0,0,0.1)",

    "&:hover": {
      transform: "scale(1.1)",
    },
  }),

  cantidadInput: {
    width: 50,
    "& input": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: 2,
    },
  },

  botonEliminar: {
    color: "error.main",
    borderRadius: 2,
    px: 2,
    "&:hover": {
      bgcolor: "rgba(211,47,47,0.15)",
    },
  },
};

export default carritoItemStyles;
