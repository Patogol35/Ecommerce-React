import { useState, useMemo, useCallback } from "react";
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
import {
  Visibility,
  VisibilityOff,
  PersonOutline,
  EmailOutlined,
  LockOutlined,
} from "@mui/icons-material";
import registerStyles from "./Register.styles";

// ---------- HELPERS ----------
const getPasswordStrength = (pwd = "") => {
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

// ---------- VALIDADORES ----------
const validators = {
  username: (v) => {
    if (!v.trim()) return "El usuario es obligatorio";
    if (/\s/.test(v)) return "El usuario no puede contener espacios";
    return null;
  },

  email: (v) => {
    if (!v.trim()) return "El correo es obligatorio";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(v))
      return "El correo no es válido";
    return null;
  },

  password: (v) => {
  if (v.length < 6) return "La contraseña debe tener al menos 6 caracteres";
  if (!/[0-9]/.test(v)) return "La contraseña debe incluir al menos un número";
  if (!/[^A-Za-z0-9]/.test(v))
    return "La contraseña debe incluir al menos un símbolo";
  return null;
},

  confirm: (v, data) => {
    if (v !== data.password) return "Las contraseñas no coinciden";
    return null;
  },
};

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

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

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

  const strength = useMemo(
    () => getPasswordStrength(form.password),
    [form.password]
  );

  const handleSubmit = async (e) => {
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
      const resp = error?.response?.data;

      if (resp?.email) toast.error("El correo ya está registrado");
      else if (resp?.username) toast.error("El usuario ya existe");
      else toast.error("Ocurrió un error en el registro");
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (label, name, icon, type = "text") => (
    <TextField
      label={label}
      name={name}
      type={type}
      fullWidth
      margin="normal"
      value={form[name]}
      onChange={handleChange}
      required
      autoComplete="new-password"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
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
          align="center"
          color="text.secondary"
          sx={registerStyles.subtitulo}
        >
          Completa tus datos para registrarte
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          {renderInput("Usuario", "username", <PersonOutline color="action" />)}
          {renderInput(
            "Correo",
            "email",
            <EmailOutlined color="action" />,
            "email"
          )}
          {renderInput(
            "Contraseña",
            "password",
            <LockOutlined color="action" />,
            showPasswords ? "text" : "password"
          )}

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

          {renderInput(
            "Confirmar contraseña",
            "confirm",
            <LockOutlined color="action" />,
            showPasswords ? "text" : "password"
          )}

          <FormControlLabel
            sx={registerStyles.checkbox}
            control={
              <Checkbox
                checked={showPasswords}
                onChange={() => setShowPasswords((s) => !s)}
                icon={<Visibility />}
                checkedIcon={<VisibilityOff />}
              />
            }
            label="Mostrar contraseñas"
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
