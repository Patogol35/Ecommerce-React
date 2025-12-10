import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Visibility, VisibilityOff, Person, Lock } from "@mui/icons-material";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #2196F3, #1976D2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",              // 🔹 MENOS ESPACIO EXTERNO
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 420,
          padding: "24px",            // 🔹 MÁS COMPACTO
          borderRadius: "28px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: 700, mb: 1 }}
        >
          Bienvenido
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            mb: 3,
            color: "text.secondary",
          }}
        >
          Ingresa tus credenciales para continuar
        </Typography>

        {/* Usuario */}
        <TextField
          label="Usuario *"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        {/* Contraseña */}
        <TextField
          label="Contraseña *"
          fullWidth
          margin="normal"
          type={showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Botón login */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.4,
            borderRadius: "24px",
          }}
        >
          INICIAR SESIÓN
        </Button>

        {/* Botón registro */}
        <Button
          variant="outlined"
          fullWidth
          sx={{
            mt: 2,
            py: 1.4,
            borderRadius: "24px",
          }}
        >
          REGISTRARSE
        </Button>
      </Paper>
    </Box>
  );
            }
