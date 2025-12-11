import { useState, useCallback } from "react";
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
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutline from "@mui/icons-material/PersonOutline";
import LockOutlined from "@mui/icons-material/LockOutlined";

import loginStyles from "./Login.styles";

// ------- VALIDACIONES (como register) -------
const validators = {
  username: (v) => {
    if (!v.trim()) return "El usuario es obligatorio";
    return null;
  },
  password: (v) => {
    if (!v.trim()) return "La contraseña es obligatoria";
    return null;
  },
};

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  // -------- VALIDACIÓN como en register --------
  const validateForm = () => {
    for (const key in validators) {
      const error = validators[key](form[key], form);
      if (error) {
        toast.error(error);
        return false;
      }
    }
    return true;
  };

  // -------- ERRORES DEL SERVIDOR --------
  const handleErrors = useCallback((error) => {
    const resp = error?.response?.data;
    const status = error?.response?.status;

    let message =
      resp?.message ||
      resp?.detail ||
      (status === 401 ? "Usuario o contraseña incorrectos" : null);

    if (!message) {
      toast.error("Ocurrió un error al iniciar sesión");
      return;
    }

    const normalized = message.toLowerCase();

    if (
      normalized.includes("no active account") ||
      normalized.includes("credentials")
    ) {
      toast.error("Usuario o contraseña incorrectos");
    } else {
      toast.error(message);
    }
  }, []);

  // -------- SUBMIT --------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación frontend como register
    if (!validateForm()) return;

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
    <Container maxWidth="xs" sx={loginStyles.container(theme)}>
      <Paper elevation={8} sx={loginStyles.paper(theme)}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={loginStyles.titulo(theme)}
        >
          Bienvenido
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={loginStyles.subtitulo}
        >
          Ingresa tus credenciales para continuar
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Usuario */}
          <TextField
            name="username"
            label="Usuario"
            fullWidth
            margin="normal"
            value={form.username}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Contraseña */}
          <TextField
            name="password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Botones */}
          <Box mt={3} display="flex" flexDirection="column" gap={2}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              startIcon={
                loading && <CircularProgress size={20} color="inherit" />
              }
              sx={loginStyles.botonLogin(theme)}
            >
              {loading ? "Entrando..." : "Iniciar sesión"}
            </Button>

            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate("/register")}
              sx={loginStyles.botonRegister(theme)}
            >
              Registrarse
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
