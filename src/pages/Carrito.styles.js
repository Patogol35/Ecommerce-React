const styles = {
root: {
pb: { xs: 16, sm: 6 }, // espacio extra para botón flotante
px: { xs: 2, sm: 4 },
},
header: {
display: "flex",
justifyContent: "center",
alignItems: "center",
gap: 1,
color: "primary.main",
mt: 3,
mb: 3,
},
headerIcon: {
fontSize: 36,
},
footerBox: (theme) => ({
textAlign: "right",
mt: 3,
[theme.breakpoints.up("md")]: {
position: "sticky",
bottom: 0,
backgroundColor: theme.palette.background.paper,
p: 2,
borderRadius: 2,
boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
},
}),
divider: {
mb: 2,
display: { xs: "none", sm: "block" },
},
button: (total) => ({
width: { xs: "90%", sm: "auto" },
position: { xs: "fixed", sm: "static" },
bottom: { xs: 16, sm: "auto" },
left: { xs: "50%", sm: "auto" },
transform: { xs: "translateX(-50%)", sm: "none" },
zIndex: 1200,
fontWeight: "bold",
borderRadius: 8,
py: 1.5,
boxShadow: { xs: "0 6px 16px rgba(0,0,0,0.3)", sm: "none" },
fontSize: 16,
transition: "all 0.3s",
"&:hover": {
transform: { xs: "translateX(-50%) scale(1.05)", sm: "scale(1.05)" },
boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
},
"&:disabled": {
opacity: 0.6,
cursor: "not-allowed",
transform: "none",
boxShadow: "none",
},
}),
};

export default styles;

