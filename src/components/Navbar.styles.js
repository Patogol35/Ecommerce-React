const styles = {
  appBar: (scrolled, isDark) => ({
    backgroundColor: isDark ? "#0f172a" : "#1976d2",
    boxShadow: scrolled ? "0 6px 24px rgba(0,0,0,.35)" : "none",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    transition: "all .3s ease",
    color: "#fff",
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
    color: "inherit",
    textDecoration: "none",
  },

  logoIcon: {
    fontSize: 28,
    background: "linear-gradient(135deg,#FF5722,#FFC107)",
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

  drawerPaper: (isDark) => ({
    width: 280,
    background: isDark ? "#020617" : "#1976d2",
    color: "#fff",
    borderRadius: "16px 0 0 16px",
    p: 2,
  }),

  drawerStack: {
    flex: 1,
    mt: 8,
    alignItems: "center",
  },

  userSection: (mobile) => ({
    mt: mobile ? 8 : 0,
    textAlign: "center",
  }),

  logoutBtn: {
    color: "#fff",
    fontWeight: 600,
    background: "linear-gradient(135deg,#d32f2f,#f44336)",
    borderRadius: "12px",
    px: 2.5,
    py: 1,
  },

  toggleModeBtn: {
    mt: 2,
    color: "#fff",
    background: "rgba(255,255,255,.15)",
    "&:hover": { background: "rgba(255,255,255,.25)" },
    width: 48,
    height: 48,
  },
};

export default styles;
