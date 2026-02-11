// =============================
// TARJETA PRINCIPAL
// =============================
export const cardSx = (theme) => ({
  width: 320,
  height: 480,
  borderRadius: 4,
  bgcolor: "background.paper",

  border: `1px solid ${theme.palette.divider}`,

  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 28px rgba(0,0,0,0.7)"
      : "0 10px 30px rgba(0,0,0,0.08)",

  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  position: "relative",

  transition: "all 0.35s cubic-bezier(.4,0,.2,1)",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 14px 38px rgba(0,0,0,0.9)"
        : "0 18px 45px rgba(0,0,0,0.14)",
    borderColor: theme.palette.primary.main,
  },
});


// =============================
// CONTENEDOR IMAGEN
// =============================
export const imagenBoxSx = (theme) => ({
  position: "relative",
  height: 240,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  bgcolor:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.03)"
      : "#fafafa",

  overflow: "hidden",

  borderBottom: `1px solid ${theme.palette.divider}`,
});


// =============================
// IMAGEN
// =============================
export const imagenSx = {
  maxWidth: "85%",
  maxHeight: "85%",
  objectFit: "contain",
  transition: "transform 0.6s ease",
  filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.15))",

  "&:hover": {
    transform: "scale(1.08)",
  },
};


// =============================
// CHIP NUEVO
// =============================
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
  boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
};


// =============================
// CONTENIDO
// =============================
export const contenidoSx = {
  p: 2.2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};


// =============================
// TÍTULO
// =============================
export const tituloSx = {
  mb: 1.2,
  fontWeight: 600,
  fontSize: "1.05rem",
  lineHeight: 1.4,
  color: "text.primary",

  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
};


// =============================
// PRECIO
// =============================
export const precioStackSx = {
  mb: 2,
  fontSize: "1.3rem",
  fontWeight: 700,
  alignItems: "center",
};


// =============================
// DIVIDER
// =============================
export const dividerSx = {
  my: 1.2,
};


// =============================
// BOTÓN AGREGAR
// =============================
export const botonAgregarSx = (stock) => ({
  borderRadius: 2,
  textTransform: "none",
  py: 1.1,
  fontWeight: 600,
  fontSize: "0.95rem",

  background:
    stock > 0
      ? "linear-gradient(90deg, #1976d2, #42a5f5)"
      : "grey.400",

  color: "white",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: stock > 0 ? "translateY(-2px)" : "none",
    background:
      stock > 0
        ? "linear-gradient(90deg, #1565c0, #1e88e5)"
        : "grey.400",
    boxShadow:
      stock > 0
        ? "0 10px 24px rgba(0,0,0,0.22)"
        : "none",
  },
});


// =============================
// BOTÓN DETALLES
// =============================
export const botonDetallesSx = (theme) => ({
  borderRadius: 2,
  textTransform: "none",
  py: 0.9,
  fontWeight: 500,
  fontSize: "0.9rem",

  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.secondary,

  transition: "all 0.3s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    backgroundColor: theme.palette.action.hover,
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  },
});
