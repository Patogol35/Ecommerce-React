import {
  Box,
  Typography,
  Stack,
  IconButton,
  Chip,
  Dialog,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import detalleModalStyles from "./DetalleModal.styles";

export default function DetalleModal({ producto, open, onClose, setLightbox }) {
  const [imagenActiva, setImagenActiva] = useState(null);

  if (!producto) return null;

  // 🔥 Unificar imágenes (string + objeto)
  const imagenes = [
    producto.imagen,
    ...(producto.imagenes || []),
  ]
    .map((img) => (typeof img === "string" ? img : img?.imagen))
    .filter(Boolean);

  // 🔥 Reset imagen al abrir modal
  useEffect(() => {
    if (open && imagenes.length > 0) {
      setImagenActiva(imagenes[0]);
    }
  }, [open, producto]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={detalleModalStyles.dialog}
      PaperProps={{
        sx: {
          ...detalleModalStyles.dialogPaper,
          overflow: "visible",
        },
      }}
    >
      <IconButton onClick={onClose} sx={detalleModalStyles.botonCerrar}>
        <CloseIcon />
      </IconButton>

      <Stack spacing={3} alignItems="center">
        {/* 🔥 Imagen principal */}
        <Box
          sx={detalleModalStyles.sliderBox}
          onClick={() => setLightbox(imagenActiva)}
        >
          <Box
            component="img"
            src={imagenActiva}
            alt={producto.nombre}
            loading="lazy"
            sx={detalleModalStyles.imagen}
          />
        </Box>

        {/* 🔥 Miniaturas (igual que tu card) */}
        {imagenes.length > 1 && (
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
            {imagenes.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                alt={`img-${i}`}
                onClick={() => setImagenActiva(img)}
                sx={{
                  width: 60,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: 1,
                  cursor: "pointer",
                  border:
                    imagenActiva === img
                      ? "2px solid #1976d2"
                      : "1px solid #777",
                  transition: "all 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            ))}
          </Stack>
        )}

        {/* Info */}
        <Box sx={{ textAlign: "center", maxWidth: 700 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {producto.nombre}
          </Typography>

          <Chip
            label={producto.stock > 0 ? "En stock" : "Agotado"}
            color={producto.stock > 0 ? "success" : "error"}
            variant="outlined"
            sx={{ ...detalleModalStyles.stockChip, mb: 2 }}
          />

          <Typography sx={detalleModalStyles.descripcion}>
            {producto.descripcion}
          </Typography>
        </Box>
      </Stack>
    </Dialog>
  );
}
