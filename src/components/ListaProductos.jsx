import { Grid, Box } from "@mui/material";
import ProductoCard from "./ProductoCard";

export default function ListaProductos({ productos }) {
  return (
    <Box sx={{ p: 2, maxWidth: "1300px", mx: "auto" }}>
      <Grid container spacing={3} justifyContent="center">
        {productos.map((producto) => (
          <Grid
            item
            key={producto.id}
            xs={12}    
            sm={6}     
            md={4}     
            lg={3}     
          >
            <ProductoCard producto={producto} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
