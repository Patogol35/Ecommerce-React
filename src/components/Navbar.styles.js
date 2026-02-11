const styles = {
  appBar: (theme, scrolled) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: scrolled
      ? theme.palette.mode === "dark"
        ? "0 4px 20px rgba(0,0,0,0.6)"
        : "0 4px 20px rgba(0,0,0,0.25)"
      : "none",
    transition: "background-color .3s ease, box-shadow .3s ease",
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
    color: "inherit",
  },

  iconCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
  },

  drawerPaper: (theme) => ({
    width: 280,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: "16px 0 0 16px",
    p: 2,
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
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    borderRadius: "12px",
    px: 2.5,
    py: 1,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  }),

  drawerUtilStack: {
    mt: 3,
    pb: 2,
  },

  toggleIcon: {
    color: "inherit",
    width: 48,
    height: 48,
  },
};

export default styles;
