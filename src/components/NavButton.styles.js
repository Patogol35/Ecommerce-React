// NavButton.styles.js
const navButtonStyles = (theme, isActive, item, alwaysColoredPaths) => {
  const active =
    isActive || alwaysColoredPaths.includes(item.path);

  return {
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: "14px",
    textTransform: "none",
    width: "100%",
    py: 1.3,
    px: 2,
    letterSpacing: "0.4px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    color: active ? "#fff" : theme.palette.text.primary,

    backdropFilter: active ? "blur(6px)" : "none",

    background: {
      xs: `linear-gradient(135deg, ${item.color}, ${item.color}CC)`,
      md: active
        ? `linear-gradient(135deg, ${item.color}, ${item.color}CC)`
        : "transparent",
    },

    border: active
      ? "1px solid rgba(255,255,255,0.2)"
      : "1px solid transparent",

    boxShadow: active
      ? "0 8px 24px rgba(0,0,0,0.25)"
      : "none",

    transform: active ? "translateY(-2px)" : "translateY(0)",

    "& .MuiButton-startIcon": {
      color: active ? "#fff" : theme.palette.text.secondary,
      transition: "all 0.3s ease",
    },

    "&:hover": {
      background:
        active
          ? `linear-gradient(135deg, ${item.color}, ${item.color})`
          : theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.05)"
          : "rgba(0,0,0,0.05)",

      transform: "translateY(-3px)",
      boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
    },

    ...(theme.palette.mode === "dark" && {
      color: active ? "#fff" : "#ccc",
    }),
  };
};

export default navButtonStyles;
