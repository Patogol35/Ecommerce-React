const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 3,
    mx: { xs: 1, sm: 0 },
    borderRadius: 4,

    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.5)"
        : "rgba(0,0,0,0.15)",

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(145deg, #1a1a1a, #222)"
        : "#ffffff",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 10px 30px rgba(0,0,0,0.8)"
        : "0 8px 24px rgba(0,0,0,0.12)",

    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 16px 36px rgba(0,0,0,0.9)"
          : "0 14px 32px rgba(0,0,0,0.18)",
    },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 180 },
    height: { xs: 200, sm: 180 },
    objectFit: "contain",

    borderRight: { sm: "1px solid" },
    borderBottom: { xs: "1px solid", sm: "none" },

    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.3)"
        : "rgba(0,0,0,0.2)",

    bgcolor: theme.palette.mode === "dark" ? "#2c2c2c" : "#f9f9f9",
    p: 2,

    transition: "transform 0.35s ease",
    "&:hover": { transform: "scale(1.08)" },
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
    color: "text.secondary",
    fontSize: "0.9rem",
  },

  chipSubtotal: {
    fontWeight: "bold",
    fontSize: "0.95rem",
  },

  chipStock: {
    fontWeight: "bold",
    fontSize: "0.85rem",
    opacity: 0.8,
  },

  controlesWrapper: (theme) => ({
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    gap: 1.5,

    borderLeft: { sm: "1px solid" },
    borderTop: { xs: "1px solid", sm: "none" },

    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.3)"
        : "rgba(0,0,0,0.2)",
  }),

  cantidadWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    px: 1.5,
    py: 0.6,
    borderRadius: 99,
    background:
      "linear-gradient(145deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02))",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
  },

  botonCantidad: (theme) => ({
    minWidth: 32,
    minHeight: 32,
    borderRadius: "50%",

    bgcolor:
      theme.palette.mode === "dark" ? "#2a2a2a" : "#ffffff",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 2px 6px rgba(0,0,0,0.8)"
        : "0 2px 6px rgba(0,0,0,0.15)",

    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.15)",
      bgcolor: "action.hover",
    },
  }),

  cantidadInput: {
    width: 50,
    "& input": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1rem",
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
