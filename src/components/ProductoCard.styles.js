export const cardSx = {
  width: "100%",
  maxWidth: 340,
  borderRadius: "20px",
  border: "1px solid rgba(0,0,0,0.05)",
  backgroundColor: "#fff",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.35s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
  },
};

// Imagen contenedor
export const imagenBoxSx = {
  position: "relative",
  height: 240,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(145deg, #fafafa, #f3f3f3)",
  overflow: "hidden",
};

// Imagen con hover más suave
export const imagenSx = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  transition: "transform 0.5s ease",
  "&:hover": { transform: "scale(1.08)" },
};

// Overlay con blur elegante
export const overlayImagenSx = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(2px)",
  bgcolor: "rgba(0,0,0,0.06)",
  opacity: 0,
  transition: "opacity 0.4s ease",
  "&:hover": { opacity: 1 },
};

// Chip con estilo glassmorphism
export const chipNuevoSx = {
  position: "absolute",
  top: 14,
  left: 14,
  fontWeight: "bold",
  background: "rgba(255, 99, 71, 0.9)",
  color: "#fff",
  borderRadius: "999px",
  px: 1.6,
  py: 0.4,
  fontSize: "0.7rem",
  letterSpacing: "0.5px",
  backdropFilter: "blur(6px)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

// Contenido
export const contenidoSx = {
  p: 2.4,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

// Título (más pro y multilínea)
export const tituloSx = {
  mb: 1,
  fontWeight: 600,
  fontSize: "1.05rem",
  lineHeight: 1.4,
  color: "text.primary",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
};

// Precio destacado
export const precioStackSx = {
  mb: 2,
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "primary.main",
  letterSpacing: "-0.5px",
};

// Divider
export const dividerSx = { my: 1.4 };

// Botón agregar (con glow sutil)
export const botonAgregarSx = (stock) => ({
  borderRadius: 3,
  textTransform: "none",
  py: 1.2,
  fontWeight: 600,
  fontSize: "0.95rem",
  background: stock > 0
    ? "linear-gradient(90deg, #1976d2, #42a5f5)"
    : "grey.400",
  color: "#fff",
  transition: "all 0.3s ease",
  position: "relative",
  "&:hover": {
    transform: stock > 0 ? "scale(1.04)" : "none",
    background: stock > 0
      ? "linear-gradient(90deg, #1565c0, #1e88e5)"
      : "grey.400",
    boxShadow: stock > 0
      ? "0 0 12px rgba(66,165,245,0.6)"
      : "none",
  },
});

// Botón detalles (ghost button)
export const botonDetallesSx = {
  borderRadius: 3,
  textTransform: "none",
  py: 0.9,
  fontWeight: 500,
  fontSize: "0.9rem",
  border: "1px solid rgba(0,0,0,0.1)",
  color: "text.secondary",
  backgroundColor: "transparent",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
    bgcolor: "rgba(0,0,0,0.04)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  },
};
