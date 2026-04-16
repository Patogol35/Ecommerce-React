const carritoItemStyles = {
  // ================================
  // CARD
  // ================================
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 3,
    mx: { xs: 2, sm: 0 },
    borderRadius: 4,

    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark" ? "#ffffff" : "#000000",

    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 4px 14px rgba(0,0,0,0.6)"
        : "0 4px 12px rgba(0,0,0,0.12)",

    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 10px 26px rgba(0,0,0,0.9)"
          : "0 10px 26px rgba(0,0,0,0.25)",
    },
  }),

  // ================================
  // IMAGEN
  // ================================
  media: (theme) => ({
    width: { xs: "100%", sm: 180 },
    height: { xs: 200, sm: 180 },
    objectFit: "contain",
    borderRadius: { xs: "16px 16px 0 0", sm: "16px 0 0 16px" },

    bgcolor:
      theme.palette.mode === "dark" ? "#2c2c2c" : "#f9f9f9",

    p: 2,
    transition: "transform 0.35s ease",

    "&:hover": {
      transform: "scale(1.1)",
    },
  }),

  // ================================
  // CONTENT
  // ================================
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 2.5,
    gap: 1,
  },

  // ================================
  // DESCRIPCIÓN
  // ================================
  descripcion: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "text.secondary",
    fontSize: "0.9rem",
    mb: 1.5,
  },

  // ================================
  // CHIPS
  // ================================
  chipSubtotal: {
    fontWeight: "bold",
    fontSize: "0.95rem",
    px: 1.2,
  },

  chipStock: (theme) => ({
    fontWeight: "bold",
    fontSize: "0.85rem",
    opacity: 0.9,

    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.08)"
        : "rgba(0,0,0,0.05)",
  }),

  // ================================
  // CONTROLES
  // ================================
  controlesWrapper: (theme) => ({
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    gap: 1.5,

    borderLeft:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid rgba(0,0,0,0.08)",

    borderTop:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid rgba(0,0,0,0.08)",
  }),

  // ================================
  // WRAPPER CANTIDAD
  // ================================
  cantidadWrapper: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 1,
    borderRadius: 2,
    px: 1,
    py: 0.5,

    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.06)"
        : "rgba(0,0,0,0.04)",
  }),

  // ================================
  // BOTONES + / -
  // ================================
  botonCantidad: (theme) => ({
    minWidth: 32,
    minHeight: 32,
    borderRadius: "50%",

    backgroundColor: theme.palette.background.paper,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 2px 6px rgba(0,0,0,0.6)"
        : "0 2px 4px rgba(0,0,0,0.1)",

    transition: "all 0.2s ease",

    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      transform: "scale(1.15)",
    },

    "&:disabled": {
      opacity: 0.4,
    },
  }),

  // ================================
  // INPUT CANTIDAD
  // ================================
  cantidadInput: {
    width: 55,

    "& input": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: 2,
      padding: "6px",
    },
  },

  // ================================
  // BOTÓN ELIMINAR
  // ================================
  botonEliminar: (theme) => ({
    color: "error.main",
    borderRadius: 2,
    px: 2,
    transition: "all 0.2s ease",

    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(244,67,54,0.15)"
          : "rgba(211,47,47,0.1)",

      transform: "scale(1.08)",
    },
  }),
};

export default carritoItemStyles;
