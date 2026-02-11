// ================================
// 🎴 TARJETA PRINCIPAL
// ================================
export const cardSx = (theme) => ({
  width: 320,
  height: 480,
  borderRadius: 3,
  bgcolor: "background.paper",

  border: "2px solid",
  borderColor:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.25)"
      : "rgba(0,0,0,0.25)",

  boxShadow:
    theme.palette.mode === "dark"
      ? "0 6px 18px rgba(0,0,0,0.45)"
      : "0 6px 18px rgba(0,0,0,0.08)",

  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-4px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 28px rgba(0,0,0,0.65)"
        : "0 12px 28px rgba(0,0,0,0.15)",
  },
});


// ================================
// 🖼 CONTENEDOR IMAGEN
// ================================
export const imagenBoxSx = {
  position: "relative",
  height: 240,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "background.default",
  overflow: "hidden",
};


// ================================
// 🖼 IMAGEN
// ================================
export const imagenSx = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  transition: "transform 0.4s ease",
  "&:hover": {
    transform: "scale(1.06)",
  },
};


// ================================
// 🏷 CHIP "NUEVO"
// ================================
export const chipNuevoSx = {
  position: "absolute",
  top: 14,
  left: 14,
  fontWeight: 600,
  background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
  color: "#fff",
  borderRadius: "16px",
  px: 1.5,
  py: 0.4,
  fontSize: "0.72rem",
  letterSpacing: "0.5px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
};


// ================================
// 📦 CONTENIDO
// ================================
export const contenidoSx = {
  p: 2.2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};


// ================================
// 📝 TÍTULO
// ================================
export const tituloSx = {
  mb: 1,
  fontWeight: 600,
  fontSize: "1.05rem",
  lineHeight: 1.4,
  color: "text.primary",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};


// ================================
// 💰 PRECIO
// ================================
export const precioStackSx = {
  mb: 2,
  fontSize: "1.3rem",
  fontWeight: 700,
  color: "primary.main",
  letterSpacing: "0.3px",
};


// ================================
// ➖ DIVIDER
// ================================
export const dividerSx = {
  my: 1.2,
};


// ================================
// 🛒 BOTÓN AGREGAR
// ================================
export const botonAgregarSx = (stock) => ({
  borderRadius: 2.5,
  textTransform: "none",
  py: 1.1,
  fontWeight: 600,
  fontSize: "0.95rem",

  background:
    stock > 0
      ? "linear-gradient(135deg, #1976d2, #42a5f5)"
      : "grey.400",

  color: "white",
  transition: "all 0.25s ease",

  "&:hover": {
    transform: stock > 0 ? "scale(1.03)" : "none",
    background:
      stock > 0
        ? "linear-gradient(135deg, #1565c0, #1e88e5)"
        : "grey.400",
    boxShadow:
      stock > 0
        ? "0 6px 16px rgba(25,118,210,0.25)"
        : "none",
  },
});


// ================================
// 🔎 BOTÓN DETALLES
// ================================
export const botonDetallesSx = {
  borderRadius: 2.5,
  textTransform: "none",
  py: 0.9,
  fontWeight: 500,
  fontSize: "0.9rem",
  border: "1.5px solid",
  borderColor: "divider",
  color: "text.secondary",
  transition: "all 0.25s ease",

  "&:hover": {
    transform: "scale(1.03)",
    bgcolor: "action.hover",
    borderColor: "primary.main",
  },
};
