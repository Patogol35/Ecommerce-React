import { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavButton from "../buttons/NavButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Login from "../auth/Login";
import Register from "../auth/Register";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const menuItems = user
    ? [
        { label: "Inicio", path: "/" },
        { label: "Tienda", path: "/products" },
        { label: "Perfil", path: "/profile" },
      ]
    : [
        { label: "Inicio", path: "/" },
        { label: "Tienda", path: "/products" },
        { label: "Iniciar Sesión", path: "/login" },
        { label: "Crear Cuenta", path: "/register" },
      ];

  const handleLogout = () => {
    logout();
    navigate("/");
    setDrawerOpen(false);
  };

  const renderMenuItems = (onClick) =>
    menuItems.map((item, i) => {
      if (item.path === "/login") {
        return (
          <Button
            key={i}
            onClick={() => {
              setOpenLoginModal(true);
              if (onClick) onClick();
            }}
            sx={{ color: "#fff", fontWeight: 600 }}
          >
            {item.label}
          </Button>
        );
      }

      if (item.path === "/register") {
        return (
          <Button
            key={i}
            onClick={() => {
              setOpenRegisterModal(true);
              if (onClick) onClick();
            }}
            sx={{ color: "#fff", fontWeight: 600 }}
          >
            {item.label}
          </Button>
        );
      }

      return <NavButton key={i} item={item} onClick={onClick} />;
    });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 1,
          backgroundColor: "#131921",
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Mi Tienda
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {renderMenuItems()}
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton sx={{ color: "#fff" }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>

        {user && (
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <IconButton
              component={RouterLink}
              to="/cart"
              sx={{ color: "#fff" }}
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              component={RouterLink}
              to="/favorites"
              sx={{ color: "#fff" }}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton component="button" sx={{ color: "#fff" }} onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Box>
        )}

      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {renderMenuItems(() => setDrawerOpen(false))}
          </List>

          {user && (
            <>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon><LogoutIcon /></ListItemIcon>
                  <ListItemText primary="Cerrar Sesión" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </Box>
      </Drawer>

      {/* MODAL LOGIN */}
      <Modal open={openLoginModal} onClose={() => setOpenLoginModal(false)}>
        <Box sx={{
          width: 400,
          margin: "auto",
          mt: "10vh",
          bgcolor: "background.paper",
          borderRadius: 3,
          p: 3,
          outline: "none"
        }}>
          <Login onClose={() => setOpenLoginModal(false)} />
        </Box>
      </Modal>

      {/* MODAL REGISTER */}
      <Modal open={openRegisterModal} onClose={() => setOpenRegisterModal(false)}>
        <Box sx={{
          width: 450,
          margin: "auto",
          mt: "10vh",
          bgcolor: "background.paper",
          borderRadius: 3,
          p: 3,
          outline: "none"
        }}>
          <Register onClose={() => setOpenRegisterModal(false)} />
        </Box>
      </Modal>

    </>
  );
};

export default Navbar;
