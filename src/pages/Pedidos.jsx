import { useEffect, useState } from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { getPedidos } from "../api/api";
import { useAuth } from "../context/AuthContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import pedidosStyles from "./Pedidos.styles";

const PAGE_SIZE = 10;

export default function Pedidos() {
  const { access } = useAuth();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getPedidos(access, page)
      .then((data) => {
        if (!data?.results) return;

        setTotalCount(data.count);

        // ✅ Ya no reordenamos en el front, backend ya devuelve ordenados por fecha
        const pedidosNumerados = data.results.map((p, index) => ({
          ...p,
          numeroLocal: data.count - ((page - 1) * PAGE_SIZE + index),
        }));

        setPedidos(pedidosNumerados);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [access, page]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  if (loading && pedidos.length === 0)
    return <Container sx={{ mt: 4 }}>Cargando pedidos...</Container>;

  if (totalCount === 0)
    return <Container sx={{ mt: 4 }}>Aún no tienes pedidos.</Container>;

  return (
    <Container sx={pedidosStyles.container}>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        align="center"
        sx={pedidosStyles.titulo}
      >
        <ListAltIcon color="primary" sx={pedidosStyles.icono} />
        Mis Pedidos
      </Typography>

      {pedidos.map((p) => (
        <Card key={p.id} sx={pedidosStyles.card}>
          <CardContent>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              spacing={1}
              sx={pedidosStyles.header}
            >
              <Typography variant="h6" fontWeight="bold">
                Pedido #{p.numeroLocal}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(p.fecha).toLocaleString()}
              </Typography>
              <Typography variant="body1" color="primary" fontWeight="bold">
                Total: ${Number(p.total).toFixed(2)}
              </Typography>
            </Stack>

            <List dense>
              {(p.items ?? p.detalles)?.map((item, i, arr) => (
                <Box key={i}>
                  <ListItem sx={pedidosStyles.listItem}>
                    <ListItemText
                      primary={`${item.cantidad} x ${
                        item.producto?.nombre ?? "Producto"
                      } — $${Number(
                        item.precio_unitario ?? item.producto?.precio ?? 0
                      ).toFixed(2)}`}
                      secondary={`Subtotal: $${Number(
                        item.subtotal ?? 0
                      ).toFixed(2)}`}
                    />
                    {item.estado && (
                      <Chip
                        label={item.estado}
                        color={
                          item.estado === "Entregado"
                            ? "success"
                            : item.estado === "En preparación"
                            ? "warning"
                            : "error"
                        }
                        size="small"
                        sx={pedidosStyles.chip}
                      />
                    )}
                  </ListItem>
                  {i < arr.length - 1 && <Divider component="li" />}
                </Box>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}

      <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
        <Button
          variant="outlined"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Anterior
        </Button>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Página {page} de {totalPages}
        </Typography>
        <Button
          variant="outlined"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Siguiente
        </Button>
      </Stack>
    </Container>
  );
}
