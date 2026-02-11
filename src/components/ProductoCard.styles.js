// ================================
// 🎴 TARJETA PRINCIPAL
// ================================
export const cardSx = (theme) => ({
  width: 320,
  height: 480,
  borderRadius: 4,
  bgcolor: "background.paper",

  border: "1px solid",
  borderColor: "divider",

  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 24px rgba(0,0,0,0.4)"
      : "0 8px 24px rgba(0,0,0,0.08)",

  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  position: "relative",

  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",

  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: "primary.main",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 14px 35px rgba(0,0,0,0.6)"
        : "0 14px 35px rgba(0,0,0,0.15)",
  },
});


// ================================
// 🖼 CONTENEDOR DE IMAGEN
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
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.12)",
  },
};


// ================================
// 🏷 CHIP "NUEVO"
// ================================
export const chipNuevoSx = {
  position: "absolute",
  top: 14,
  left: 14,
  fontWeight: "bold",
  background: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
  color: "#fff",
  borderRadius: "14px",
  px: 1.5,
  py: 0.5,
  fontSize: "0.75rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
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
  fontSize: "1.35rem",
  fontWeight: 700,
  color: "primary.main",
  letterSpacing: "0.5px",
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
  borderRadius: 3,
  textTransform: "none",
  py: 1.2,
  fontWeight: 600,
  fontSize: "0.95rem",

  background:
    stock > 0
      ? "linear-gradient(135deg, #1976d2, #42a5f5)"
      : "grey.400",

  color: "white",

  transition: "all 0.3s ease",

  "&:hover": {
    transform: stock > 0 ? "translateY(-2px)" : "none",
    background:
      stock > 0
        ? "linear-gradient(135deg, #1565c0, #1e88e5)"
        : "grey.400",
    boxShadow:
      stock > 0
        ? "0 6px 20px rgba(25,118,210,0.35)"
        : "none",
  },
});


// ================================
// 🔎 BOTÓN DETALLES
// ================================
export const botonDetallesSx = {
  borderRadius: 3,
  textTransform: "none",
  py: 1,
  fontWeight: 500,
  fontSize: "0.9rem",

  border: "1px solid",
  borderColor: "divider",
  color: "text.secondary",

  transition: "all 0.3s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    bgcolor: "action.hover",
    borderColor: "primary.main",
  },
};
