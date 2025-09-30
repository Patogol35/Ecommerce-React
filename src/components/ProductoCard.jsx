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
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // 👈 cambio aquí

export default function ProductoCard({ producto, onVerDetalle, onAgregar }) {
const { isAuthenticated } = useAuth();
const { agregarAlCarrito } = useCarrito();
const navigate = useNavigate();

const onAdd = async () => {
if (!isAuthenticated) {
toast.warn("Debes iniciar sesión para agregar productos 🛒");
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
sx={{
width: "100%",
maxWidth: 320,
borderRadius: 3,
boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
overflow: "hidden",
display: "flex",
flexDirection: "column",
transition: "transform 0.3s ease, box-shadow 0.3s ease",
"&:hover": {
transform: "translateY(-6px)",
boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
},
}}
>
{/* Imagen */}
<Box
sx={{
position: "relative",
height: 220,
display: "flex",
alignItems: "center",
justifyContent: "center",
bgcolor: "#f5f5f5",
overflow: "hidden",
}}
>
<Box
component="img"
src={producto.imagen}
alt={producto.nombre}
sx={{
maxWidth: "100%",
maxHeight: "100%",
objectFit: "contain",
transition: "transform 0.5s ease",
"&:hover": { transform: "scale(1.08)" },
}}
/>

{producto.nuevo && (  
      <Chip  
        icon={<StarIcon />}  
        label="Nuevo"  
        color="secondary"  
        size="small"  
        sx={{  
          position: "absolute",  
          top: 12,  
          left: 12,  
          fontWeight: "bold",  
          bgcolor: "secondary.main",  
          color: "white",  
          boxShadow: "0 3px 8px rgba(0,0,0,0.2)",  
        }}  
      />  
    )}  
  </Box>  

  {/* Contenido */}  
  <Box sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}>  
    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>  
      {producto.nombre}  
    </Typography>  

    {/* Precio */}  
    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 2 }}>  
      <MonetizationOnIcon color="primary" /> {/* 👈 ícono actualizado */}  
      <Typography variant="h6" color="primary" fontWeight="bold">  
        {producto.precio}  
      </Typography>  
    </Stack>  

    <Divider sx={{ my: 1 }} />  

    {/* Botones */}  
    <Stack spacing={1}>  
      <Button  
        variant="contained"  
        color="primary"  
        fullWidth  
        startIcon={<AddShoppingCartIcon />}  
        sx={{  
          borderRadius: 2,  
          textTransform: "none",  
          py: 1,  
          fontWeight: "bold",  
          transition: "all 0.3s ease",  
          "&:hover": {  
            transform: producto.stock > 0 ? "scale(1.05)" : "none",  
            boxShadow:  
              producto.stock > 0 ? "0 6px 15px rgba(0,0,0,0.2)" : "none",  
          },  
        }}  
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
        sx={{  
          borderRadius: 2,  
          textTransform: "none",  
          py: 1,  
          fontWeight: "medium",  
          transition: "all 0.3s ease",  
          "&:hover": {  
            transform: "scale(1.05)",  
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",  
          },  
        }}  
        onClick={() =>  
          onVerDetalle  
            ? onVerDetalle()  
            : navigate(`/producto/${producto.id}`, { state: { producto } })  
        }  
      >  
        Ver detalles  
      </Button>  
    </Stack>  
  </Box>  
</Card>

);
} Y mi carritocontext import { createContext, useContext, useEffect, useState } from "react";
import {
agregarAlCarrito as apiAgregar,
getCarrito as apiGetCarrito,
eliminarDelCarrito as apiEliminar,
setCantidadItem as apiSetCantidad,
} from "../api/api";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
const { access } = useAuth();
const [carrito, setCarrito] = useState({ items: [] });
const [loading, setLoading] = useState(false);

const cargarCarrito = async () => {
if (!access) {
setCarrito({ items: [] });
return;
}
setLoading(true);
try {
const data = await apiGetCarrito(access);
setCarrito(data);
} catch (e) {
console.error(e);
setCarrito({ items: [] });
} finally {
setLoading(false);
}
};

useEffect(() => {
cargarCarrito();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [access]);

// Set cantidad absoluta y sincronizada con backend
const setCantidad = async (itemId, cantidad) => {
if (!access) throw new Error("Debes iniciar sesión.");
if (cantidad < 1) return;

try {  
  const res = await apiSetCantidad(itemId, cantidad, access);  

  const cantidadFinal = res?.cantidad ?? cantidad;  

  setCarrito((prev) => ({  
    ...prev,  
    items: prev.items.map((it) =>  
      it.id === itemId  
        ? {  
            ...it,  
            cantidad: cantidadFinal,  
            subtotal: cantidadFinal * it.producto.precio,  
          }  
        : it  
    ),  
  }));  
} catch (e) {  
  console.error(e);  
  toast.error(e.message || "No se pudo actualizar la cantidad"); // ✅ mensaje real del back  
}

};

const agregarAlCarrito = async (producto_id, cantidad = 1) => {
if (!access) throw new Error("Debes iniciar sesión.");
try {
await apiAgregar(producto_id, cantidad, access);
await cargarCarrito();
} catch (e) {
console.error(e);
toast.error(e.message || "No se pudo agregar el producto"); // ✅ mensaje real del back
}
};

const eliminarItem = async (itemId) => {
if (!access) throw new Error("Debes iniciar sesión.");
try {
await apiEliminar(itemId, access);
setCarrito((prev) => ({
...prev,
items: prev.items.filter((it) => it.id !== itemId),
}));
toast.warn("Producto eliminado ❌");
} catch (e) {
console.error(e);
toast.error(e.message || "No se pudo eliminar el producto");
}
};

const limpiarLocal = () => setCarrito({ items: [] });

return (
<CarritoContext.Provider
value={{
carrito,
items: carrito.items || [],
loading,
cargarCarrito,
agregarAlCarrito,
setCantidad,
eliminarItem,
limpiarLocal,
}}
>
{children}
</CarritoContext.Provider>
);
}

export const useCarrito = () => useContext(CarritoContext);

