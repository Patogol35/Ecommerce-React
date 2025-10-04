export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: false,
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
    p: { xs: 2, md: 4 },
    bgcolor: "#1a1a1a",
    color: "white",
    width: "100%",
    maxWidth: { xs: "100%", md: 900 },
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
  },

  botonCerrar: {
    position: "absolute",
    top: 10,
    right: 10,
    bgcolor: "rgba(255,255,255,0.1)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.2)",
    "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
  },

  sliderWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 3,
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
  },

  sliderBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: { xs: 300, md: 420 }, // altura uniforme
    backgroundColor: "#111",
    overflow: "hidden", // corta exceso si se recorta la imagen
    borderRadius: 3,
    cursor: "zoom-in",
  },

  imagen: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // ahora se recorta para mantener tamaño uniforme
    objectPosition: "center",
    borderRadius: 3,
    transition: "transform 0.3s ease",
    "&:hover": { transform: "scale(1.03)" },
  },

  stockChip: {
    color: "white",
    borderColor: "white",
    fontWeight: "bold",
    px: 1.5,
  },

  divider: {
    bgcolor: "rgba(255,255,255,0.3)",
  },

  descripcion: {
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.85)",
    fontSize: "0.95rem",
  },

  botonAgregar: (stock) => ({
    borderRadius: 3,
    py: 1.2,
    px: 2.5,
    width: "fit-content",
    color: "white",
    fontWeight: "bold",
    background: stock > 0
      ? "linear-gradient(135deg, #2196f3, #42a5f5)"
      : "linear-gradient(135deg, #555, #777)",
    alignSelf: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: stock > 0 ? "translateY(-2px)" : "none",
      boxShadow: stock > 0 ? "0 6px 15px rgba(0,0,0,0.4)" : "none",
    },
  }),
};

export default detalleModalStyles;
