// styles.js
const styles = {
  appBar: (theme, scrolled) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.paper
        : "#1976d2",
    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
    zIndex: 1400,
  }),

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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

  // ☰ botón hamburguesa (3 rayas)
  menuBtnMobile: (theme) => ({
    display: { xs: "block", lg: "none" },
    color:
      theme.palette.mode === "dark"
        ? theme.palette.text.primary
        : "#fff",
  }),

  menuIconWrapper: {
    display: "flex",
  },

  // Drawer
  drawerPaper: (theme) => ({
    width: 280,
    background:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : "#1976d2",
    borderRadius: "16px 0 0 16px",
    padding: 16,
    display: "flex",
    flexDirection: "column",
  }),

  drawerStack: {
    flex: 1,
    mt: 8,
  },

  userSection: (isMobile) => ({
    my: isMobile ? 2 : 0,
    textAlign: "center",
    mt: isMobile ? 12 : 0,
  }),

  logoutBtn: (theme) => ({
    fontWeight: 600,
    color: "#fff",
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #b71c1c, #d32f2f)"
        : "linear-gradient(135deg, #d32f2f, #f44336)",
    borderRadius: "12px",
    px: 2.5,
    py: 1,
  }),

  drawerUtilStack: {
    mt: 3,
    pb: 2,
  },

  // 🌙 botón modo oscuro
  toggleModeBtn: (theme) => ({
    color:
      theme.palette.mode === "dark"
        ? theme.palette.text.primary
        : "#fff",
    background:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.1)"
        : "rgba(0,0,0,0.4)",
    "&:hover": {
      background:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.2)"
          : "rgba(0,0,0,0.7)",
    },
    width: 48,
    height: 48,
  }),
};

export default styles;
