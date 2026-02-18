// NavButton.styles.js
const navButtonStyles = (theme, isActive, item, alwaysColoredPaths) => {
  const shouldBeColored =
    isActive || alwaysColoredPaths.includes(item.path);

  return {
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: "14px",
    textTransform: "none",
    width: "100%",
    py: 1.1,
    px: 1.6,
    color: "#fff",

    transition: "background 0.25s ease, box-shadow 0.25s ease, filter 0.2s ease",

    "& .MuiButton-startIcon": {
      color: "#fff",
      transition: "transform 0.2s ease",
    },

    // ===== Fondo =====
    background: {
      xs: item.color, // móvil siempre con color
      md: shouldBeColored ? item.color : "transparent",
    },

    // ===== Activo =====
    boxShadow: shouldBeColored
      ? "0 6px 18px rgba(0,0,0,0.25)"
      : "none",

    // quitamos el scale grande
    transform: "scale(1)",

    // ===== Hover escritorio =====
    "&:hover": {
      background: {
        md: item.color, // se pinta al pasar mouse
      },
      boxShadow: "0 8px 20px rgba(0,0,0,0.28)",
      filter: "brightness(1.08)",

      "& .MuiButton-startIcon": {
        transform: "translateX(2px)", // micro detalle elegante
      },
    },

    // ===== Dark mode refinado =====
    ...(theme.palette.mode === "dark" && {
      backdropFilter: "blur(6px)",
      "&:hover": {
        filter: "brightness(1.15)",
      },
    }),
  };
};

export default navButtonStyles;
