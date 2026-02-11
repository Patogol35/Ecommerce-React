import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeModeProvider } from "./ThemeContext"; // ajusta la ruta si es necesario

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeModeProvider>
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
    </ThemeModeProvider>
  </React.StrictMode>
);
