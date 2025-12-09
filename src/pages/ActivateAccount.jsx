// pages/ActivateAccount.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography, CircularProgress, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { toast } from "react-toastify";
export default function ActivateAccount() {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading"); 
  // "loading" | "success" | "error"
  useEffect(() => {
    async function activate() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/activar/${uid}/${token}/`);
        const data = await res.json();
        if (res.ok) {
          setStatus("success");
          toast.success("Cuenta activada correctamente. Ya puedes iniciar sesión.");
        } else {
          setStatus("error");
          toast.error(data.error || "Error al activar la cuenta");
        }
      } catch {
        setStatus("error");
        toast.error("No se pudo activar la cuenta");
      }
    }
    activate();
  }, [uid, token]);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 4,
          boxShadow: 6,
          textAlign: "center",
          p: 2,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          {/* Loading */}
          {status === "loading" && (
            <>
              <CircularProgress size={60} sx={{ mb: 3 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Activando tu cuenta...
              </Typography>
              <Typography color="text.secondary">
                Por favor espera unos segundos.
              </Typography>
            </>
          )}
          {/* Success */}
          {status === "success" && (
            <>
              <CheckCircleIcon sx={{ fontSize: 70, color: "green", mb: 2 }} />
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                ¡Cuenta Activada!
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Tu cuenta ha sido activada correctamente. Ya puedes iniciar sesión.
              </Typography>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => navigate("/login")}
                startIcon={<MarkEmailReadIcon />}
                sx={{ borderRadius: 3, py: 1.5 }}
              >
                Ir a Iniciar Sesión
              </Button>
            </>
          )}
          {/* Error */}
          {status === "error" && (
            <>
              <ErrorIcon sx={{ fontSize: 70, color: "red", mb: 2 }} />
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Error al activar
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                El enlace es inválido o ha expirado.
              </Typography>
              <Button
                variant="contained"
                color="error"
                size="large"
                fullWidth
                onClick={() => navigate("/register")}
                sx={{ borderRadius: 3, py: 1.5 }}
              >
                Crear una nueva cuenta
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}