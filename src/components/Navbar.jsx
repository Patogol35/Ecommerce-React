import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useThemeMode } from "../context/ThemeContext";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { authMenu, guestMenu } from "../config/menuConfig";
import NavButton from "./NavButton";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Stack,
  Button,
  Drawer,
  Divider,
  Modal,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ShoppingBag as ShoppingBagIcon,
  Logout as LogoutIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";
import Login from "../pages/Login";
import Register from "../pages/Register";
import styles from "./Navbar.styles";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const { mode, toggleMode } = useThemeMode();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const scrolled = useScrollTrigger(50);

  // Estado de modales
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const menuItems = isAuthenticated ? authMenu : guestMenu;

  const handleLogout = () => {
    logout();
    navigate("/login");
    setOpen(false);
  };

  const menuHandler = (item, onClick) => {
    if (item.path === "/login") {
      setOpenLoginModal(true);
      if (onClick) onClick();
      return;
    }
    if (item.path === "/register") {
      setOpenRegisterModal(true);
      if (onClick) onClick();
      return;
    }
    navigate(item.path);
    if (onClick) onClick();
  };

  const renderMenuItems = (onClick) =>
    menuItems.map((item, i) => (
      <Button
        key={i}
        onClick={() => menuHandler(item, onClick)}
        sx={styles.menuItemButton}
      >
        {item.label}
      </Button>
    ));

  const renderUserSection = (showLogout = true, isMobile = false) =>
    isAuthenticated && (
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={1.5}
        alignItems="center"
        sx={styles.userSection(isMobile)}
      >
        <AccountCircleIcon sx={{ color: "#fff" }} />
        <Typography sx={{ color: "#fff", fontWeight: 600 }}>
          {user?.username}
        </Typography>
        {showLogout && (
          <Button
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={styles.logoutBtn}
          >
            Cerrar sesión
          </Button>
        )}
      </Stack>
    );

  return (
    <>
      {/* Navbar Desktop */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AppBar
          position="fixed"
          elevation={scrolled ? 6 : 2}
          sx={styles.appBar(scrolled)}
        >
          <Toolbar sx={styles.toolbar}>
            <Typography component={Link} to="/" sx={styles.logo}>
              <ShoppingBagIcon sx={styles.logoIcon} />
              E-commerce Patricio
            </Typography>

            {/* Menú Desktop */}
            <Box sx={styles.desktopMenu}>
              {renderMenuItems()}
              <IconButton onClick={toggleMode} sx={{ color: "#fff" }}>
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              {renderUserSection(true, false)}
            </Box>

            {/* Botón móvil */}
            <IconButton
              sx={styles.menuBtnMobile}
              onClick={() => setOpen(!open)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {open ? <CloseIcon /> : <MenuIcon />}
                </motion.div>
              </AnimatePresence>
            </IconButton>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: styles.drawerPaper }}
      >
        <Stack sx={styles.drawerStack} spacing={3}>
          {renderUserSection(false, true)}
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
          {renderMenuItems(() => setOpen(false))}
          <IconButton onClick={toggleMode} sx={styles.toggleModeBtn}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Stack>
      </Drawer>

      {/* Modal Login */}
      <Modal open={openLoginModal} onClose={() => setOpenLoginModal(false)}>
        <Box sx={styles.modalBox}>
          <Login onClose={() => setOpenLoginModal(false)} />
        </Box>
      </Modal>

      {/* Modal Registro */}
      <Modal
        open={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      >
        <Box sx={styles.modalBox}>
          <Register onClose={() => setOpenRegisterModal(false)} />
        </Box>
      </Modal>
    </>
  );
            }
