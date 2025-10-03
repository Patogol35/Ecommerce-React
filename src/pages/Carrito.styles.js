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
    position: { xs: "fixed", sm: "static" },
    bottom: { xs: 0, sm: "auto" },
    left: 0,
    right: 0,
    bgcolor: { xs: theme.palette.background.paper, sm: "transparent" },
    p: { xs: 2, sm: 0 },
    boxShadow: { xs: "0 -4px 12px rgba(0,0,0,0.15)", sm: "none" },
    borderTop: { xs: "1px solid #ddd", sm: "none" },
  }),
  divider: {
    mb: 2,
    display: { xs: "none", sm: "block" },
  },
  // 👇 Botón más atractivo
  button: {
    width: { xs: "100%", sm: "auto" },
    transition: "all 0.3s",
    fontWeight: "bold",
    borderRadius: 8,
    py: 1.4,
    px: 3,
    fontSize: "1rem",
    background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    "&:hover": {
      transform: "translateY(-2px) scale(1.03)",
      background: "linear-gradient(135deg, #1565c0 0%, #1e88e5 100%)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
    },
  },
};

export default styles;
