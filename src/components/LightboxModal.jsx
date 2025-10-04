import { Dialog, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function LightboxModal({ open, onClose, src }) {
  if (!src) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      sx={{
        zIndex: 1700,
        "& .MuiBackdrop-root": {
          background: "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(30,30,30,0.95))",
          backdropFilter: "blur(8px)",
        },
      }}
      PaperProps={{
        sx: {
          bgcolor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
      }}
    >
      {/* Botón grande de cerrar */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 24,
          right: 24,
          bgcolor: "red",
          color: "white",
          width: 56,
          height: 56,
          "&:hover": {
            bgcolor: "#ff4444",
            transform: "scale(1.1)",
          },
          boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
          transition: "all 0.3s ease",
        }}
        aria-label="Cerrar imagen"
      >
        <CloseIcon sx={{ fontSize: 32 }} />
      </IconButton>

      {/* Imagen con borde y glow */}
      <Box
        component="img"
        src={src}
        alt="Imagen ampliada"
        sx={{
          maxWidth: { xs: "90%", sm: "85%", md: "80%" },
          maxHeight: { xs: "85%", sm: "90%" },
          borderRadius: 3,
          border: "4px solid rgba(255,255,255,0.2)",
          boxShadow: "0 0 30px rgba(255,255,255,0.3)",
          objectFit: "contain",
          transform: open ? "scale(1)" : "scale(0.7)",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
        }}
      />
    </Dialog>
  );
}
