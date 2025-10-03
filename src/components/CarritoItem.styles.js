const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "flex-start",  // 🔥 alinea imagen y contenido
    mb: 3,
    mx: { xs: 2, sm: 0 },
    borderRadius: 4,
    border: "1px solid",
    borderColor: theme.palette.divider,
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
      transform: "translateY(-2px)",
    },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 180 },
    height: "100%",             // 🔥 ocupa todo el alto del contenedor
    maxHeight: { xs: 200, sm: 180 }, // opcional para mantener proporción
    objectFit: "contain",
    borderRadius: { xs: "16px 16px 0 0", sm: "16px 0 0 16px" },
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

  titulo: {
    fontWeight: 600,
    fontSize: "0.95rem",
    lineHeight: 1.3,
    mb: 0.5,
    display: "-webkit-box",
    WebkitLineClamp: 2,       // máximo 2 líneas
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

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

  chipSubtotal: {
    fontWeight: "bold",
    fontSize: "0.95rem",
  },

  chipStock: {
    fontWeight: "bold",
    fontSize: "0.85rem",
    opacity: 0.8,
  },

  controlesWrapper: {
    display: "flex",
    flexDirection: "row",      // siempre en fila
    justifyContent: "center",
    alignItems: "center",
    p: 1.5,
    gap: 1,
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },

  cantidadWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    bgcolor: "action.hover",
    borderRadius: 2,
    px: 1,
    py: 0.3,
  },

  botonCantidad: {
    minWidth: 28,
    minHeight: 28,
    borderRadius: "50%",
    bgcolor: "background.paper",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    fontSize: "0.85rem",
    "&:hover": {
      bgcolor: "action.hover",
      transform: "scale(1.1)",
    },
    transition: "all 0.2s ease",
  },

  cantidadInput: {
    width: 45,
    "& input": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "0.95rem",
      borderRadius: 2,
    },
  },

  botonEliminar: {
    color: "error.main",
    borderRadius: 2,
    px: 1.5,
    py: 0.8,
    ml: 1,  // espacio entre cantidad y tacho
    "&:hover": { bgcolor: "rgba(211,47,47,0.1)" },
  },
};

export default carritoItemStyles;
