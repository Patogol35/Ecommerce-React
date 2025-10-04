const detalleModalStyles = {
  dialog: {
    zIndex: 1600,
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(5px)",
    },
  },

  dialogPaper: {
    borderRadius: { xs: 0, md: 3 },
    p: 3,
    bgcolor: "#1e1e1e",
    color: "white",
    width: "100%",
    maxWidth: { xs: "100%", md: 900 },
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
  },

  botonCerrar: {
    position: "absolute",
    top: 12,
    right: 12,
    bgcolor: "rgba(0,0,0,0.6)",
    color: "white",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    "&:hover": {
      bgcolor: "rgba(255,255,255,0.25)",
      transform: "scale(1.08)",
    },
  },

  sliderBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: { xs: 300, md: 400 },
    cursor: "zoom-in",
  },

  imagen: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: 2,
    border: "2px solid rgba(255,255,255,0.2)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "scale(1.02)" },
  },

  stockChip: {
    color: "white",
    borderColor: "white",
    fontWeight: "bold",
  },

  divider: {
    bgcolor: "rgba(255,255,255,0.3)",
  },

  descripcion: {
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.85)",
  },

  // Botón principal (Agregar al carrito)
  botonAgregar: (stock) => ({
    borderRadius: 2,
    textTransform: "none",
    py: 1.3,
    px: { xs: 3, sm: 4 }, // 👈 reduce el ancho horizontal
    maxWidth: { xs: "100%", sm: 220 }, // 👈 limita el ancho en pantallas grandes
    mx: "auto", // centra el botón
    fontWeight: 600,
    fontSize: "0.95rem",
    background:
      stock > 0 ? "linear-gradient(90deg, #1976d2, #42a5f5)" : "grey.500",
    color: "white",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: stock > 0 ? "scale(1.05)" : "none",
      background:
        stock > 0
          ? "linear-gradient(90deg, #1565c0, #1e88e5)"
          : "grey.500",
      boxShadow: stock > 0 ? "0 6px 18px rgba(0,0,0,0.18)" : "none",
    },
  }),

  // Botón secundario (Detalles u otros)
  botonDetalles: {
    borderRadius: 2,
    textTransform: "none",
    py: 1,
    px: { xs: 3, sm: 4 }, // 👈 mismo padding horizontal
    maxWidth: { xs: "100%", sm: 220 }, // 👈 mismo ancho que el principal
    mx: "auto", // centra el botón
    fontWeight: 500,
    fontSize: "0.9rem",
    border: "1px solid",
    borderColor: "rgba(255,255,255,0.3)",
    color: "rgba(255,255,255,0.85)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.04)",
      bgcolor: "rgba(255,255,255,0.1)",
      boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
    },
  },
};

export default detalleModalStyles;
