import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "react-toastify";
import {
Card,
Typography,
Button,
Chip,
Box,
Divider,
Stack,
MenuItem,
Select,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import {
cardSx,
imagenBoxSx,
imagenSx,
chipNuevoSx,
contenidoSx,
tituloSx,
precioStackSx,
dividerSx,
botonAgregarSx,
botonDetallesSx,
} from "./ProductoCard.styles";

export default function ProductoCard({ producto, onVerDetalle }) {
const { isAuthenticated } = useAuth();
const { agregarAlCarrito } = useCarrito();
const navigate = useNavigate();

const [imagenActiva, setImagenActiva] = useState(producto.imagen);
const [varianteSeleccionada, setVarianteSeleccionada] = useState(
producto.variantes?.[0]?.id || null
);

// 🔥 Obtener variante actual
const varianteActual = useMemo(
() =>
producto.variantes?.find((v) => v.id === Number(varianteSeleccionada)),
[producto, varianteSeleccionada]
);

// 🔥 Precio dinámico
const precio = varianteActual?.precio || 0;
const stock = varianteActual?.stock ?? 0;

const imagenes = [
producto.imagen,
...(producto.imagenes?.map((img) => img.imagen) || []),
].filter(Boolean);

const onAdd = async () => {
if (!isAuthenticated) {
toast.warn("Debes iniciar sesión para agregar productos");
navigate("/login");
return;
}

if (!varianteSeleccionada) {
  toast.error("Selecciona una variante");
  return;
}

try {
  await agregarAlCarrito(varianteSeleccionada, 1);
  toast.success(`${producto.nombre} agregado al carrito ✅`);
} catch (e) {
  toast.error(e.message);
}

};

return (
<Card sx={cardSx} elevation={0}>
{/* Imagen */}
<Box sx={imagenBoxSx}>
<Box component="img" src={imagenActiva} alt={producto.nombre} sx={imagenSx} />

    {producto.nuevo && (
      <Chip
        icon={<StarIcon />}
        label="Nuevo"
        color="secondary"
        size="small"
        sx={chipNuevoSx}
      />
    )}
  </Box>

  {/* Mini imágenes */}
  {imagenes.length > 1 && (
    <Stack direction="row" spacing={1} sx={{ px: 1, mt: 1, justifyContent: "center" }}>
      {imagenes.map((img, i) => (
        <Box
          key={i}
          component="img"
          src={img}
          onClick={() => setImagenActiva(img)}
          sx={{
            width: 45,
            height: 45,
            objectFit: "cover",
            borderRadius: 1,
            cursor: "pointer",
            border: imagenActiva === img ? "2px solid #1976d2" : "1px solid #999",
          }}
        />
      ))}
    </Stack>
  )}

  {/* Contenido */}
  <Box sx={contenidoSx}>
    <Typography variant="h6" fontWeight="bold" sx={tituloSx}>
      {producto.nombre}
    </Typography>

    {/* 🔥 SELECTOR DE VARIANTES */}
    {producto.variantes?.length > 0 && (
      <Select
        fullWidth
        size="small"
        value={varianteSeleccionada || ""}
        onChange={(e) => setVarianteSeleccionada(e.target.value)}
        sx={{ mb: 1 }}
      >
        {producto.variantes.map((v) => (
          <MenuItem key={v.id} value={v.id}>
            {v.nombre} - ${v.precio}
          </MenuItem>
        ))}
      </Select>
    )}

    {/* Precio */}
    <Stack direction="row" alignItems="center" spacing={0.5} sx={precioStackSx}>
      <MonetizationOnIcon color="primary" />
      <Typography variant="h6" color="primary" fontWeight="bold">
        ${precio}
      </Typography>
    </Stack>

    <Divider sx={dividerSx} />

    {/* Botones */}
    <Stack spacing={1}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<AddShoppingCartIcon />}
        sx={botonAgregarSx(stock)}
        onClick={onAdd}
        disabled={stock === 0}
      >
        {stock > 0 ? "Agregar al carrito" : "Agotado"}
      </Button>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<InfoIcon />}
        sx={botonDetallesSx}
        onClick={() =>
          onVerDetalle
            ? onVerDetalle()
            : navigate(`/producto/${producto.id}`, {
                state: { producto },
              })
        }
      >
        Ver detalles
      </Button>
    </Stack>
  </Box>
</Card>

);
    }
