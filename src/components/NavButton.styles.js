// NavButton.styles.js
const navButtonStyles = (theme, isActive, item, alwaysColoredPaths) => ({
  fontSize: "1.05rem",
  fontWeight: 600,
  color: "#fff",
  borderRadius: "12px",
  textTransform: "none",
  width: "100%",
  py: 1.2,
  transition: "all 0.25s ease",
  "& .MuiButton-startIcon": { color: "#fff" },

  /* ===== FONDO ===== */
  background: {
    xs: item.color, // 📱 móvil siempre con color
    md:
      isActive || alwaysColoredPaths.includes(item.path)
        ? item.color
        : "transparent",
  },

  /* ===== ACTIVO ===== */
  boxShadow: isActive
    ? "0 0 16px rgba(0,0,0,0.35)"
    : "none",

  transform: "scale(1)",

  /* ===== HOVER DESKTOP ===== */
  "&:hover": {
    backgroundColor: {
      md: item.color, // 🎯 se pinta con su color
    },
    boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
    filter: "brightness(1.05)",
    transform: "scale(1.01)", // 👈 crecimiento MUY sutil
  },

  /* ===== DARK MODE ===== */
  ...(theme.palette.mode === "dark" && {
    "&:hover": {
      filter: "brightness(1.15)",
    },
  }),
});

export default navButtonStyles;
