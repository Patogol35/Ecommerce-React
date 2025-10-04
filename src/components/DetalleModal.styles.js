export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true, // ajusta la altura según cada imagen
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
    p: 3,
    bgcolor: "#1e1e1e",
    color: "white",
    width: "100%",
    maxWidth: { xs: "100%", md: 900 },
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  botonCerrar: {
    position: "absolute",
    top: 12,
    right: 12,
    bgcolor: "rgba(0,0,0,0.6)",
    color: "white",
    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
  },

  // Contenedor del slider adaptativo
  sliderBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxHeight: { xs: 300, md: 500 },
    overflow: "hidden",
    background: "linear-gradient(180deg, #1c1c1c 0%, #000 100%)",
    borderRadius: 3,
    position: "relative",
    mb: 2,
  },

  // Imagen centrada, se adapta al contenedor sin deformarse
  imagen: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
    borderRadius: 2,
    boxShadow: "0 6px 25px rgba(0,0,0,0.5)",
    transition: "transform 0.3s ease, filter 0.3s ease",
    "&:hover": {
      transform: "scale(1.03)",
      filter: "brightness(1.08)",
    },
  },

  stockChip: {
    color: "white",
    borderColor: "white",
    fontWeight: "bold",
  },

  divider: {
    bgcolor: "rgba(255,255,255,0.3)",
    width: "100%",
    my: 2,
  },

  descripcion: {
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.85)",
    textAlign: "center",
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
    transition: "all 0.3s ease",
    "&:hover": {
      transform: stock > 0 ? "translateY(-2px)" : "none",
      boxShadow: stock > 0 ? "0 6px 15px rgba(0,0,0,0.4)" : "none",
    },
  }),
};

export default detalleModalStyles;
