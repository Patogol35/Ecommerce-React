import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "react-toastify";
import { useState } from "react";

import {
  Card,
  Typography,
  Button,
  Chip,
  Box,
  Divider,
  Stack,
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

export default function ProductoCard({ producto, onVerDetalle, onAgregar }) {
  const { isAuthenticated } = useAuth();
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  // 🔥 IMAGEN ACTIVA
  const [imagenActiva, setImagenActiva] = useState(
    producto.imagenes?.length > 0
      ? producto.imagenes[0].imagen
      : producto.imagen
  );

  const onAdd = async () => {
    if (!isAuthenticated) {
      toast.warn("Debes iniciar sesión para agregar productos");
      navigate("/login");
      return;
    }

    if (onAgregar) {
      onAgregar(producto);
      return;
    }

    try {
      await agregarAlCarrito(producto.id, 1);
      toast.success(`${producto.nombre} agregado al carrito ✅`);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <Card sx={cardSx} elevation={0}>
      {/* 🔥 GALERÍA */}
      <Box sx={imagenBoxSx}>
        {/* Imagen principal */}
        <Box
          component="img"
          src={imagenActiva}
          alt={producto.nombre}
          sx={imagenSx}
        />

        {/* Miniaturas */}
        <Box
          sx={{
            position: "absolute",
            bottom: 5,
            display: "flex",
            gap: 1,
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Imagen principal */}
          <Box
            component="img"
            src={producto.imagen}
            onClick={() => setImagenActiva(producto.imagen)}
            sx={{
              width: 40,
              height: 40,
              objectFit: "cover",
              borderRadius: 1,
              cursor: "pointer",
              border: imagenActiva === producto.imagen ? "2px solid #1976d2" : "1px solid #ccc",
            }}
          />

          {/* Imágenes extra */}
          {producto.imagenes?.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img.imagen}
              onClick={() => setImagenActiva(img.imagen)}
              sx={{
                width: 40,
                height: 40,
                objectFit: "cover",
                borderRadius: 1,
                cursor: "pointer",
                border:
                  imagenActiva === img.imagen
                    ? "2px solid #1976d2"
                    : "1px solid #ccc",
              }}
            />
          ))}
        </Box>

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

      {/* CONTENIDO */}
      <Box sx={contenidoSx}>
        <Typography variant="h6" fontWeight="bold" sx={tituloSx}>
          {producto.nombre}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.5} sx={precioStackSx}>
          <MonetizationOnIcon color="primary" />
          <Typography variant="h6" color="primary" fontWeight="bold">
            {producto.precio}
          </Typography>
        </Stack>

        <Divider sx={dividerSx} />

        <Stack spacing={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
            sx={botonAgregarSx(producto.stock)}
            onClick={onAdd}
            disabled={producto.stock === 0}
          >
            {producto.stock > 0 ? "Agregar al carrito" : "Agotado"}
          </Button>

          <Button
            variant="outlined"
            color="inherit"
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
