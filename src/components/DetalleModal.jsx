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

  // 🔥 CLAVE: incluir imagen principal + adicionales
  const imagenes = [
    producto.imagen,
    ...(producto.imagenes?.map((img) => img.imagen) || []),
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
        {/* Imagen o slider */}
        {imagenes.length > 1 ? (
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            <Slider {...sliderSettings}>
              {imagenes.map((img, i) => (
                <Box
                  key={i}
                  sx={detalleModalStyles.sliderBox}
                  onClick={() => setLightbox(img)}
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
            onClick={() => setLightbox(imagenes[0])}
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

        {/* Descripción + chip */}
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
