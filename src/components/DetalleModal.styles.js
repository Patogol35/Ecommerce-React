export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const detalleModalStyles = {
  // Fondo del modal con blur
  dialog: {
    zIndex: 1600,
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(6px)",
    },
  },

  // Contenedor principal del modal
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

  // Botón cerrar (X)
  botonCerrar: {
    position: "absolute",
    top: 12,
    right: 12,
    bgcolor: "rgba(0,0,0,0.6)",
    color: "white",
    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
  },

  // Contenedor del slider / imagen
  sliderBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: { xs: 300, md: 420 },
    width: "100%",
    borderRadius: 3,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.05)",
    cursor: "zoom-in",
  },

  // Imagen del producto
  imagen: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: 2,
    border: "2px solid rgba(255,255,255,0.15)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "scale(1.03)" },
  },

  // Contenedor de información del producto (lado derecho)
  infoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: { xs: "auto", md: 420 },
  },

  // Chip de stock
  stockChip: {
    color: "white",
    borderColor: "white",
    fontWeight: "bold",
  },

  // Divider
  divider: {
    bgcolor: "rgba(255,255,255,0.3)",
  },

  // Descripción
  descripcion: {
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.85)",
  },

  // Botón agregar al carrito
  botonAgregar: (stock) => ({
    borderRadius: 3,
    py: 1.2,
    px: 2.5,
    width: "fit-content",
    color: "white",
    fontWeight: "bold",
    background: stock > 0
      ? "linear-gradient(135deg, #1976d2, #42a5f5)"
      : "linear-gradient(135deg, #555, #333)",
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
