const styles = {
  root: {
    pb: { xs: 14, sm: 6 },
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
    p: { xs: 3, sm: 0 },
    boxShadow: { xs: "0 -4px 16px rgba(0,0,0,0.15)", sm: "none" },
    borderTop: { xs: "1px solid #ddd", sm: "none" },
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "center", sm: "flex-end" },
    justifyContent: { xs: "center", sm: "space-between" },
    gap: { xs: 2, sm: 1 },
  }),
  divider: {
    mb: 2,
    display: { xs: "none", sm: "block" },
  },
  button: {
    width: { xs: "100%", sm: "auto" },
    py: 1.5,
    px: 4,
    fontWeight: 700,
    fontSize: "1rem",
    borderRadius: 8,
    background: "linear-gradient(135deg, #1976d2, #42a5f5)", // degradado azul
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-3px) scale(1.05)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
      background: "linear-gradient(135deg, #1565c0, #1e88e5)",
    },
  },
  total: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontWeight: 800,
    fontSize: "1.3rem",
    color: "#1976d2",
    padding: "0.5rem 1rem",
    borderRadius: 8,
    backgroundColor: "#e3f2fd", // azul muy claro
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default styles;
