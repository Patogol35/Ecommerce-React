import { useState } from "react";
import { login as apiLogin } from "../api/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  LinearProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---------------------
  // MANEJO DE ERROR GLOBAL
  // ---------------------
  const handleErrors = async (error) => {
    try {
      const errorData = await error.json();
      if (errorData.detail) {
        toast.error(errorData.detail);
      } else {
        toast.error("Ocurrió un error inesperado");
      }
    } catch {
      toast.error("Error en el servidor");
    }
  };

  // ---------------------
  // SUBMIT LOGIN
  // ---------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación mínima
    if (!form.username.trim() || !form.password.trim()) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    setLoading(true);

    try {
      const data = await apiLogin(form);

      if (data?.access && data?.refresh) {
        login(data.access, data.refresh);
        toast.success(`Bienvenido/a, ${form.username} 👋`);
        navigate("/");
      } else {
        toast.error("Credenciales inválidas");
      }
    } catch (error) {
      handleErrors(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" sx={{ mb: 3 }}>
          Iniciar Sesión
        </Typography>

        {loading && <LinearProgress sx={{ mb: 2 }} />}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Usuario"
            name="username"
            value={form.username}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type={showPass ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPass(!showPass)}>
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 3, py: 1.4 }}
          >
            Entrar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
