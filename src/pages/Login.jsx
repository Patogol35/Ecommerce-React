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

// Validaciones compactas
const validators = {
  username: (v) => (!v.trim() ? "El usuario es obligatorio" : null),
  password: (v) => (!v.trim() ? "La contraseña es obligatoria" : null),
};

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    for (const k in validators) {
      const err = validators[k](form[k]);
      if (err) return toast.error(err), false;
    }
    return true;
  };

  const handleErrors = (error) => {
    const msg =
      error?.response?.data?.message ||
      error?.response?.data?.detail ||
      (error?.response?.status === 401
        ? "Usuario o contraseña incorrectos"
        : "Error al iniciar sesión");

    if (msg.toLowerCase().includes("credentials"))
      return toast.error("Usuario o contraseña incorrectos");

    toast.error(msg);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = await apiLogin(form);
      if (!data?.access || !data?.refresh)
        return toast.error("Credenciales inválidas");

      login(data.access, data.refresh);
      toast.success(`Bienvenido/a, ${form.username} 👋`);
      navigate("/");
    } catch (err) {
      handleErrors(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={loginStyles.container(theme)}>
      <Paper elevation={8} sx={loginStyles.paper(theme)}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Bienvenido
        </Typography>

        <Typography align="center" color="text.secondary">
          Ingresa tus credenciales
        </Typography>

        <form onSubmit={handleSubmit}>
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

          <TextField
            name="password"
            label="Contraseña"
            type={showPass ? "text" : "password"}
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
                  <IconButton onClick={() => setShowPass(!showPass)} edge="end">
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box mt={3} display="flex" flexDirection="column" gap={2}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              fullWidth
              startIcon={
                loading && <CircularProgress size={20} color="inherit" />
              }
            >
              {loading ? "Entrando..." : "Iniciar sesión"}
            </Button>

            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate("/register")}
            >
              Registrarse
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
