const styles = {
  appBar: (scrolled) => ({
    backgroundColor: scrolled ? "#1976d2" : "transparent",
    color: "#fff",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  }),

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#fff",
  },

  logoIcon: {
    mr: 1,
  },

  desktopMenu: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 2,
  },

  menuBtnMobile: {
    display: { xs: "flex", md: "none" },
    color: "#fff",
  },

  menuIconWrapper: {
    display: "flex",
  },

  drawerPaper: {
    background: "linear-gradient(135deg, #1976d2 30%, #42a5f5 90%)",
    color: "#fff",
    width: 260,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "1rem",
  },

  drawerStack: {
    flex: 1,
    mt: 4, // espacio entre usuario y opciones
  },

  userSection: (isMobile) => ({
    my: isMobile ? 2 : 0,
    textAlign: "center",
    mt: isMobile ? 8 : 0, // 👈 usuario más abajo en móvil
  }),

  avatar: {
    width: 56,
    height: 56,
    mb: 1,
  },

  logoutBtn: {
    mt: 2,
    color: "#fff",
    borderColor: "#fff",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },
};

export default styles;
