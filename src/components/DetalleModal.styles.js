export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

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
    p: { xs: 2, md: 3 },
    bgcolor: "#1e1e1e",
    color: "white",
    width: "100%",
    maxWidth: { xs: "95%", md: 700 },
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  botonCerrar: {
    position: "absolute",
    top: 12,
    right: 12,
    bgcolor: "rgba(0,0,0,0.6)",
    color: "white",
    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
  },

  sliderBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "80%", sm: "60%", md: 400 },  // Ajuste responsive
    aspectRatio: "1 / 1",                       // Cuadrado para uniformidad
    mb: 2,
  },

  imagen: {
    width: "100%",
    height: "100%",
    objectFit: "contain",                       // Mantiene proporción
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
    mt: 2,
  },

  divider: {
    bgcolor: "rgba(255,255,255,0.3)",
    width: "80%",
    my: 2,
  },

  descripcion: {
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.85)",
    mt: 2,
  },

  botonAgregar: (stock) => ({
    borderRadius: 3,
    py: 1.2,
    px: 2.5,
    width: "fit-content",
    color: "white",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #1976d2, #42a5f5)",
    alignSelf: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
    mt: 3,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: stock > 0 ? "translateY(-2px)" : "none",
      boxShadow: stock > 0 ? "0 6px 15px rgba(0,0,0,0.4)" : "none",
    },
  }),
};

export default detalleModalStyles;
