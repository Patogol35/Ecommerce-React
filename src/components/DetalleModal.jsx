import {
  Box,
  Typography,
  Stack,
  IconButton,
  Chip,
  Dialog,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect, useMemo } from "react";
import detalleModalStyles from "./DetalleModal.styles";

export default function DetalleModal({
  producto,
  open,
  onClose,
  setLightbox,
}) {
  if (!producto) return null;

  // 🔥 Normalizar imágenes
  const imagenes = useMemo(() => {
    const base = [
      producto.imagen,
      ...(Array.isArray(producto.imagenes) ? producto.imagenes : []),
    ];

    return base
      .map((img) => (typeof img === "string" ? img : img?.imagen))
      .filter((url) => typeof url === "string" && url.length > 0);
  }, [producto]);

  const [imagenActiva, setImagenActiva] = useState(
    imagenes[0] || producto.imagen || ""
  );

  useEffect(() => {
    if (open) {
      setImagenActiva(imagenes[0] || producto.imagen || "");
    }
  }, [open, producto, imagenes]);

  const imagenSegura =
    imagenActiva || imagenes[0] || producto.imagen || "";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={detalleModalStyles.dialog}
      PaperProps={{
        sx: {
          ...detalleModalStyles.dialogPaper,

          // 🔥 FIX HORIZONTAL REAL
          maxHeight: "90vh",
          overflowY: "auto",

          "@media (orientation: landscape)": {
            maxHeight: "75vh", // más pequeño en horizontal
            marginTop: "5vh",
            marginBottom: "5vh",
          },
        },
      }}
    >
      <IconButton onClick={onClose} sx={detalleModalStyles.botonCerrar}>
        <CloseIcon />
      </IconButton>

      {/* 🔥 CONTENEDOR SCROLLABLE */}
      <Box
        sx={{
          width: "100%",
          overflowY: "auto",
          px: { xs: 1, md: 2 },
        }}
      >
        <Stack spacing={3} alignItems="center">
          {/* 🖼 Imagen principal */}
          {imagenSegura ? (
            <Box
              sx={{
                ...detalleModalStyles.sliderBox,
                height: { xs: 250, md: 350 }, // 🔥 control de altura responsive
              }}
              onClick={() => setLightbox && setLightbox(imagenSegura)}
            >
              <Box
                component="img"
                src={imagenSegura}
                alt={producto.nombre}
                loading="lazy"
                sx={detalleModalStyles.imagen}
              />
            </Box>
          ) : (
            <Typography>No hay imagen disponible</Typography>
          )}

          {/* 🔥 Miniaturas */}
          {imagenes.length > 1 && (
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center"
            >
              {imagenes.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  alt={`img-${i}`}
                  onClick={() => setImagenActiva(img)}
                  sx={{
                    width: 55,
                    height: 55,
                    objectFit: "cover",
                    borderRadius: 1,
                    cursor: "pointer",
                    border:
                      imagenSegura === img
                        ? "2px solid #1976d2"
                        : "1px solid #777",
                  }}
                />
              ))}
            </Stack>
          )}

          {/* 📝 Info */}
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
      </Box>
    </Dialog>
  );
    }
