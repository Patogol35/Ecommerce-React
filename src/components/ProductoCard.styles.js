// Tarjeta principal
export const cardSx = (theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: 300,
  height: "100%",
  borderRadius: 3,
  overflow: "hidden",
  transition: "all 0.3s ease",
  backgroundColor: theme.palette.background.paper,

  // 🔥 BORDE BIEN MARCADO
  border: `2px solid ${
    theme.palette.mode === "dark"
      ? "#555"     // más claro en oscuro
      : "#bdbdbd"  // más oscuro en claro
  }`,

  // 🔥 sombra adicional para que se vea mejor
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgba(255,255,255,0.05)"
      : "0 0 0 1px rgba(0,0,0,0.05)",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 25px rgba(0,0,0,0.6)"
        : "0 8px 25px rgba(0,0,0,0.2)",
  },
});

// Imagen contenedor
export const imagenBoxSx = {
  position: "relative",
  height: 240,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "background.default",
  overflow: "hidden",
};

export const imagenSx = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  transition: "transform 0.5s ease",
  "&:hover": { transform: "scale(1.08) rotate(1deg)" },
};

export const chipNuevoSx = {
  position: "absolute",
  top: 14,
  left: 14,
  fontWeight: "bold",
  borderRadius: "12px",
  px: 1.5,
  py: 0.5,
  fontSize: "0.75rem",
};

export const contenidoSx = {
  p: 2.2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

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

export const precioStackSx = {
  mb: 2,
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "primary.main",
};

export const dividerSx = { my: 1.2 };

// 🔥 Botón 100% dinámico con theme
export const botonAgregarSx = (stock) => (theme) => ({
  borderRadius: 2,
  textTransform: "none",
  py: 1.1,
  fontWeight: 600,
  fontSize: "0.95rem",
  background:
    stock > 0
      ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
      : theme.palette.grey[400],
  color: theme.palette.primary.contrastText,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: stock > 0 ? "scale(1.05)" : "none",
    background:
      stock > 0
        ? `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`
        : theme.palette.grey[400],
    boxShadow: stock > 0 ? "0 6px 18px rgba(0,0,0,0.18)" : "none",
  },
});

export const botonDetallesSx = {
  borderRadius: 2,
  textTransform: "none",
  py: 0.9,
  fontWeight: 500,
  fontSize: "0.9rem",
  border: "1px solid",
  borderColor: "divider",
  color: "text.secondary",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.04)",
    bgcolor: "action.hover",
  },
};
