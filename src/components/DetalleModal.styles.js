export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
};

const detalleModalStyles = {
  dialog: {
    zIndex: 1600,
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(6px) saturate(130%)",
    },
  },

  dialogPaper: {
    borderRadius: { xs: 0, md: 4 },
    p: { xs: 2, md: 3 },
    bgcolor: "background.paper",
    backgroundImage: "linear-gradient(180deg, #1e1e1e 0%, #121212 100%)",
    color: "white",
    width: "100%",
    maxWidth: { xs: "100%", md: 920 },
    maxHeight: "92vh",
    overflowY: "auto",
    position: "relative",
    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
    transition: "all 0.3s ease-in-out",
  },

  botonCerrar: {
    position: "absolute",
    top: 10,
    right: 10,
    bgcolor: "rgba(255,255,255,0.08)",
    color: "white",
    borderRadius: "50%",
    transition: "all 0.2s ease",
    "&:hover": {
      bgcolor: "rgba(255,255,255,0.25)",
      transform: "rotate(90deg)",
    },
  },

  sliderBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: { xs: 280, sm: 350, md: 420 },
    cursor: "zoom-in",
  },

  imagen: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: 3,
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    "&:hover": {
      transform: "scale(1.04)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
    },
  },

  stockChip: {
    color: "white",
    borderColor: "rgba(255,255,255,0.4)",
    fontWeight: 600,
    fontSize: "0.85rem",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(4px)",
  },

  divider: {
    bgcolor: "rgba(255,255,255,0.15)",
    my: 2,
  },

  descripcion: {
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.85)",
    fontSize: { xs: "0.9rem", md: "1rem" },
  },

  botonAgregar: (stock) => ({
    mt: 2,
    borderRadius: 3,
    py: 1.4,
    px: 3,
    fontWeight: "bold",
    background: stock > 0
      ? "linear-gradient(135deg, #1976d2, #42a5f5)"
      : "linear-gradient(135deg, #555, #333)",
    color: "white",
    cursor: stock > 0 ? "pointer" : "not-allowed",
    transition: "all 0.25s ease",
    "&:hover": {
      transform: stock > 0 ? "translateY(-2px)" : "none",
      boxShadow: stock > 0 ? "0 4px 15px rgba(66,165,245,0.4)" : "none",
    },
  }),
};

export default detalleModalStyles;
