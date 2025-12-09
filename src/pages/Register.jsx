// src/components/Register.jsx
import { useState, useCallback, useMemo } from "react";
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutline from "@mui/icons-material/PersonOutline";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import registerStyles from "./Register.styles";

export default function Register() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  // Handler genérico para inputs
  const handleChange = useCallback((field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Validaciones separadas
  const isEmailValid = useCallback((email) => {
    // regex simple y segura para la mayoría de casos. Evita /^...$/ muy restrictivos.
    return /\S+@\S+\.\S+/.test(email);
  }, []);

  const validateForm = useCallback(() => {
    if (!form.username.trim()) {
      toast.error("El usuario es obligatorio");
      return false;
    }
    if (!form.email.trim()) {
      toast.error("El correo es obligatorio");
      return false;
    }
    if (!isEmailValid(form.email)) {
      toast.error("El correo no es válido");
      return false;
    }
    if (form.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    if (form.password !== form.confirm) {
      toast.error("Las contraseñas no coinciden");
      return false;
    }
    return true;
  }, [form, isEmailValid]);

  // Fuerza de contraseña (pure function)
  const passwordStrength = useCallback((pwd = "") => {
    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 10) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 2) return { label: "Débil", color: "red", value: 40 };
    if (score === 3) return { label: "Media", color: "orange", value: 60 };
    if (score === 4) return { label: "Fuerte", color: "green", value: 80 };
    return { label: "Muy fuerte", color: "darkgreen", value: 100 };
  }, []);

  // Memoiza la fuerza para no recalcular innecesariamente
  const strength = useMemo(() => passwordStrength(form.password), [form.password, passwordStrength]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      setLoading(true);
      try {
        await apiRegister({
          username: form.username.trim(),
          email: form.email.toLowerCase().trim(),
          password: form.password,
        });

        toast.success("Usuario registrado correctamente");
        navigate("/login");
      } catch (error) {
        // Manejo más robusto de errores (backend puede enviar distintas estructuras)
        const resp = error?.response?.data;
        if (resp?.email || (resp?.detail && /email/i.test(String(resp.detail)))) {
          toast.error("El correo ya está registrado");
        } else if (resp?.username) {
          toast.error("El usuario ya existe");
        } else {
          toast.error("Ocurrió un error en el registro");
          // opcional: console.error(error);
        }
      } finally {
        setLoading(false);
      }
    },
    [form, navigate, validateForm]
  );

  return (
    <Container maxWidth="xs" sx={registerStyles.container(theme)}>
      <Paper elevation={8} sx={registerStyles.paper(theme)}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={registerStyles.titulo(theme)}>
          Crear cuenta
        </Typography>

        <Typography variant="body1" align="center" color="text.secondary" sx={registerStyles.subtitulo}>
          Completa tus datos para registrarte
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Usuario"
            name="username"
            fullWidth
            margin="normal"
            value={form.username}
            onChange={handleChange("username")}
            required
            InputProps={{ startAdornment: <InputAdornment position="start"><PersonOutline color="action" /></InputAdornment> }}
          />

          <TextField
            label="Correo"
            name="email"
            type="email"
            required
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange("email")}
            InputProps={{ startAdornment: <InputAdornment position="start"><EmailOutlined color="action" /></InputAdornment> }}
          />

          <TextField
            label="Contraseña"
            name="password"
            type={showPasswords ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange("password")}
            required
            InputProps={{ startAdornment: <InputAdornment position="start"><LockOutlined color="action" /></InputAdornment> }}
            autoComplete="new-password"
          />

          {form.password && (
            <Box sx={registerStyles.strengthBox}>
              <LinearProgress variant="determinate" value={strength.value} sx={registerStyles.strengthBar(theme, strength.color)} />
              <Typography variant="caption" sx={registerStyles.strengthLabel(strength.color)}>
                {strength.label}
              </Typography>
            </Box>
          )}

          <TextField
            label="Confirmar contraseña"
            name="confirm"
            type={showPasswords ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.confirm}
            onChange={handleChange("confirm")}
            required
            InputProps={{ startAdornment: <InputAdornment position="start"><LockOutlined color="action" /></InputAdornment> }}
            autoComplete="new-password"
          />

          <FormControlLabel
            control={<Checkbox checked={showPasswords} onChange={() => setShowPasswords((s) => !s)} icon={<VisibilityOff />} checkedIcon={<Visibility />} />}
            label="Mostrar contraseñas"
            sx={registerStyles.checkbox}
          />

          <Box mt={3}>
            <Button type="submit" variant="contained" fullWidth disabled={loading} sx={registerStyles.boton(theme)}>
              {loading ? "Creando cuenta..." : "Registrarse"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
          }
