export const cardSx = {
  width: "100%",
  maxWidth: 320,
  borderRadius: 3,
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
};

export const imagenBoxSx = {
  position: "relative",
  height: 220,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "#f5f5f5",
  overflow: "hidden",
};

export const imagenSx = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  transition: "transform 0.5s ease",
  "&:hover": { transform: "scale(1.08)" },
};

export const chipNuevoSx = {
  position: "absolute",
  top: 12,
  left: 12,
  fontWeight: "bold",
  bgcolor: "secondary.main",
  color: "white",
  boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
};

export const contenidoSx = {
  p: 2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

export const tituloSx = { mb: 1 };

export const precioStackSx = { mb: 2 };

export const dividerSx = { my: 1 };

export const botonAgregarSx = (stock) => ({
  borderRadius: 2,
  textTransform: "none",
  py: 1,
  fontWeight: "bold",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: stock > 0 ? "scale(1.05)" : "none",
    boxShadow: stock > 0 ? "0 6px 15px rgba(0,0,0,0.2)" : "none",
  },
});

export const botonDetallesSx = {
  borderRadius: 2,
  textTransform: "none",
  py: 1,
  fontWeight: "medium",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};
