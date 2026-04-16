import {
  Box,
  Typography,
  Stack,
  IconButton,
  Chip,
  Dialog,
} from "@mui/material";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import detalleModalStyles, { sliderSettings } from "./DetalleModal.styles";
import { getImagenesProducto } from "../utils/getImagenesProducto";

export default function DetalleModal({ producto, open, onClose, setLightbox }) {
  if (!producto) return null;

  // 🔥 1. Imágenes del helper (front + principal)
  const imagenesHelper = getImagenesProducto(producto);

  // 🔥 2. Imágenes de la base
  const imagenesBD = Array.isArray(producto.imagenes)
    ? producto.imagenes.filter(Boolean)
    : [];

  // 🔥 3. Unificamos TODO (sin duplicados y sin null)
  const imagenes = [
    ...imagenesBD,
    ...imagenesHelper,
  ].filter(Boolean);

  // 🛡 fallback final
  const imagenesFinal =
    imagenes.length > 0
      ? imagenes
      : ["https://via.placeholder.com/400x300?text=Sin+imagen"];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={detalleModalStyles.dialog}
      PaperProps={{ sx: detalleModalStyles.dialogPaper }}
    >
      {/* ❌ cerrar */}
      <IconButton onClick={onClose} sx={detalleModalStyles.botonCerrar}>
        <CloseIcon />
      </IconButton>

      <Stack spacing={3} alignItems="center">
        {/* 🔥 SLIDER */}
        {imagenesFinal.length > 1 ? (
          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
              ...detalleModalStyles.sliderGlobal,
              ...detalleModalStyles.dots,
            }}
          >
            <Slider {...sliderSettings}>
              {imagenesFinal.map((img, i) => (
                <Box
                  key={i}
                  sx={detalleModalStyles.sliderBox}
                  onClick={() => setLightbox?.(img)}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`${producto.nombre}-${i}`}
                    loading="lazy"
                    sx={detalleModalStyles.imagen}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Sin+imagen";
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        ) : (
          <Box
            sx={detalleModalStyles.sliderBox}
            onClick={() => setLightbox?.(imagenesFinal[0])}
          >
            <Box
              component="img"
              src={imagenesFinal[0]}
              alt={producto.nombre}
              loading="lazy"
              sx={detalleModalStyles.imagen}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x300?text=Sin+imagen";
              }}
            />
          </Box>
        )}

        {/* 📦 INFO */}
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
            {producto.descripcion || "Sin descripción disponible"}
          </Typography>
        </Box>
      </Stack>
    </Dialog>
  );
}
