const styles = {
  root: {
    pb: { xs: 16, sm: 6 },
    px: { xs: 3, sm: 6 }, // más padding lateral
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 1.5, // más espacio entre icono y texto
    color: "primary.main",
    mt: 4,
    mb: 4,
  },
  headerIcon: {
    fontSize: 44, // antes 36
  },
  footerBox: (theme) => ({
    textAlign: "right",
    mt: 4,
    [theme.breakpoints.up("md")]: {
      position: "sticky",
      bottom: 0,
      backgroundColor: theme.palette.background.paper,
      p: 3, // más padding
      borderRadius: 3,
      boxShadow: "0 -3px 10px rgba(0,0,0,0.12)",
    },
  }),
  divider: {
    mb: 3,
    display: { xs: "none", sm: "block" },
  },
  button: (total) => ({
    width: { xs: "95%", sm: "auto" },
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 20, sm: "auto" },
    left: { xs: "50%", sm: "auto" },
    transform: { xs: "translateX(-50%)", sm: "none" },
    zIndex: 1200,
    fontWeight: "bold",
    borderRadius: 10,
    py: 2, // más alto
    px: 3, // más ancho
    boxShadow: { xs: "0 8px 20px rgba(0,0,0,0.35)", sm: "none" },
    fontSize: 18, // antes 16
    transition: "all 0.3s",
    "&:hover": {
      transform: { xs: "translateX(-50%) scale(1.07)", sm: "scale(1.07)" },
      boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
      transform: "none",
      boxShadow: "none",
    },
  }),
};

export default styles;
