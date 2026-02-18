// NavButton.styles.js
const navButtonStyles = (theme, isActive, item, alwaysColoredPaths) => {
  const alwaysColored = alwaysColoredPaths.includes(item.path);
  const activeOrForced = isActive || alwaysColored;

  return {
    fontSize: "1.05rem",
    fontWeight: 600,
    color: "#fff",
    borderRadius: "12px",
    textTransform: "none",
    width: "100%",
    py: 1.2,

    transition: "background-color 0.25s ease, box-shadow 0.25s ease, filter 0.2s ease",

    "& .MuiButton-startIcon": { color: "#fff" },

    // ===== Fondo dinámico (igual que tú pero correcto) =====
    backgroundColor: {
      xs: item.color, // móvil siempre con color
      md: activeOrForced ? item.color : "transparent",
    },

    // ===== Activo =====
    boxShadow: isActive
      ? "0 0 18px rgba(255,255,255,0.45)" // brillo sección móvil
      : "none",

    // ❌ quitamos crecimiento feo
    transform: "scale(1)",

    // ===== Hover DESKTOP pinta color =====
    "&:hover": {
      backgroundColor: {
        md: item.color,   // ← esto hace que ahora SÍ se pinte
      },

      boxShadow: isActive
        ? "0 0 18px rgba(0,0,0,0.35)"
        : "0 0 10px rgba(0,0,0,0.25)",

      filter: "brightness(1.08)",
    },

    // ===== Dark mode =====
    ...(theme.palette.mode === "dark" && {
      color: "#fff",
      "&:hover": {
        filter: "brightness(1.15)",
      },
    }),
  };
};

export default navButtonStyles;
