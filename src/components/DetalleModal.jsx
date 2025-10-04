import {
  Box,
  Typography,
  Grid,
  Stack,
  Divider,
  Chip,
  Button,
  IconButton,
  Dialog,
} from "@mui/material";
import Slider from "react-slick";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import detalleModalStyles, { sliderSettings } from "./DetalleModal.styles";

export default function DetalleModal({
  producto,
  open,
  onClose,
  onAdd,
  setLightbox,
}) {
  if (!producto) return null;

  const imagenes = producto.imagenes?.length
    ? producto.imagenes
    : [producto.imagen];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      sx={detalleModalStyles.dialog}
      PaperProps={{ sx: detalleModalStyles.dialogPaper }}
    >
      {/* Botón de cierre */}
      <IconButton onClick={onClose} sx={detalleModalStyles.botonCerrar}>
        <CloseIcon />
      </IconButton>

      <Grid container spacing={4}>
        {/* Slider de imágenes */}
        <Grid item xs={12} md={6}>
          {(imagenes || [producto.imagen]).length > 1 ? (
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
          ) : (
            <Box
              sx={detalleModalStyles.sliderBox}
              onClick={() => setLightbox(producto.imagen)}
            >
              <Box
                component="img"
                src={producto.imagen}
                alt={producto.nombre}
                loading="lazy"
                sx={detalleModalStyles.imagen}
              />
            </Box>
          )}
        </Grid>

        {/* Información */}
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography variant="h5" fontWeight="bold">
              {producto.nombre}
            </Typography>

            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="primary"
                sx={{ mb: 1 }}
              >
                ${producto.precio}
              </Typography>

              <Chip
                label={producto.stock > 0 ? "En stock" : "Agotado"}
                color={producto.stock > 0 ? "success" : "error"}
                variant="outlined"
                sx={detalleModalStyles.stockChip}
              />
            </Box>

            <Divider sx={detalleModalStyles.divider} />

            <Typography sx={detalleModalStyles.descripcion}>
              {producto.descripcion}
            </Typography>

            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              onClick={() => onAdd(producto)}
              disabled={producto.stock === 0}
              sx={detalleModalStyles.botonAgregar(producto.stock)}
            >
              {producto.stock > 0 ? "Agregar al carrito" : "Agotado"}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Dialog>
  );
}
