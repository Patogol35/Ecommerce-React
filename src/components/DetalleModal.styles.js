export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,

  arrows: true,
  adaptiveHeight: true,
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
    bgcolor: "#1e1e1e",
    color: "white",
    width: "100%",
    maxWidth: { xs: "95%", md: 700 },
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    textAlign: "center",

    "@media (orientation: landscape)": {
      maxHeight: "70vh",
      marginTop: "5vh",
      marginBottom: "5vh",
    },
  },

  botonCerrar: {
    position: "absolute",
    top: 12,
    right: 12,
    bgcolor: "rgba(0,0,0,0.6)",
    color: "white",
    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
  },

  // 🔥 FLECHAS PRO
  sliderGlobal: {
    "& .slick-prev, & .slick-next": {
      zIndex: 2,
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(6px)",

      "&:hover": {
        background: "rgba(0,0,0,0.8)",
        transform: "scale(1.1)",
      },
    },

    "& .slick-prev:before, & .slick-next:before": {
      fontSize: 18,
      color: "#fff",
    },

    "& .slick-prev": { left: 10 },
    "& .slick-next": { right: 10 },
  },

  // 🔵 DOTS
  dots: {
    "& .slick-dots li button:before": {
      color: "rgba(255,255,255,0.5)",
      fontSize: 10,
    },
    "& .slick-dots li.slick-active button:before": {
      color: "#fff",
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

    "&:hover": {
      transform: "scale(1.03)",
    },
  },

  stockChip: {
    color: "white",
    borderColor: "white",
    fontWeight: "bold",
  },

  descripcion: {
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.85)",
  },
};

export default detalleModalStyles;
