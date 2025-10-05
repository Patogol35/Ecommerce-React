export const sliderSettings = {
dots: true,
infinite: true,
speed: 400,
slidesToShow: 1,
slidesToScroll: 1,
arrows: true,
};

const detalleModalStyles = {
dialog: {
zIndex: 1600,
"& .MuiBackdrop-root": {
backgroundColor: "rgba(0,0,0,0.85)",
backdropFilter: "blur(5px)",
},
},


dialogPaper: {
  borderRadius: { xs: 0, md: 3 },
  p: { xs: 2, md: 4 },
  bgcolor: "#1e1e1e",
  color: "white",
  width: "100%",
  maxWidth: { xs: "95%", md: 700 },
  maxHeight: "90vh",
  overflowY: "auto",
  position: "relative",
  textAlign: "center",
},

botonCerrar: {
position: "absolute",
top: 12,
right: 12,
bgcolor: "rgba(0,0,0,0.6)",
color: "white",
"&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
},

sliderBox: {
display: "flex",
justifyContent: "center",
alignItems: "center",
height: { xs: 300, md: 400 },
cursor: "zoom-in",
},

imagen: {
maxWidth: "100%",
maxHeight: "100%",
objectFit: "contain",
borderRadius: 2,
border: "2px solid rgba(255,255,255,0.2)",
boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
transition: "transform 0.3s ease",
"&:hover": { transform: "scale(1.02)" },
},

stockChip: {
color: "white",
borderColor: "white",
fontWeight: "bold",
},

divider: {
bgcolor: "rgba(255,255,255,0.3)",
},

descripcion: {
lineHeight: 1.6,
color: "rgba(255,255,255,0.85)",
},

botonAgregar: (stock) => ({
borderRadius: 3,
py: 1.2,
px: 2.5,
width: "fit-content",
color: "white",
fontWeight: "bold",
background: "linear-gradient(135deg, #1976d2, #42a5f5)",
alignSelf: "center",
boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
transition: "all 0.3s ease",
"&:hover": {
transform: stock > 0 ? "translateY(-2px)" : "none",
boxShadow: stock > 0 ? "0 6px 15px rgba(0,0,0,0.4)" : "none",
},
}),
};

export default detalleModalStyles;
