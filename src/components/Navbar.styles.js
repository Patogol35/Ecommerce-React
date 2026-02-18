const styles = {
  appBar: (theme, scrolled) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "#121212"
        : scrolled
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
    transition: "all .3s ease",
    boxShadow: scrolled
      ? "0 4px 16px rgba(0,0,0,0.25)"
      : "none",
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
    height: 40,
    width: 40,
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    zIndex: 1300,
    display: "flex",
    justifyContent: "flex-end",
  },

  drawerPanel: {
    width: "280px",
    borderRadius: "16px 0 0 16px",
    padding: "2rem",
    paddingTop: "5rem",
    boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
    overflowY: "auto",
  },

  drawerBottom: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },

  roundThemeBtn: {
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "50%",
    width: 56,
    height: 56,
    "&:hover": {
      background: "rgba(255,255,255,0.12)",
    },
  },

  userSection: (mobile) => ({
    my: mobile ? 2 : 0,
  }),

  logoutBtn: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#fff",
    borderRadius: "12px",
    textTransform: "none",
    background: "#d32f2f",
    "&:hover": {
      background: "#b71c1c",
    },
  },

  toggleIcon: {
    color: "#fff",
  },
};

export default styles;
