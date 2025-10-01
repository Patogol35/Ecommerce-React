import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  Grid,
  Pagination,
  IconButton,
  CircularProgress,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SortIcon from "@mui/icons-material/Sort";
import CategoryIcon from "@mui/icons-material/Category";

import ProductoCard from "../components/ProductoCard";
import { useProductos } from "../hooks/useProductos";
import { useCategorias } from "../hooks/useCategorias";
import { useCarritoHandler } from "../hooks/useCarritoHandler";
import DetalleModal from "../components/DetalleModal";
import LightboxModal from "../components/LightboxModal";

import styles from "./Home.styles"; // 👈 Importamos estilos externos

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [categoria, setCategoria] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const categorias = useCategorias();
  const { loading, filtered, page, setPage } = useProductos({
    categoria,
    search,
    sort,
    itemsPerPage: ITEMS_PER_PAGE,
  });
  const { handleAdd, handleCarritoClick } = useCarritoHandler();

  const handleVerDetalle = (producto) => setProductoSeleccionado(producto);
  const handleCerrarDetalle = () => setProductoSeleccionado(null);

  const productosPag = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  if (loading) {
    return (
      <Box sx={styles.loadingBox}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {/* ================== ENCABEZADO ================== */}
      <Box sx={styles.header}>
        <Typography variant="h4" sx={styles.headerTitle}>
          <HomeIcon sx={{ fontSize: 32, mr: 1 }} />
          Inicio
        </Typography>
      </Box>

      {/* ================== FILTROS ================== */}
      <Paper elevation={4} sx={styles.filtersContainer}>
        {/* Buscar */}
        <TextField
          label="Buscar producto"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={styles.searchField}
        />

        {/* Categoría */}
        <TextField
          select
          label="Categoría"
          size="small"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CategoryIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={styles.categoryField}
        >
          <MenuItem value="">Todas</MenuItem>
          {categorias.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.nombre}
            </MenuItem>
          ))}
        </TextField>

        {/* Ordenar */}
        <TextField
          select
          label="Ordenar por"
          size="small"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SortIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={styles.sortField}
        >
          <MenuItem value="asc">Precio: menor a mayor</MenuItem>
          <MenuItem value="desc">Precio: mayor a menor</MenuItem>
        </TextField>
      </Paper>

      {/* ================== PRODUCTOS ================== */}
      <Grid container spacing={3} justifyContent="center">
        {productosPag.map((prod) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={prod.id}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ProductoCard
                producto={prod}
                onAgregar={handleAdd}
                onVerDetalle={() => handleVerDetalle(prod)}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* ================== PAGINACIÓN ================== */}
      <Box sx={styles.paginationBox}>
        <Pagination
          count={Math.ceil(filtered.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>

      {/* ================== BOTÓN CARRITO ================== */}
      <IconButton
        onClick={handleCarritoClick}
        sx={styles.carritoBtn}
        aria-label="Abrir carrito"
      >
        <ShoppingCartIcon />
      </IconButton>

      {/* ================== MODAL DETALLE ================== */}
      <DetalleModal
        producto={productoSeleccionado}
        open={Boolean(productoSeleccionado)}
        onClose={handleCerrarDetalle}
        onAdd={handleAdd}
        setLightbox={setLightbox}
      />

      {/* ================== LIGHTBOX ================== */}
      <LightboxModal
        open={!!lightbox}
        onClose={() => setLightbox(null)}
        src={lightbox}
      />
    </>
  );
      }
