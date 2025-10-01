export const cardSx = {
  width: "100%",
  maxWidth: 340,
  borderRadius: 3,
  backgroundColor: "#fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
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
  background: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)",
  overflow: "hidden",
};

// Imagen con efecto
export const imagenSx = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  transition: "transform 0.5s ease",
  "&:hover": { transform: "scale(1.08) rotate(1deg)" },
};

// Overlay sutil
export const overlayImagenSx = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  bgcolor: "rgba(0,0,0,0.05)",
  opacity: 0,
  transition: "opacity 0.4s ease",
  "&:hover": { opacity: 1 },
};

// Chip "Nuevo"
export const chipNuevoSx = {
  position: "absolute",
  top: 14,
  left: 14,
  fontWeight: "bold",
  background: "linear-gradient(90deg, #FF6B6B, #FF8E53)",
  color: "#fff",
  borderRadius: "12px",
  px: 1.5,
  py: 0.5,
  fontSize: "0.75rem",
  boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
};

// Contenido
export const contenidoSx = {
  p: 2.2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

// Título
export const tituloSx = {
  mb: 1,
  fontWeight: 600,
  fontSize: "1.1rem",
  lineHeight: 1.35,
  color: "text.primary",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

// Precio
export const precioStackSx = {
  mb: 2,
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "primary.main",
};

// Divider
export const dividerSx = { my: 1.2 };

// Botón agregar
export const botonAgregarSx = (stock) => ({
  borderRadius: 2,
  textTransform: "none",
  py: 1.1,
  fontWeight: 600,
  fontSize: "0.95rem",
  background: stock > 0
    ? "linear-gradient(90deg, #1976d2, #42a5f5)"
    : "grey.400",
  color: "white",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: stock > 0 ? "scale(1.05)" : "none",
    background: stock > 0
      ? "linear-gradient(90deg, #1565c0, #1e88e5)"
      : "grey.400",
    boxShadow: stock > 0 ? "0 6px 18px rgba(0,0,0,0.18)" : "none",
  },
});

// Botón detalles
export const botonDetallesSx = {
  borderRadius: 2,
  textTransform: "none",
  py: 0.9,
  fontWeight: 500,
  fontSize: "0.9rem",
  border: "1px solid",
  borderColor: "grey.300",
  color: "text.secondary",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.04)",
    bgcolor: "grey.100",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },
};
