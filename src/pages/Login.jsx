// src/components/Login.jsx
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

import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const validateForm = () => {
    if (!form.username.trim() || !form.password.trim()) {
      toast.error("Completa todos los campos");
      return false;
    }
    return true;
  };

  const handleErrors = (error) => {
    if (error.message === "Credenciales incorrectas") {
      toast.error("Usuario o contraseña incorrectos ❌");
    } else {
      toast.error("Error al iniciar sesión");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = await apiLogin(form);

      if (!data?.access || !data?.refresh) {
        return toast.error("Credenciales inválidas");
      }

      login(data.access, data.refresh);
      toast.success(`Bienvenido/a, ${form.username} 👋`);
      navigate("/");
    } catch (error) {
      handleErrors(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" textAlign="center" mb={2}>
          Iniciar Sesión
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Usuario"
            name="username"
            value={form.username}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            type={showPass ? "text" : "password"}
            label="Contraseña"
            name="password"
            value={form.password}
            onChange={handleChange}
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
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.4 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={26} /> : "Ingresar"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
