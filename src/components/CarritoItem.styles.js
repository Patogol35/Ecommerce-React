  const carritoItemStyles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    mb: 3,
    mx: { xs: 2, sm: 0 },
    borderRadius: 6,
    border: "1px solid",
    borderColor: theme.palette.divider,
    overflow: "hidden",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(30,30,30,0.85)"
        : "rgba(255,255,255,0.9)",
    backdropFilter: "blur(6px)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    transition: "all 0.35s ease",
    "&:hover": {
      boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
      transform: "translateY(-3px) scale(1.01)",
    },
  }),

  media: (theme) => ({
    width: { xs: "100%", sm: 200 },
    height: { xs: 220, sm: 200 },
    objectFit: "contain",
    borderRadius: { xs: "18px 18px 0 0", sm: "18px 0 0 18px" },
    bgcolor: theme.palette.mode === "dark" ? "#222" : "#fafafa",
    p: 2,
    transition: "transform 0.4s ease",
    "&:hover": { transform: "scale(1.1)" },
  }),

  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 3,
    gap: 1.2,
  },

  titulo: {
    fontWeight: 700,
    fontSize: "1.15rem",
    lineHeight: 1.4,
    mb: 0.5,
    letterSpacing: "0.3px",
  },

  descripcion: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "text.secondary",
    fontSize: "0.92rem",
    mb: 1.8,
  },

  chipSubtotal: {
    fontWeight: 700,
    fontSize: "1rem",
    color: "primary.main",
  },

  chipStock: {
    fontWeight: 600,
    fontSize: "0.85rem",
    opacity: 0.85,
    color: "success.main",
  },

  controlesWrapper: {
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    gap: 1.5,
    borderLeft: { sm: "1px solid rgba(0,0,0,0.07)" },
    borderTop: { xs: "1px solid rgba(0,0,0,0.07)", sm: "none" },
    backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "#fcfcfc",
  },

  cantidadWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    bgcolor: "action.hover",
    borderRadius: 3,
    px: 1.2,
    py: 0.6,
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.08)",
  },

  cantidadInput: {
    width: 64,
    "& input": {
      textAlign: "center",
      fontWeight: 700,
      fontSize: "1rem",
      borderRadius: 3,
    },
  },

  botonEliminar: {
    color: "error.main",
    borderRadius: 3,
    px: 2.5,
    fontWeight: 600,
    "&:hover": {
      bgcolor: "rgba(211,47,47,0.12)",
      transform: "scale(1.05)",
    },
    transition: "all 0.25s ease",
  },
};

export default carritoItemStyles;
