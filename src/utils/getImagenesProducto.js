// 🔥 Helper centralizado para imágenes de productos

const imagenesExtra = {
  1: ["/imagenes/1-1.jpg"],
  2: ["/imagenes/2-1.jpg"],
  3: ["/imagenes/3-1.jpg"],
  4: ["/imagenes/4-1.jpg"],
  5: ["/imagenes/5-1.jpg"],
  6: ["/imagenes/6-1.jpg"],
  7: ["/imagenes/7-1.jpg"],
  8: ["/imagenes/8-1.jpg"],
  9: ["/imagenes/9-1.jpg"],
  10: ["/imagenes/10-1.jpg"],
  11: ["/imagenes/11-1.jpg"],
  12: ["/imagenes/12-1.jpg"],
  13: ["/imagenes/13-1.jpg"],
  14: ["/imagenes/14-1.jpg"],
  15: ["/imagenes/15-1.jpg"],
};

export const getImagenesProducto = (producto) => {
  if (!producto) return [];

  return [
    producto.imagen,
    ...(imagenesExtra[producto.id] || []),
  ];
};
