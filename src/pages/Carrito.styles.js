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

    bgcolor: { xs: "background.paper", sm: "transparent" },

    p: { xs: 3, sm: 0 },

    boxShadow: {
      xs:
        theme.palette.mode === "dark"
          ? "0 -4px 16px rgba(0,0,0,0.6)"
          : "0 -4px 16px rgba(0,0,0,0.12)",
      sm: "none",
    },

    borderTop: {
      xs: `1px solid ${theme.palette.divider}`,
      sm: "none",
    },

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

  button: (theme) => ({
    width: { xs: "100%", sm: "auto" },
    py: 1.2,
    px: 3.5,
    fontWeight: 700,
    fontSize: "0.95rem",
    borderRadius: 3,

    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,

    color: theme.palette.primary.contrastText,

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 4px 14px rgba(0,0,0,0.6)"
        : "0 3px 10px rgba(0,0,0,0.15)",

    transition: "all 0.3s ease-in-out",

    mr: { xs: 0, sm: 6 },

    "&:hover": {
      transform: "translateY(-2px) scale(1.03)",
      background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    },
  }),

  total: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 0.8,
    fontWeight: 800,
    fontSize: "1.1rem",

    color: "primary.main",

    px: 2,
    py: 0.6,
    borderRadius: 2,

    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(66,165,245,0.15)"
        : "rgba(25,118,210,0.08)",

    border: `1px solid ${theme.palette.divider}`,
  }),
};

export default styles;
