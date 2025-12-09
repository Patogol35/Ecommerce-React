import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiRegister } from "../api/api"; // Ajusta la ruta según tu proyecto
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const data = await apiRegister({
        username: form.username,
        email: form.email.toLowerCase().trim(), // normaliza email
        password: form.password,
      });

      toast.success("Usuario registrado correctamente");
      navigate("/login");

    } catch (error) {
      // Backend devuelve: {"email": ["user with this email already exists."]}
      if (error.response?.data?.email) {
        toast.error("El correo ya está registrado");
      } else {
        toast.error("Ocurrió un error en el registro");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: 4, marginTop: 6 }}>
        <Typography variant="h5" textAlign="center" marginBottom={2}>
          Crear Cuenta
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
            label="Correo electrónico"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            margin="normal"
            required
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
            disabled={loading}
          >
            Registrarse
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
