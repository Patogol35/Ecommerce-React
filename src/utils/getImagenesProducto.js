// 🔥 Imágenes extra del front (por ID)
const imagenesExtra = {
  1: ["https://i.imgur.com/4r9ScxM.png"],
  2: ["https://i.imgur.com/IiHG04G.png"],
  3: ["https://i.imgur.com/hlbuAVl.png"],
  4: ["https://i.imgur.com/Y5KJEgc.png"],
  5: ["https://i.imgur.com/GNk8Blo.png"],
  6: ["https://i.imgur.com/BbTakwv.png"],
  7: ["https://i.imgur.com/x1cOKEH.png"],
  8: ["https://i.imgur.com/usPfhYU.png"],
  9: ["https://i.imgur.com/2moXf4X.png"],
  10: ["https://i.imgur.com/0Ra4FYX.png"],
  11: ["https://i.imgur.com/9PWG1ao.png"],
  12: ["https://i.imgur.com/Nyvob4S.png"],
  13: ["https://i.imgur.com/10j4ANH.png"],
  14: ["https://i.imgur.com/ChyFk6w.png"],
  15: ["https://i.imgur.com/pXDEcTC.png"],
};

export const getImagenesProducto = (producto) => {
  if (!producto) return [];

  // 🟢 imágenes desde BD (si existen)
  const imagenesBD = Array.isArray(producto.imagenes)
    ? producto.imagenes.filter(Boolean)
    : [];

  // 🔵 imagen principal
  const imagenPrincipal = producto.imagen
    ? [producto.imagen]
    : [];

  // 🟣 imágenes extra del front
  const extras = imagenesExtra[producto.id] || [];

  // 🔥 UNIFICAR TODO
  const todas = [
    ...imagenesBD,
    ...imagenPrincipal,
    ...extras,
  ].filter(Boolean);

  // 🛡 eliminar duplicados
  const unicas = [...new Set(todas)];

  // 🧱 fallback final
  if (unicas.length === 0) {
    return ["https://via.placeholder.com/400x300?text=Sin+imagen"];
  }

  return unicas;
};
