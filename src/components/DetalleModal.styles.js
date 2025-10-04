export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true, // ✅ permite que el alto se ajuste a cada imagen
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
  },

  botonCerrar: {
    position: "absolute",
    top: 12,
    right: 12,
    bgcolor: "rgba(0,0,0,0.6)",
    color: "white",
    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
  },

  // 🔹 Caja del slider completamente centrada y con proporción fija
  sliderBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    aspectRatio: "1 / 1", // ✅ mantiene proporción cuadrada en cualquier pantalla
    background: "linear-gradient(180deg, #1c1c1c 0%, #000 100%)",
    overflow: "hidden",
    borderRadius: 3,
  },

  // 🔹 Imagen perfectamente centrada, sin deformarse nunca
  imagen: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    transition: "transform 0.3s ease, filter 0.3s ease",
    borderRadius: 3,
    userSelect: "none",
    pointerEvents: "none", // evita clics raros en slick
    "&:hover": {
      transform: "translate(-50%, -50%) scale(1.03)",
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
  },

  descripcion: {
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.85)",
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
