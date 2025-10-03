const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 2.5,
    mx: { xs: 2, sm: 0 },
    borderRadius: 3,
    border: "1px solid",
    borderColor: theme.palette.divider,
    overflow: "hidden",
    boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
    transition: "all 0.3s",
    "&:hover": { boxShadow: "0 6px 16px rgba(0,0,0,0.2)" },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 160 }, // ✅ mantenemos ancho
    height: { xs: 160, sm: 140 },  // ✅ menos alto (antes 200/160)
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
    fontSize: "0.9rem", // texto un poco más compacto
  },

  chipSubtotal: { fontWeight: "bold", fontSize: "0.9rem" },
  chipStock: { fontWeight: "bold", fontSize: "0.9rem" },

  controlesWrapper: {
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 1.5,
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
      fontSize: "0.95rem",
    },
  },

  botonEliminar: {
    color: "error.main",
    "&:hover": { bgcolor: "rgba(211,47,47,0.1)" },
  },
};

export default carritoItemStyles;
