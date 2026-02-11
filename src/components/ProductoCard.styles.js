// ================================
// TARJETA PRINCIPAL
// ================================
export const cardSx = (theme) => ({
  width: 320,
  height: 480,
  borderRadius: 3,

  // 🔥 MISMO COLOR QUE EL CONTENEDOR DE FILTROS
  bgcolor: "background.paper",

  // 🔥 BORDE SUTIL ELEGANTE
  border: "1px solid",
  borderColor:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.08)"
      : "rgba(0,0,0,0.06)",

  // 🔥 SOMBRA MÁS ARMÓNICA
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 6px 18px rgba(0,0,0,0.5)"
      : "0 6px 18px rgba(0,0,0,0.08)",

  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.25s ease",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 10px 26px rgba(0,0,0,0.6)"
        : "0 10px 26px rgba(0,0,0,0.12)",
  },

  "&:focus": { outline: "none" },
  "&:focus-visible": { outline: "none" },
});

// ================================
// CONTENEDOR IMAGEN
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
// IMAGEN
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
// CHIP
// ================================
export const chipNuevoSx = {
  position: "absolute",
  top: 14,
  left: 14,
  fontWeight: 600,
  background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
  color: "#fff",
  borderRadius: "14px",
  px: 1.5,
  py: 0.4,
  fontSize: "0.75rem",
  boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
};


// ================================
// CONTENIDO
// ================================
export const contenidoSx = {
  p: 2.2,
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
// PRECIO (AZUL PROFESIONAL)
// ================================
export const precioStackSx = (theme) => ({
  mb: 2,
  fontSize: "1.3rem",
  fontWeight: 700,
  color:
    theme.palette.mode === "dark"
      ? "#4dabf5"   // azul claro elegante en dark
      : "#1976d2",  // azul profesional en light
});


// ================================
// DIVIDER
// ================================
export const dividerSx = {
  my: 1.2,
};


// ================================
// BOTÓN AGREGAR
// ================================
export const botonAgregarSx = (stock) => ({
  borderRadius: 2,
  textTransform: "none",
  py: 1.1,
  fontWeight: 600,
  fontSize: "0.95rem",

  background:
    stock > 0
      ? "linear-gradient(135deg, #1976d2, #42a5f5)"
      : "#bdbdbd",

  color: "white",
  transition: "all 0.25s ease",

  "&:hover": {
    transform: stock > 0 ? "scale(1.03)" : "none",
    background:
      stock > 0
        ? "linear-gradient(135deg, #1565c0, #1e88e5)"
        : "#bdbdbd",
  },

  "&:focus": { outline: "none" },
  "&:focus-visible": { outline: "none" },
});


// ================================
// BOTÓN DETALLES
// ================================
export const botonDetallesSx = (theme) => ({
  borderRadius: 2,
  textTransform: "none",
  py: 0.9,
  fontWeight: 500,
  fontSize: "0.9rem",

  border: "2px solid",
  borderColor:
    theme.palette.mode === "dark"
      ? "#ffffff"
      : "#000000",

  color:
    theme.palette.mode === "dark"
      ? "#ffffff"
      : "#000000",

  backgroundColor: "transparent",
  transition: "all 0.25s ease",

  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.08)"
        : "rgba(0,0,0,0.05)",
    transform: "scale(1.03)",
  },

  "&:focus": { outline: "none" },
  "&:focus-visible": { outline: "none" },
});
