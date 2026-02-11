// Tarjeta principal
export const cardSx = (theme) => ({
  width: 320,
  height: 480,
  borderRadius: 3,
  bgcolor: "background.paper",
  border: "3px solid",
  borderColor: "divider", // ✅ línea sutil que separa del fondo
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 6px 18px rgba(0,0,0,0.6)"   // sombra más fuerte en dark
      : "0 8px 24px rgba(0,0,0,0.06)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 24px rgba(0,0,0,0.9)"
        : "0 12px 32px rgba(0,0,0,0.12)",
  },
});

// Imagen contenedor
export const imagenBoxSx = {
  position: "relative",
  height: 240,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "background.default", // ✅ adaptable
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
  boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
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
  color: "text.primary", // ✅ adaptable
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

// Precio
export const precioStackSx = {
  mb: 2,
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "primary.main", // ✅ usa paleta
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
  background:
    stock > 0 ? "linear-gradient(90deg, #1976d2, #42a5f5)" : "grey.400",
  color: "white",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: stock > 0 ? "scale(1.05)" : "none",
    background:
      stock > 0
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
  borderColor: "divider", // ✅ adaptable
  color: "text.secondary", // ✅ se ajusta a light/dark
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.04)",
    bgcolor: "action.hover", // ✅ dinámico
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },
};
