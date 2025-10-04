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
  Card,
  CardContent,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import detalleModalStyles from "./DetalleModal.styles";

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
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: detalleModalStyles.dialogPaper }}
    >
      <IconButton onClick={onClose} sx={detalleModalStyles.botonCerrar}>
        <CloseIcon />
      </IconButton>

      <Grid container>
        {/* Galería */}
        <Grid item xs={12} md={6} sx={detalleModalStyles.galeriaContainer}>
          {imagenes.length > 1 && (
            <Stack direction={{ xs: "row", md: "column" }} spacing={1} sx={detalleModalStyles.miniaturasStack}>
              {imagenes.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setLightbox(img)}
                  sx={detalleModalStyles.miniatura}
                />
              ))}
            </Stack>
          )}

          <Box
            component={motion.img}
            src={imagenes[0]}
            alt={producto.nombre}
            onClick={() => setLightbox(imagenes[0])}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            sx={detalleModalStyles.imagenPrincipal}
          />
        </Grid>

        {/* Información */}
        <Grid item xs={12} md={6}>
          <Card sx={detalleModalStyles.card}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h5" fontWeight="bold">
                  {producto.nombre}
                </Typography>

                <Typography
                  variant="h6"
                  color="primary.light"
                  fontWeight="bold"
                >
                  ${producto.precio}
                </Typography>

                <Chip
                  label={producto.stock > 0 ? "En stock" : "Agotado"}
                  color={producto.stock > 0 ? "success" : "error"}
                  variant="outlined"
                  sx={detalleModalStyles.stockChip}
                />

                <Divider sx={detalleModalStyles.divider} />

                <Typography sx={detalleModalStyles.descripcion}>
                  {producto.descripcion}
                </Typography>
              </Stack>
            </CardContent>

            <Box sx={detalleModalStyles.botonBox}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => onAdd(producto)}
                disabled={producto.stock === 0}
                sx={detalleModalStyles.botonAgregar(producto.stock)}
              >
                {producto.stock > 0 ? "Agregar al carrito" : "Agotado"}
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Dialog>
  );
}
