import {
  Dialog,
  DialogContent,
  Typography,
  Divider,
  IconButton,
  Chip,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import detalleModalStyles, { sliderSettings } from "../styles/detalleModalStyles";

const DetalleModal = ({ open, onClose, producto }) => {
  if (!producto) return null;

  const { nombre, descripcion, imagenes, stock, precio } = producto;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={detalleModalStyles.dialog}
      PaperProps={{ sx: detalleModalStyles.dialogPaper }}
    >
      {/* Botón Cerrar */}
      <IconButton onClick={onClose} sx={detalleModalStyles.botonCerrar}>
        <CloseIcon />
      </IconButton>

      {/* Imagen Izquierda */}
      <Box sx={detalleModalStyles.sliderBox}>
        <Slider {...sliderSettings}>
          {imagenes?.map((img, index) => (
            <Box key={index}>
              <img src={img} alt={nombre} style={detalleModalStyles.imagen} />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Contenido Derecho */}
      <Box sx={detalleModalStyles.contenidoBox}>
        <Typography variant="h5" fontWeight="bold">
          {nombre}
        </Typography>

        <Chip
          label={stock > 0 ? "Disponible" : "Sin stock"}
          variant="outlined"
          sx={detalleModalStyles.stockChip}
        />

        <Divider sx={detalleModalStyles.divider} />

        <Typography sx={detalleModalStyles.descripcion}>
          {descripcion}
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>
          ${precio}
        </Typography>

        <Button sx={detalleModalStyles.botonAgregar(stock)}>
          {stock > 0 ? "Agregar al carrito" : "Agotado"}
        </Button>
      </Box>
    </Dialog>
  );
};

export default DetalleModal;
