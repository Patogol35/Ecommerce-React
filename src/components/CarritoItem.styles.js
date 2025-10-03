const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 3,
    mx: { xs: 2, sm: 0 },
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
      transform: "translateY(-3px) scale(1.02)",
    },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 180 },
    height: { xs: 200, sm: 180 },
    objectFit: "contain",
    borderRadius: { xs: "12px 12px 0 0", sm: "12px 0 0 12px" },
    bgcolor: theme.palette.mode === "dark" ? "#1e1e1e" : "#f5f5f5",
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
    gap: 1.5,
  },

  titulo: {
    fontWeight: 700,
    fontSize: "1.2rem",
    lineHeight: 1.4,
    mb: 1,
  },

  descripcion: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "text.secondary",
    fontSize: "0.95rem",
    mb: 2,
  },

  chipSubtotal: {
    fontWeight: "bold",
    fontSize: "1rem",
    bgcolor: "linear-gradient(45deg, #4caf50, #81c784)",
    color: "#fff",
    "& .MuiChip-icon": { color: "#fff", fontSize: "1.2rem" },
  },

  chipStock: {
    fontWeight: "bold",
    fontSize: "0.85rem",
    opacity: 0.85,
  },

  controlesWrapper: {
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    gap: 2,
    borderLeft: { sm: "1px solid rgba(0,0,0,0.08)" },
    borderTop: { xs: "1px solid rgba(0,0,0,0.08)", sm: "none" },
  },

  cantidadWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    borderRadius: 30,
    overflow: "hidden",
    bgcolor: "background.paper",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  botonCantidad: {
    minWidth: 36,
    minHeight: 36,
    borderRadius: 0,
    bgcolor: "background.paper",
    "&:hover": {
      bgcolor: "action.hover",
      transform: "scale(1.1)",
    },
    transition: "all 0.2s ease",
  },

  cantidadInput: {
    width: 50,
    "& input": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: 0,
      padding: "6px 0",
    },
  },

  botonEliminar: {
    color: "error.main",
    borderRadius: 4,
    px: 2,
    "&:hover": {
      bgcolor: "rgba(244, 67, 54, 0.12)",
      transform: "scale(1.05)",
    },
    transition: "all 0.2s ease",
  },
};

export default carritoItemStyles;
