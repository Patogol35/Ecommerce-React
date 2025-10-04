const detalleModalStyles = {
  dialogPaper: {
    bgcolor: "#121212",
    color: "white",
    borderRadius: 3,
    overflow: "hidden",
    position: "relative",
  },

  botonCerrar: {
    position: "absolute",
    top: 10,
    right: 10,
    bgcolor: "rgba(255,255,255,0.15)",
    color: "white",
    "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
    zIndex: 10,
  },

  galeriaContainer: {
    bgcolor: "#1e1e1e",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    p: 2,
    gap: 2,
  },

  miniaturasStack: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    maxHeight: { md: 400 },
  },

  miniatura: {
    width: 60,
    height: 60,
    borderRadius: 2,
    objectFit: "cover",
    cursor: "pointer",
    opacity: 0.8,
    border: "2px solid rgba(255,255,255,0.2)",
    "&:hover": { opacity: 1, transform: "scale(1.05)" },
    transition: "0.3s",
  },

  imagenPrincipal: {
    width: "100%",
    maxWidth: 380,
    height: 380,
    borderRadius: 3,
    objectFit: "contain",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    cursor: "zoom-in",
    border: "2px solid rgba(255,255,255,0.15)",
  },

  card: {
    bgcolor: "#1b1b1b",
    height: "100%",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  stockChip: {
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  divider: {
    borderColor: "rgba(255,255,255,0.2)",
  },

  descripcion: {
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.6,
  },

  botonBox: {
    p: 3,
    pt: 0,
  },

  botonAgregar: (stock) => ({
    bgcolor:
      stock > 0
        ? "linear-gradient(135deg, #1976d2, #42a5f5)"
        : "gray",
    color: "white",
    borderRadius: 3,
    py: 1.5,
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    "&:hover": {
      transform: stock > 0 ? "translateY(-2px)" : "none",
      boxShadow:
        stock > 0 ? "0 6px 18px rgba(0,0,0,0.5)" : "none",
    },
    transition: "all 0.3s ease",
  }),
};

export default detalleModalStyles;
