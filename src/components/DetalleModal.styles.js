export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  initialSlide: 0,
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
    borderRadius: 3,
    p: 2.5,
    bgcolor: "#1e1e1e",
    color: "white",
    maxWidth: 500, // 👈 más limpio
  },

  botonCerrar: {
    position: "absolute",
    top: 10,
    right: 10,
    bgcolor: "rgba(0,0,0,0.6)",
    color: "white",
  },

  // 🔥 CONTENEDOR DEL SLIDER
  sliderContainer: {
    width: "100%",
    height: 260, // 👈 tamaño controlado
  },

  sliderBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 260,
  },

  imagen: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },

  // 🔥 INFO
  infoBox: {
    textAlign: "center",
  },

  stockChip: {
    my: 1,
    color: "white",
    borderColor: "white",
  },

  descripcion: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.8)",
  },
};

export default detalleModalStyles;
