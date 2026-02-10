import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
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
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import "./ProductoCard.css";

export default function ProductoCard({ producto, onVerDetalle, onAgregar }) {
  const { isAuthenticated } = useAuth();
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();
  const theme = useTheme();

  /* 🔥 CONECTA MODO CLARO / OSCURO CON CSS */
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--product-card-border",
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.9)"
        : "rgba(0,0,0,0.9)"
    );
  }, [theme.palette.mode]);

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
    <Card
      className="product-card"
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      {/* Imagen */}
      <Box className="product-image-container">
        <img src={producto.imagen} alt={producto.nombre} />

        {producto.nuevo && (
          <Chip
            icon={<StarIcon />}
            label="Nuevo"
            color="secondary"
            size="small"
            sx={{ position: "absolute", top: 10, left: 10 }}
          />
        )}
      </Box>

      {/* Contenido */}
      <Box className="product-info">
        <Typography className="product-title">
          {producto.nombre}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <MonetizationOnIcon color="primary" />
          <Typography className="product-price">
            {producto.precio}
          </Typography>
        </Stack>

        <Divider sx={{ my: 1 }} />

        <Stack spacing={1}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
            onClick={onAdd}
            disabled={producto.stock === 0}
          >
            {producto.stock > 0 ? "Agregar al carrito" : "Agotado"}
          </Button>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<InfoIcon />}
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
