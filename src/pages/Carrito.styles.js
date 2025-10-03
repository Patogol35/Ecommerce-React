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
  py: 1.2,
  px: 3.5,
  fontWeight: 700,
  fontSize: "0.95rem",
  borderRadius: 6,
  background: "linear-gradient(135deg, #1976d2, #42a5f5)",
  color: "#fff",
  boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
  transition: "all 0.3s ease-in-out",

  mr: { xs: 0, sm: 6 },  

  "&:hover": {
    transform: "translateY(-2px) scale(1.03)",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    background: "linear-gradient(135deg, #1565c0, #1e88e5)",
  },
},
  total: {
    display: "flex",
    alignItems: "center",
    gap: 0.8,            // menos espacio entre icono y texto
    fontWeight: 800,
    fontSize: "1.1rem",   // más pequeño
    color: "#1976d2",
    padding: "0.4rem 0.8rem", // padding más compacto
    borderRadius: 6,
    backgroundColor: "#e3f2fd",
    boxShadow: "0 1.5px 5px rgba(0,0,0,0.08)",
  },
};

export default styles;
