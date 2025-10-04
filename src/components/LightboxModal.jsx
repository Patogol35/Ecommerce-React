import { Dialog, Box, IconButton, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function LightboxModal({ open, onClose, src }) {
  if (!src) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      TransitionComponent={Fade}
      sx={{
        zIndex: 1700,
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.92)",
          backdropFilter: "blur(6px)",
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
      {/* Botón de cerrar */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 20,
          right: 24,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.15)",
          },
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
        aria-label="Cerrar imagen"
      >
        <CloseIcon sx={{ fontSize: 28 }} />
      </IconButton>

      {/* Imagen */}
      <Box
        component="img"
        src={src}
        alt="Imagen ampliada"
        sx={{
          maxWidth: { xs: "90%", sm: "85%", md: "80%" },
          maxHeight: { xs: "85%", sm: "90%" },
          borderRadius: 2,
          boxShadow: "0 12px 36px rgba(0,0,0,0.5)",
          objectFit: "contain",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
          },
        }}
      />
    </Dialog>
  );
}
