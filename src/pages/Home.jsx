import { useEffect, useState } from "react";
import { getProductos } from "../api/api";
import ProductoCard from "../components/ProductoCard";
import {
  Typography,
  Grid,
  Box,
  CircularProgress,
  Divider,
  TextField,
  Stack,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "react-toastify";

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Modal
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  // Lightbox
  const [lightbox, setLightbox] = useState(null);

  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    getProductos()
      .then(setProductos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search.toLowerCase());
    }, 400);
    return () => clearTimeout(handler);
  }, [search]);

  const filtered = productos
    .filter((p) =>
      debouncedSearch === ""
        ? true
        : p.nombre.toLowerCase().includes(debouncedSearch)
    )
    .sort((a, b) => (sort === "asc" ? a.precio - b.precio : b.precio - a.precio));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const handleAdd = async (prod) => {
    try {
      await agregarAlCarrito(prod.id, 1);
      toast.success(`${prod.nombre} agregado al carrito ✅`);
    } catch (e) {
      toast.error(e.message);
    }
  };

  if (loading)
    return (
      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <>
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            bgcolor: "#FFF9E6",
            color: "#8A6D3B",
            p: 2,
            borderRadius: 2,
            mb: 4,
            border: "1px solid #FFECB3",
            textAlign: "center",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
          ⚠️ Esta es una aplicación demostrativa. Los pedidos no son reales.
        </Box>
      </motion.div>

      {/* Encabezado */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          🛍️ Productos
        </Typography>
        <Divider
          sx={{
            width: 80,
            mx: "auto",
            borderBottomWidth: 3,
            borderColor: "primary.main",
            borderRadius: 2,
            mb: 3,
          }}
        />

        {/* Buscador y ordenamiento */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            placeholder="Buscar producto..."
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ width: { xs: "100%", sm: 250 } }}
          />

          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Ordenar por</InputLabel>
            <Select
              value={sort}
              label="Ordenar por"
              onChange={(e) => setSort(e.target.value)}
            >
              <MenuItem value="asc">Precio: menor a mayor</MenuItem>
              <MenuItem value="desc">Precio: mayor a menor</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>

      {/* Grid */}
      {filtered.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 8, color: "text.secondary" }}>
          <ShoppingCartIcon sx={{ fontSize: 60, mb: 2, opacity: 0.6 }} />
          <Typography variant="h6">No se encontraron productos.</Typography>
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {filtered.map((prod, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={prod.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <ProductoCard
                  producto={prod}
                  onVerDetalle={() => {
                    setSelected(prod);
                    setOpen(true);
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal Detalle */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          zIndex: 1600,
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(5px)",
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, md: 3 },
            p: 3,
            bgcolor: "#1e1e1e",
            color: "white",
            maxWidth: { md: 900 },
            width: "100%",
            position: "relative",
          },
        }}
      >
        {selected && (
          <Box>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                bgcolor: "rgba(0,0,0,0.6)",
                color: "white",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Grid container spacing={4}>
              {/* Slider imágenes */}
              <Grid item xs={12} md={6}>
                <Slider {...settings}>
                  {(selected.imagenes || [selected.imagen]).map((img, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: { xs: 300, md: 400 },
                        cursor: "zoom-in",
                      }}
                      onClick={() => setLightbox(img)}
                    >
                      <Box
                        component="img"
                        src={img}
                        alt={selected.nombre}
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                          borderRadius: 2,
                          border: "2px solid rgba(255,255,255,0.2)",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                          transition: "transform 0.3s ease",
                          "&:hover": { transform: "scale(1.02)" },
                        }}
                      />
                    </Box>
                  ))}
                </Slider>
              </Grid>

              {/* Info producto */}
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Typography variant="h5" fontWeight="bold">
                    {selected.nombre}
                  </Typography>

                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="primary"
                      sx={{ mb: 1 }}
                    >
                      ${selected.precio}
                    </Typography>
                    <Chip
                      label="En stock"
                      color="success"
                      variant="outlined"
                      sx={{ color: "white", borderColor: "white" }}
                    />
                  </Box>

                  <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />

                  <Typography sx={{ lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}>
                    {selected.descripcion}
                  </Typography>

                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => handleAdd(selected)}
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      background: "linear-gradient(135deg, #1976d2, #42a5f5)",
                      "&:hover": { transform: "translateY(-2px)" },
                    }}
                  >
                    Agregar al carrito
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        )}
      </Dialog>

      {/* Lightbox */}
      <Dialog
        open={!!lightbox}
        onClose={() => setLightbox(null)}
        fullScreen
        sx={{ zIndex: 1600 }}
        PaperProps={{
          sx: {
            bgcolor: "rgba(0,0,0,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <IconButton
          onClick={() => setLightbox(null)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src={lightbox}
          alt="Zoom"
          sx={{
            maxWidth: "95%",
            maxHeight: "95%",
            objectFit: "contain",
          }}
        />
      </Dialog>
    </>
  );
}
