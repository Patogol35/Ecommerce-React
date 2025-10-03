const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
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
      transform: "translateY(-3px)",
    },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 180 },
    height: { xs: 200, sm: 180 },
    objectFit: "contain",
    borderRadius: { xs: "16px 16px 0 0", sm: "16px 0 0 16px" },
    bgcolor: theme.palette.mode === "dark" ? "#2c2c2c" : "#f9f9f9",
    p: 2,
    transition: "transform 0.35s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.08)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
  }),

  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 2.5,
    gap: 1.2,
  },

  titulo: {
    fontWeight: 700,
    fontSize: "1.15rem",
    lineHeight: 1.4,
    mb: 0.5,
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
    fontSize: "1rem",
    color: "primary.main",
  },

  chipStock: {
    fontWeight: 500,
    fontSize: "0.85rem",
    opacity: 0.9,
  },

  controlesWrapper: {
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    gap: 1.5,
    borderLeft: { sm: "1px solid rgba(0,0,0,0.08)" },
    borderTop: { xs: "1px solid rgba(0,0,0,0.08)", sm: "none" },
    bgcolor: "background.default",
  },

  cantidadWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    bgcolor: "action.hover",
    borderRadius: 2,
    px: 1,
    py: 0.5,
    transition: "all 0.25s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    },
  },

  cantidadInput: {
    width: 64,
    "& input": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: 2,
      transition: "all 0.2s ease",
    },
    "& input:focus": {
      outline: "none",
      transform: "scale(1.05)",
      color: "primary.main",
    },
  },

  botonEliminar: {
    color: "error.main",
    borderRadius: 2,
    px: 2,
    fontWeight: 600,
    "&:hover": { bgcolor: "rgba(211,47,47,0.1)" },
  },
};

export default carritoItemStyles;
