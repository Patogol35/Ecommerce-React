const styles = {
  appBar: (scrolled) => ({
    backgroundColor: "#1976d2",
    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
    zIndex: 1400,
  }),

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },

  logoIcon: {
    fontSize: 28,
    background: "linear-gradient(135deg, #FF5722, #FFC107)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  desktopMenu: {
    display: { xs: "none", lg: "flex" },
    gap: 2,
    alignItems: "center",
  },

  menuBtnMobile: {
    display: { xs: "block", lg: "none" },
    color: "#fff",
  },

  drawerPaper: {
    width: 280,
    background: "#1976d2",
    borderRadius: "16px 0 0 16px",
    p: 2,
    display: "flex",
    flexDirection: "column",
  },

  userSection: (isMobile) => ({
    my: isMobile ? 2 : 0,
    textAlign: "center",
    mt: isMobile ? 4 : 0, // 👈 baja el bloque de usuario en móvil
  }),

  logoutBtn: {
    fontWeight: 600,
    color: "#fff",
    background: "linear-gradient(135deg, #d32f2f, #f44336)",
    borderRadius: "12px",
    px: 2.5,
    py: 1,
  },

  drawerStack: {
    flex: 1,
    mt: 5, // 👈 más espacio antes de las opciones
  },

  drawerUtilStack: {
    mt: 3,
    pb: 2,
  },

  toggleModeBtn: {
    color: "#fff",
    background: "rgba(0,0,0,0.4)",
    "&:hover": { background: "rgba(0,0,0,0.7)" },
    width: 48,
    height: 48,
  },

  menuIconWrapper: {
    display: "flex",
  },
};

export default styles;
