import { useState } from "react";
import { register as apiRegister } from "../api/api";
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
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Register() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});

  // --------------------------
  // VALIDACIONES
  // --------------------------
  const validators = {
    username: (v) => {
      if (!v.trim()) return "El nombre de usuario es obligatorio";
      if (v.length < 3)
        return "El nombre de usuario debe tener al menos 3 caracteres";
      return null;
    },

    email: (v) => {
      if (!v.trim()) return "El correo es obligatorio";
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(v)) return "Ingresa un correo válido";
      return null;
    },

    password: (v) => {
      const pwd = v.trim(); // *** SOLUCIÓN DEL PROBLEMA ***

      if (pwd.length < 6)
        return "La contraseña debe tener al menos 6 caracteres";

      if (!/[0-9]/.test(pwd))
        return "La contraseña debe incluir al menos un número";

      if (!/[^A-Za-z0-9]/.test(pwd))
        return "La contraseña debe incluir al menos un símbolo";

      return null;
    },

    acceptTerms: (v) =>
      v ? null : "Debes aceptar los términos y condiciones",
  };

  // --------------------------
  // MANEJAR CAMBIOS DEL FORM
  // --------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Validar campo inmediato
    setErrors((prev) => ({
      ...prev,
      [name]: validators[name](type === "checkbox" ? checked : value),
    }));
  };

  // --------------------------
  // ENVIAR FORMULARIO
  // --------------------------
  const handleSubmit = async () => {
    const newErrors = {};

    // Validar todo antes de enviar
    Object.keys(form).forEach((key) => {
      const err = validators[key](form[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await apiRegister({
        username: form.username,
        email: form.email,
        password: form.password.trim(),
      });

      toast.success("Registro exitoso 🎉");
      navigate("/login");
    } catch (err) {
      // MENSAJES REALES DEL BACKEND
      if (err.response?.data) {
        const data = err.response.data;

        if (data.username) toast.error(data.username[0]);
        else if (data.email) toast.error(data.email[0]);
        else if (data.password) toast.error(data.password[0]);
        else toast.error("Ocurrió un error en el registro");
      } else {
        toast.error("Error de conexión");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ padding: 4, marginTop: 4, borderRadius: 3 }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Crear cuenta
        </Typography>

        {/* USERNAME */}
        <TextField
          label="Nombre de usuario"
          name="username"
          fullWidth
          value={form.username}
          onChange={handleChange}
          error={Boolean(errors.username)}
          helperText={errors.username}
          sx={{ mb: 2 }}
        />

        {/* EMAIL */}
        <TextField
          label="Correo electrónico"
          name="email"
          fullWidth
          value={form.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />

        {/* PASSWORD */}
        <TextField
          label="Contraseña"
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          value={form.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {showPassword ? (
                  <VisibilityOff
                    sx={{ cursor: "pointer" }}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Visibility
                    sx={{ cursor: "pointer" }}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </InputAdornment>
            ),
          }}
        />

        {/* TERMS */}
        <FormControlLabel
          control={
            <Checkbox
              name="acceptTerms"
              checked={form.acceptTerms}
              onChange={handleChange}
            />
          }
          label="Acepto los términos y condiciones"
        />

        {errors.acceptTerms && (
          <Typography color="error" sx={{ mb: 1 }}>
            {errors.acceptTerms}
          </Typography>
        )}

        {/* LOADING */}
        {loading && <LinearProgress sx={{ mb: 2 }} />}

        {/* BUTTON */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          disabled={loading}
        >
          Registrarme
        </Button>
      </Paper>
    </Container>
  );
          }
