const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 3, // más separación entre cards
    mx: { xs: 2, sm: 0 },
    borderRadius: 4,
    border: "1px solid",
    borderColor: theme.palette.divider,
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s",
    "&:hover": { boxShadow: "0 8px 20px rgba(0,0,0,0.25)" },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 200 },  // antes 160 → más grande
    height: { xs: 240, sm: 200 },   // antes 200/160 → más grande
    objectFit: "contain",
    borderRadius: { xs: "16px 16px 0 0", sm: "16px 0 0 16px" },
    bgcolor: theme.palette.mode === "dark" ? "#333" : "#fafafa",
    p: 2, // más aire dentro
    transition: "transform 0.3s ease",
    "&:hover": { transform: "scale(1.07)" },
  }),

  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 3, // antes 2 → más padding
    fontSize: "1.05rem", // textos un poco más grandes
  },

  descripcion: {
    display: "-webkit-box",
    WebkitLineClamp: 3, // antes 2 → permite 1 línea más
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    mb: 1.5,
    fontSize: "0.95rem",
  },

  chipSubtotal: { fontWeight: "bold", fontSize: "0.95rem" },
  chipStock: { fontWeight: "bold", fontSize: "0.95rem" },

  controlesWrapper: {
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 2.5, // más aire
    gap: 1.2,
  },

  cantidadWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 1.2,
  },

  cantidadInput: {
    width: 70, // más ancho
    "& input": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.1rem", // un poco más grande
    },
  },

  botonEliminar: {
    color: "error.main",
    fontSize: "0.95rem",
    "&:hover": { bgcolor: "rgba(211,47,47,0.1)" },
  },
};

export default carritoItemStyles;
