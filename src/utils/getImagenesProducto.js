// 🔥 Helper centralizado para imágenes de productos

const imagenesExtra = {
  1: ["/imagenes/1-1.jpg"],
  2: ["/imagenes/2-1.jpg"],
  3: ["/imagenes/3-1.jpg"],
  4: ["/imagenes/4-1.jpg"],
  5: ["/imagenes/5-1.jpg"],
  6: ["https://i.imgur.com/BbTakwv.png"],
  7: ["https://i.imgur.com/x1cOKEH.png"],
  8: ["https://i.imgur.com/usPfhYU.png"],
  9: ["https://i.imgur.com/2moXf4X.png"],
  10: ["https://i.imgur.com/0Ra4FYX.png"],
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
