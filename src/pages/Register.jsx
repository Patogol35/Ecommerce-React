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

  const handleChange = useCallback((field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }, []);

  const isEmailValid = useCallback((email) => {
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

  const strength = useMemo(
    () => passwordStrength(form.password),
    [form.password, passwordStrength]
  );

  // SUBMIT
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      setLoading(true);

      try {
        const response = await apiRegister({
          username: form.username.trim(),
          email: form.email.toLowerCase().trim(),
          password: form.password,
        });

        toast.success("Usuario registrado correctamente");
        navigate("/login");

      } catch (error) {
        console.log("ERROR REGISTRO →", error);

        // fetch envía los errores como error.message
        if (error.message) {
          toast.error(error.message);
          return;
        }

        toast.error("Ocurrió un error en el registro");
      } finally {
        setLoading(false);
      }
    },
    [form, navigate, validateForm]
  );

  return (
    <Container maxWidth="xs" sx={registerStyles.container(theme)}>
      <Paper elevation={8} sx={registerStyles.paper(theme)}>
        
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={registerStyles.titulo(theme)}
        >
          Crear cuenta
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={registerStyles.subtitulo}
        >
          Completa tus datos para registrarte
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Usuario"
            fullWidth
            margin="normal"
            value={form.username}
            onChange={handleChange("username")}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline color="action" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Correo"
            type="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange("email")}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined color="action" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Contraseña"
            type={showPasswords ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange("password")}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="action" />
                </InputAdornment>
              ),
            }}
            autoComplete="new-password"
          />

          {form.password && (
            <Box sx={registerStyles.strengthBox}>
              <LinearProgress
                variant="determinate"
                value={strength.value}
                sx={registerStyles.strengthBar(theme, strength.color)}
              />
              <Typography variant="caption" sx={registerStyles.strengthLabel(strength.color)}>
                {strength.label}
              </Typography>
            </Box>
          )}

          <TextField
            label="Confirmar contraseña"
            type={showPasswords ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.confirm}
            onChange={handleChange("confirm")}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="action" />
                </InputAdornment>
              ),
            }}
            autoComplete="new-password"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={showPasswords}
                onChange={() => setShowPasswords((prev) => !prev)}
                icon={<VisibilityOff />}
                checkedIcon={<Visibility />}
              />
            }
            label="Mostrar contraseñas"
            sx={registerStyles.checkbox}
          />

          <Box mt={3}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={registerStyles.boton(theme)}
            >
              {loading ? "Creando cuenta..." : "Registrarse"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
