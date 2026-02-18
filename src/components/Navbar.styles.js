const styles = {
  appBar: (theme, scrolled) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(18,18,18,0.85)"
        : "rgba(25,118,210,0.9)",
    backdropFilter: "blur(8px)",
    boxShadow: scrolled
      ? "0 4px 20px rgba(0,0,0,0.35)"
      : "0 2px 8px rgba(0,0,0,0.15)",
    transition: "all .3s ease",
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
  },

  iconCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },

  drawerPaper: (theme) => ({
    width: 280,
    backgroundColor:
      theme.palette.mode === "dark" ? "#1e1e1e" : "#1976d2",
    color: "#fff",
    borderRadius: "16px 0 0 16px",
    p: 2,
  }),

  drawerStack: {
    flex: 1,
    mt: 10,
  },

  userSection: (mobile) => ({
    textAlign: "center",
    my: mobile ? 2 : 0,
  }),

  logoutBtn: {
    fontSize: "1.05rem",
    fontWeight: 600,
    color: "#fff",
    borderRadius: "12px",
    textTransform: "none",
    width: "100%",
    py: 1.2,
    background: "#d32f2f",
    "&:hover": {
      filter: "brightness(1.15)",
      boxShadow: "0 0 12px rgba(0,0,0,0.3)",
    },
  },

  drawerUtilStack: {
    mt: 3,
    pb: 2,
  },

  toggleIcon: {
    color: "#fff",
    width: 48,
    height: 48,
  },
};

export default styles;
