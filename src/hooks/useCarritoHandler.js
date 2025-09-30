export function useCarritoHandler() {
  const { agregarAlCarrito } = useCarrito();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAdd = async (prod) => {
    try {
      // 👀 recibir respuesta del backend
      const res = await agregarAlCarrito(prod.id, 1);

      // ✅ Solo mostrar éxito si realmente se agregó
      toast.success(`${prod.nombre} agregado al carrito ✅`);
      return res;
    } catch (e) {
      // 👀 mostrar error real del backend
      toast.error(e.message || "Error al agregar al carrito");
    }
  };

  const handleCarritoClick = () => {
    if (!user) {
      toast.warning("Debes iniciar sesión para acceder al carrito ⚠️");
      return;
    }
    navigate("/carrito");
  };

  return { handleAdd, handleCarritoClick };
}
