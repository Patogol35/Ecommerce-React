// ================================
// TARJETA PRINCIPAL
// ================================
export const cardSx = (theme) => ({
  width: 320,
  height: 480,
  borderRadius: 3,

  bgcolor: theme.palette.mode === "dark" ? "#1f1f1f" : "#ffffff",

  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#ffffff" : "#000000",

  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 24px rgba(0,0,0,0.45)"
      : "0 8px 22px rgba(0,0,0,0.12)",

  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.25s ease",

  "&:hover": {
    transform: "translateY(-6px) scale(1.01)",
  },
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
// BOTÓN AGREGAR
// ================================
export const botonAgregarSx = (stock) => ({
  borderRadius: 2,
  textTransform: "none",
  py: 1.1,
  fontWeight: 600,

  background:
    stock > 0
      ? "linear-gradient(135deg, #1976d2, #42a5f5)"
      : "#bdbdbd",

  color: "white",
  transition: "all 0.25s ease",

  "&:hover": {
    transform: stock > 0 ? "scale(1.04)" : "none",
    background:
      stock > 0
        ? "linear-gradient(135deg, #1565c0, #1e88e5)"
        : "#bdbdbd",
  },
};
