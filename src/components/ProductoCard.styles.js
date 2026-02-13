// ================================
// TARJETA PRINCIPAL
// ================================
export const cardSx = (theme) => ({
  width: 320,
  height: 480,
  borderRadius: 4,

  bgcolor:
    theme.palette.mode === "dark"
      ? "#1b1b1b"
      : "#ffffff",

  border: "1px solid",
  borderColor:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.06)"
      : "rgba(0,0,0,0.06)",

  boxShadow:
    theme.palette.mode === "dark"
      ? "0 10px 28px rgba(0,0,0,0.55)"
      : "0 8px 24px rgba(0,0,0,0.10)",

  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 18px 40px rgba(0,0,0,0.7)"
        : "0 18px 40px rgba(0,0,0,0.15)",
  },

  "&:focus": { outline: "none" },
  "&:focus-visible": { outline: "none" },
});


// ================================
// CONTENEDOR IMAGEN
// ================================
export const imagenBoxSx = (theme) => ({
  position: "relative",
  height: 240,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg, #252525, #1b1b1b)"
      : "linear-gradient(180deg, #f8f9fa, #eef1f4)",

  overflow: "hidden",
});


// ================================
// IMAGEN
// ================================
export const imagenSx = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  transition: "transform 0.4s ease",
  "&:hover": {
    transform: "scale(1.08)",
  },
};


// ================================
// CHIP NUEVO
// ================================
export const chipNuevoSx = {
  position: "absolute",
  top: 14,
  left: 14,
  fontWeight: 600,
  background: "#111",
  color: "#fff",
  borderRadius: "20px",
  px: 1.5,
  py: 0.4,
  fontSize: "0.7rem",
  letterSpacing: "0.5px",
};


// ================================
// CONTENIDO
// ================================
export const contenidoSx = {
  p: 2.5,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};


// ================================
// TÍTULO
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
// PRECIO
// ================================
export const precioStackSx = (theme) => ({
  mb: 2,
  fontSize: "1.5rem",
  fontWeight: 700,
  letterSpacing: "0.5px",
  color:
    theme.palette.mode === "dark"
      ? "#4dabf5"
      : "#1976d2",
});


// ================================
// DIVIDER
// ================================
export const dividerSx = {
  my: 1.2,
  opacity: 0.4,
};


// ================================
// BOTÓN AGREGAR
// ================================
export const botonAgregarSx = (stock) => ({
  borderRadius: 3,
  textTransform: "none",
  py: 1.1,
  fontWeight: 600,
  fontSize: "0.95rem",

  background:
    stock > 0
      ? "linear-gradient(135deg, #1976d2, #42a5f5)"
      : "#9e9e9e",

  color: "white",

  boxShadow:
    stock > 0
      ? "0 6px 14px rgba(25,118,210,0.35)"
      : "none",

  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",

  "&:hover": {
    transform: stock > 0 ? "scale(1.04)" : "none",
    background:
      stock > 0
        ? "linear-gradient(135deg, #1565c0, #1e88e5)"
        : "#9e9e9e",
  },

  "&:focus": { outline: "none" },
  "&:focus-visible": { outline: "none" },
});


// ================================
// BOTÓN DETALLES
// ================================
export const botonDetallesSx = (theme) => ({
  borderRadius: 3,
  textTransform: "none",
  py: 0.9,
  fontWeight: 500,
  fontSize: "0.9rem",

  border: "1px solid",
  borderColor:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.2)"
      : "rgba(0,0,0,0.2)",

  color: "text.primary",

  backgroundColor: "transparent",
  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",

  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.06)"
        : "rgba(0,0,0,0.04)",
    transform: "scale(
