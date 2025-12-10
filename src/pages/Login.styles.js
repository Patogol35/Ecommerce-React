const loginStyles = {
  container: (theme) => ({
    minHeight: "auto",          // ❌ quitamos altura completa
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    py: 4,                      // 🔥 menos espacio ARRIBA/ABAJO (ajusta a gusto)
    px: 2,
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #121212 0%, #1e1e1e 100%)"
        : "linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)",
  }),

  paper: (theme) => ({
    p: 4,
    borderRadius: 3,
    width: "100%",
    maxWidth: 420,
    display: "flex",
    flexDirection: "column",
    gap: 3,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 24px rgba(0,0,0,0.5)"
        : "0 12px 24px rgba(0,0,0,0.15)",
    backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
  }),
};
