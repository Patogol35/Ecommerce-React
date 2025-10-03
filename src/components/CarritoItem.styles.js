const carritoItemStyles = {
  card: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 2,
    borderRadius: 3,
    boxShadow: "0 3px 8px rgba(0,0,0,0.12)", // igual que tu diseño
    transition: "all 0.3s",
    "&:hover": { boxShadow: "0 6px 16px rgba(0,0,0,0.2)" }, // igual
  },

  media: (theme) => ({
    width: { xs: "100%", sm: 160 },
    height: { xs: 200, sm: 160 },
    objectFit: "contain",
    borderRadius: { xs: "12px 12px 0 0", sm: "12px 0 0 12px" },
    bgcolor: theme.palette.mode === "dark" ? "#333" : "#fafafa",
    border: `1px solid ${theme.palette.divider}`, // ✅ dinámico (en light sigue igual)
    p: 1,
    transition: "transform 0.3s ease",
    "&:hover": { transform: { sm: "scale(1.05)" } },
  }),

  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  descripcion: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    mb: 1,
  },

  // ✅ se mantienen como en tu diseño original
  chipSubtotal: {
    fontWeight: "bold",
  },

  chipStock: {
    fontWeight: "bold",
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
    "&:hover": { bgcolor: "error.light", opacity: 0.15 }, // ✅ adaptado
  },
};

export default carritoItemStyles;
