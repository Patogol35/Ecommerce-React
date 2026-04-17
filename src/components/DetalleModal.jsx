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

export default function DetalleModal({ producto, open, onClose, setLightbox }) {
  if (!producto) return null;

  // 🔥 BASE URL (ajusta si usas otro dominio)
  const BASE_URL = "http://127.0.0.1:8000";

  // 🔥 NORMALIZAR IMÁGENES
  const imagenes = [
    producto.imagen,
    ...(producto.imagenes?.map((img) =>
      typeof img === "string"
        ? img
        : img.imagen?.startsWith("http")
        ? img.imagen
        : BASE_URL + img.imagen
    ) || []),
  ].filter(Boolean);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={detalleModalStyles.dialog}
      PaperProps={{ sx: detalleModalStyles.dialogPaper }}
    >
      <IconButton onClick={onClose} sx={detalleModalStyles.botonCerrar}>
        <CloseIcon />
      </IconButton>

      <Stack spacing={3} alignItems="center">
        {/* Slider */}
        {imagenes.length > 1 ? (
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            <Slider {...sliderSettings}>
              {imagenes.map((img, i) => (
                <Box
                  key={i}
                  sx={detalleModalStyles.sliderBox}
                  onClick={() => setLightbox && setLightbox(img)}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={producto.nombre}
                    loading="lazy"
                    sx={detalleModalStyles.imagen}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        ) : (
          <Box
            sx={detalleModalStyles.sliderBox}
            onClick={() => setLightbox && setLightbox(imagenes[0])}
          >
            <Box
              component="img"
              src={imagenes[0]}
              alt={producto.nombre}
              loading="lazy"
              sx={detalleModalStyles.imagen}
            />
          </Box>
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
