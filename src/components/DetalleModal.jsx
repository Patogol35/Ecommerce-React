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

  const imagenes = getImagenesProducto(producto);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm" // 👈 más compacto
      fullWidth
      sx={detalleModalStyles.dialog}
      PaperProps={{ sx: detalleModalStyles.dialogPaper }}
    >
      <IconButton onClick={onClose} sx={detalleModalStyles.botonCerrar}>
        <CloseIcon />
      </IconButton>

      <Stack spacing={2}>

        {/* 🔥 IMAGEN / SLIDER LIMPIO */}
        <Box sx={detalleModalStyles.sliderContainer}>
          {imagenes.length > 1 ? (
            <Slider {...sliderSettings} key={producto.id}>
              {imagenes.map((img, i) => (
                <Box
                  key={i}
                  onClick={() => setLightbox(img)}
                  sx={detalleModalStyles.sliderBox}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={producto.nombre}
                    sx={detalleModalStyles.imagen}
                  />
                </Box>
              ))}
            </Slider>
          ) : (
            <Box
              onClick={() => setLightbox(imagenes[0])}
              sx={detalleModalStyles.sliderBox}
            >
              <Box
                component="img"
                src={imagenes[0]}
                alt={producto.nombre}
                sx={detalleModalStyles.imagen}
              />
            </Box>
          )}
        </Box>

        {/* 🔥 INFO (SIEMPRE VISIBLE) */}
        <Box sx={detalleModalStyles.infoBox}>
          <Typography variant="h6" fontWeight="bold">
            {producto.nombre}
          </Typography>

          <Chip
            label={producto.stock > 0 ? "En stock" : "Agotado"}
            color={producto.stock > 0 ? "success" : "error"}
            variant="outlined"
            sx={detalleModalStyles.stockChip}
          />

          <Typography sx={detalleModalStyles.descripcion}>
            {producto.descripcion}
          </Typography>
        </Box>
      </Stack>
    </Dialog>
  );
}
