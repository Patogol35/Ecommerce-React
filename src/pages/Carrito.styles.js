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
    fontSize: { xs: "1.8rem", sm: "2rem" },
  },

  headerIcon: {
    fontSize: 40,
  },

  footerBox: (theme) => ({
    textAlign: "right",
    mt: 4,
  }),

  divider: {
    mb: 2,
    display: { xs: "none", sm: "block" },
  },

  // ✅ Botón flotante
  floatingButton: (theme) => ({
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 1200,
    borderRadius: "50px",
    px: 4,
    py: 1.5,
    fontWeight: "bold",
    fontSize: "1rem",
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    color: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.08)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    },
  }),
};

export default styles;
