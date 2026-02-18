import { useState, useCallback, useMemo, useEffect } from "react";
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
import styles from "./Navbar.styles";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const { mode, toggleMode } = useThemeMode();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const scrolled = useScrollTrigger(50);

  const menuItems = useMemo(
    () => (isAuthenticated ? authMenu : guestMenu),
    [isAuthenticated]
  );

  const handleToggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login");
    handleCloseMenu();
  }, [logout, navigate, handleCloseMenu]);

  // 🔥 Bloquear scroll al abrir menú
  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [open]);

  const textColor = "#fff";

  const UserSection = ({ mobile = false }) =>
    isAuthenticated && (
      <Stack
        direction={mobile ? "column" : "row"}
        spacing={1.5}
        alignItems="center"
        sx={styles.userSection(mobile)}
      >
        <AccountCircleIcon sx={{ color: textColor }} />
        <Typography sx={{ color: textColor, fontWeight: 600 }}>
          {user?.username}
        </Typography>

        {!mobile && (
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
      {/* 🔥 Topbar animado */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AppBar
          position="fixed"
          elevation={scrolled ? 6 : 2}
          sx={(theme) => styles.appBar(theme, scrolled)}
        >
          <Toolbar sx={styles.toolbar}>
            {/* Logo */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ ...styles.logo, color: textColor }}
            >
              <ShoppingBagIcon sx={styles.logoIcon} />
              E-commerce Jorge Patricio
            </Typography>

            {/* Desktop Menu */}
            <Box sx={styles.desktopMenu}>
              {menuItems.map((item, idx) => (
                <NavButton key={idx} item={item} />
              ))}

              <IconButton onClick={toggleMode} sx={styles.toggleIcon}>
                {mode === "light" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>

              <UserSection />
            </Box>

            {/* Botón móvil */}
            <IconButton
              sx={{ ...styles.menuBtnMobile, color: textColor }}
              onClick={handleToggleMenu}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  style={styles.iconCenter}
                >
                  {open ? (
                    <CloseIcon fontSize="large" />
                  ) : (
                    <MenuIcon fontSize="large" />
                  )}
                </motion.div>
              </AnimatePresence>
            </IconButton>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* 🔥 Drawer animado personalizado */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25 }}
            style={styles.overlay}
            onClick={handleCloseMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              style={{
                ...styles.drawerPanel,
                background:
                  mode === "dark"
                    ? "rgba(30,30,30,0.95)"
                    : "#1976d2",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Stack spacing={2} alignItems="center">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { delay: i * 0.05 },
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    style={{ width: "90%" }}
                  >
                    <NavButton
                      item={item}
                      onClick={handleCloseMenu}
                    />
                  </motion.div>
                ))}
              </Stack>

              {isAuthenticated && (
                <Box mt={4} textAlign="center">
                  <Button
                    onClick={handleLogout}
                    startIcon={<LogoutIcon />}
                    sx={styles.logoutBtn}
                  >
                    Cerrar sesión
                  </Button>
                </Box>
              )}

              <Box sx={styles.drawerBottom}>
                <IconButton
                  onClick={toggleMode}
                  sx={styles.roundThemeBtn}
                >
                  {mode === "light" ? (
                    <DarkModeIcon />
                  ) : (
                    <LightModeIcon />
                  )}
                </IconButton>
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
          }
