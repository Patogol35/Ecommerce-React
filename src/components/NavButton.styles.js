// NavButton.styles.js
const navButtonStyles = (theme, isActive, item, alwaysColoredPaths) => {
  const alwaysColored = alwaysColoredPaths.includes(item.path);
  const colored = isActive || alwaysColored;

  return {
    fontSize: "1.05rem",
    fontWeight: 600,
    color: "#fff",
    borderRadius: "12px",
    textTransform: "none",
    width: "100%",
    py: 1.2,

    transition: "background 0.25s ease, box-shadow 0.25s ease, filter 0.2s",

    "& .MuiButton-startIcon": { color: "#fff" },

    // ===== BACKGROUND =====
    backgroundColor: {
      xs: item.color,              // móvil siempre color
      md: colored ? item.color : "transparent",
    },

    // ===== ACTIVO =====
    boxShadow: isActive
      ? "0 0 18px rgba(255,255,255,0.45)"   // brillo móvil
      : "none",

    transform: "scale(1)", // quitamos zoom grande

    // ===== HOVER DESKTOP =====
    "&:hover": {
      backgroundColor: {
        md: item.color,   // 🔥 AQUÍ está la clave
      },
      boxShadow: "0 0 12px rgba(0,0,0,0.25)",
      filter: "brightness(1.08)",
    },

    // ===== DARK MODE =====
    ...(theme.palette.mode === "dark" && {
      "&:hover": {
        filter: "brightness(1.15)",
      },
    }),
  };
};

export default navButtonStyles;
