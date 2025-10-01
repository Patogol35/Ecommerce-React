export const cardSx = {
  width: "100%",
  maxWidth: 320,
  borderRadius: 4,
  backgroundColor: "#fff",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },
};

export const imagenBoxSx = {
  position: "relative",
  height: 220,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "#fafafa",
  overflow: "hidden",
};

export const imagenSx = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  transition: "transform 0.6s ease",
  "&:hover": { transform: "scale(1.1)" },
};

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

export const chipNuevoSx = {
  position: "absolute",
  top: 12,
  left: 12,
  fontWeight: "bold",
  bgcolor: "secondary.main",
  color: "white",
  borderRadius: 2,
  px: 1.2,
  py: 0.5,
  fontSize: "0.75rem",
  boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
};

export const contenidoSx = {
  p: 2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

export const tituloSx = { 
  mb: 1, 
  fontWeight: "600", 
  fontSize: "1.1rem", 
  lineHeight: 1.3 
};

export const precioStackSx = { 
  mb: 2, 
  fontSize: "1.2rem", 
  fontWeight: "bold", 
  color: "primary.main" 
};

export const dividerSx = { my: 1 };

export const botonAgregarSx = (stock) => ({
  borderRadius: 3,
  textTransform: "none",
  py: 1.2,
  fontWeight: "600",
  fontSize: "0.95rem",
  bgcolor: stock > 0 ? "primary.main" : "grey.400",
  color: "white",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: stock > 0 ? "scale(1.06)" : "none",
    bgcolor: stock > 0 ? "primary.dark" : "grey.400",
    boxShadow: stock > 0 ? "0 6px 15px rgba(0,0,0,0.2)" : "none",
  },
});

export const botonDetallesSx = {
  borderRadius: 3,
  textTransform: "none",
  py: 1,
  fontWeight: "500",
  fontSize: "0.9rem",
  border: "1px solid",
  borderColor: "grey.300",
  color: "text.primary",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    bgcolor: "grey.100",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
};
