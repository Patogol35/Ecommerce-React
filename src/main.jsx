import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function Main() {
  const [mode, setMode] = useState("dark"); // puedes cambiar a "light"

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#4f46e5" },
          secondary: { main: "#f43f5e" },

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
        toastStyle={{
          borderRadius: "12px",
          fontFamily: "Inter, sans-serif",
        }}
      />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
