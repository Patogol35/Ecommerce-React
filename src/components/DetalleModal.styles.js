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

  // Contenedor principal del contenido: imagen + texto
  contenidoGrid: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: 3,
    alignItems: "flex-start",
  },

  // Caja del slider/imagen
  sliderBox: {
    flex: 1,
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

  // Caja de información textual
  infoBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 2,
    width: { xs: "100%", md: "60%" }, // limita el ancho en desktop
    maxWidth: 600,
  },

  texto: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    textAlign: "left",
  },

  titulo: {
    fontSize: { xs: "1.4rem", md: "1.8rem" },
    fontWeight: "bold",
    color: "white",
    letterSpacing: "0.5px",
  },

  precio: {
    fontSize: { xs: "1.2rem", md: "1.5rem" },
    color: "#42a5f5",
    fontWeight: "bold",
  },

  etiquetas: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    alignItems: "center",
  },

  descripcion: {
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.85)",
    textAlign: "justify",
  },

  stockChip: {
    color: "white",
    borderColor: "white",
    fontWeight: "bold",
  },

  divider: {
    bgcolor: "rgba(255,255,255,0.3)",
  },

  botonAgregar: (stock) => ({
    borderRadius: 3,
    py: 1.2,
    px: 2.5,
    width: "fit-content",
    color: "white",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #1976d2, #42a5f5)",
    alignSelf: "flex-start",
    boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: stock > 0 ? "translateY(-2px)" : "none",
      boxShadow: stock > 0 ? "0 6px 15px rgba(0,0,0,0.4)" : "none",
    },
  }),
};

export default detalleModalStyles;
