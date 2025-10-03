const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 2,
    mx: { xs: 2, sm: 0 },
    borderRadius: 3,
    border: "1px solid",
    borderColor: theme.palette.divider,
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
    transition: "all 0.3s",
    bgcolor: theme.palette.background.paper,
    "&:hover": { boxShadow: "0 8px 20px rgba(0,0,0,0.2)" },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 160 },
    height: { xs: 200, sm: 160 },
    objectFit: "contain",
    borderRadius: { xs: "12px 12px 0 0", sm: "12px 0 0 12px" },
    bgcolor: theme.palette.mode === "dark" ? "#333" : "#fafafa",
    p: 1,
    transition: "transform 0.3s ease",
    "&:hover": { transform: "scale(1.05)" },
  }),

  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 2,
  },

  descripcion: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    mb: 1,
    color: "text.secondary",
    fontSize: "0.9rem",
  },

  chipSubtotal: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "primary.main",
  },

  chipStock: {
    fontWeight: "bold",
    fontSize: "0.85rem",
  },

  controlesWrapper: {
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    gap: 1,
  },

  cantidadWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  cantidadInput: {
    width: 60,
    "& input": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1rem",
    },
  },

  botonEliminar: {
    color: "error.main",
    "&:hover": { bgcolor: "rgba(211,47,47,0.08)" },
  },
};

export default carritoItemStyles;
