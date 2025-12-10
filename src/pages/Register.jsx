import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

const Register = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      if (onClose) onClose();
      else navigate("/login");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" textAlign="center" mb={2}>
        Crear Cuenta
      </Typography>

      <TextField
        fullWidth
        label="Nombre de usuario"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Correo"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Contraseña"
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        sx={{ mb: 3 }}
      />

      <Button fullWidth variant="contained" type="submit">
        Registrarse
      </Button>
    </Box>
  );
};

export default Register;
