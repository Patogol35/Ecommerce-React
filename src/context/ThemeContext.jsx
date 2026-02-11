import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const ThemeModeContext = createContext();

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "light";
  });

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("mode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          primary: {
            main: "#4f46e5",
          },
          secondary: {
            main: "#f43f5e",
          },

          background: {
            default: mode === "dark" ? "#141414" : "#f8f9fa",
            paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
          },
        },

        typography: {
          fontFamily: "Inter, Roboto, Arial, sans-serif",
          h4: { fontWeight: 700 },
          h5: { fontWeight: 600 },
        },

        shape: { borderRadius: 12 },

        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                transition: "0.3s",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                textTransform: "none",
                fontWeight: 600,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(ThemeModeContext);
}
