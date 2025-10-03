const styles = {
  root: {
    pb: { xs: 14, sm: 6 },
    px: { xs: 2, sm: 4 },
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    color: "primary.main",
    mt: 3,
    mb: 3,
  },
  headerIcon: {
    fontSize: 36,
  },
  footerBox: (theme) => ({
    textAlign: "right",
    mt: 3,
  }),
  divider: {
    mb: 2,
    display: { xs: "none", sm: "block" },
  },
  button: {
    width: { xs: "90%", sm: "auto" },
    position: { xs: "fixed", sm: "static" }, // 👈 flotante en móvil
    bottom: { xs: 16, sm: "auto" },
    left: { xs: "50%", sm: "auto" },
    transform: { xs: "translateX(-50%)", sm: "none" },
    zIndex: 1200,
    fontWeight: "bold",
    borderRadius: 8,
    py: 1.5,
    boxShadow: { xs: "0 6px 16px rgba(0,0,0,0.3)", sm: "none" },
    transition: "all 0.3s",
    "&:hover": {
      transform: { xs: "translateX(-50%) scale(1.05)", sm: "scale(1.05)" },
      boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
    },
  },
};

export default styles;
