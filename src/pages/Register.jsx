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

  const passwordStrength = (pwd) => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username.trim()) return toast.error("El usuario es obligatorio");

    if (!form.email.trim())
      return toast.error("El correo es obligatorio");

    if (!/\S+@\S+.\S+/.test(form.email))
      return toast.error("El correo no es válido");

    if (form.password.length < 6)
      return toast.error("La contraseña debe tener al menos 6 caracteres");

    if (form.password !== form.confirm)
      return toast.error("Las contraseñas no coinciden");

    setLoading(true);

    try {
      const data = await apiRegister({
        username: form.username,
        email: form.email.toLowerCase().trim(), // ← normalización
        password: form.password,
      });

      toast.success("Usuario registrado correctamente");
      navigate("/login");

    } catch (error) {
      // ← Aquí se captura email duplicado correctamente
      if (error.response?.data?.email) {
        toast.error("El correo ya está registrado");
      } else {
        toast.error("Ocurrió un error en el registro");
      }

    } finally {
      setLoading(false);
    }
  };

  const strength = passwordStrength(form.password);

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

        <form onSubmit={handleSubmit}>
          {/* Usuario */}
          <TextField
            label="Usuario"
            fullWidth
            margin="normal"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Correo */}
          <TextField
            label="Correo"
            required
            type="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Contraseña */}
          <TextField
            label="Contraseña"
            type={showPasswords ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Barra de fuerza */}
          {form.password && (
            <Box sx={registerStyles.strengthBox}>
              <LinearProgress
                variant="determinate"
                value={strength.value}
                sx={registerStyles.strengthBar(theme, strength.color)}
              />
              <Typography
                variant="caption"
                sx={registerStyles.strengthLabel(strength.color)}
              >
                {strength.label}
              </Typography>
            </Box>
          )}

          {/* Confirmar contraseña */}
          <TextField
            label="Confirmar contraseña"
            type={showPasswords ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Mostrar/Ocultar */}
          <FormControlLabel
            control={
              <Checkbox
                checked={showPasswords}
                onChange={() => setShowPasswords(!showPasswords)}
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
