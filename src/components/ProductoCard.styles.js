// src/components/ProductoCard.styles.js

// CARD
export const cardSx = {
  width: "100%",
  maxWidth: 320,
  borderRadius: 4,
  background: "linear-gradient(180deg, #fff 70%, #fafafa 100%)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  animation: "fadeInUp 0.5s ease",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },
  "@keyframes fadeInUp": {
    from: { opacity: 0, transform: "translateY(15px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

// IMAGEN
export const imagenBoxSx = {
  position: "relative",
  height: 220,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "#fdfdfd",
  overflow: "hidden",
};

export const imagenSx = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  transition: "transform 0.6s ease",
  "&:hover": { transform: "scale(1.15) rotate(1deg)" },
};

// Overlay efecto en hover (opcional si lo usas)
export const overlayImagenSx = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  bgcolor: "rgba(0,0,0,0.08)",
  opacity: 0,
  transition: "opacity 0.4s ease",
  "&:hover": { opacity: 1 },
};

// CHIP “NUEVO” O “OFERTA”
export const chipNuevoSx = {
  position: "absolute",
  top: 12,
  left: 12,
  fontWeight: "bold",
  bgcolor: "linear-gradient(45deg, #ff4081, #ff7043)",
  color: "white",
  borderRadius: 3,
  px: 1.4,
  py: 0.5,
  fontSize: "0.75rem",
  boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
};

// CONTENIDO
export const contenidoSx = {
  p: 2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

export const tituloSx = {
  mb: 1,
  fontWeight: "600",
  fontSize: "1.15rem",
  lineHeight: 1.3,
  color: "text.primary",
};

export const precioStackSx = {
  mb: 2,
  display: "flex",
  alignItems: "baseline",
  gap: 0.5,
};

export const precioPrincipalSx = {
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "primary.main",
};

export const precioSecundarioSx = {
  fontSize: "0.85rem",
  color: "text.secondary",
};

// DIVIDER ✅ (faltaba antes)
export const dividerSx = { my: 1, borderColor: "rgba(0,0,0,0.08)" };

// BOTONES
export const botonAgregarSx = (stock) => ({
  borderRadius: 3,
  textTransform: "none",
  py: 1.2,
  fontWeight: "600",
  fontSize: "0.95rem",
  bgcolor: stock > 0 ? "primary.main" : "grey.400",
  color: "white",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: stock > 0 ? "scale(1.06)" : "none",
    bgcolor: stock > 0 ? "primary.dark" : "grey.400",
    boxShadow: stock > 0 ? "0 6px 15px rgba(0,0,0,0.25)" : "none",
  },
  "&:active": {
    transform: "scale(0.95)",
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
