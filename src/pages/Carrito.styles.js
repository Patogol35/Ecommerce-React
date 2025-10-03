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
    p: { xs: 2, sm: 0 },
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 -6px 16px rgba(0,0,0,0.6)" // sombra más fuerte en dark
        : { xs: "0 -4px 12px rgba(0,0,0,0.15)", sm: "none" },
    borderTop: { xs: "1px solid", sm: "none" },
    borderColor: { xs: "divider", sm: "none" },
  }),
  divider: {
    mb: 2,
    display: { xs: "none", sm: "block" },
  },
  button: {
    width: { xs: "100%", sm: "auto" },
    transition: "all 0.3s",
    fontWeight: "bold",
    borderRadius: 3,
    py: 1.2,
    "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
  },
};

export default styles;
