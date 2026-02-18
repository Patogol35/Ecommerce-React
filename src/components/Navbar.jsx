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
  Drawer,
  Divider,
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
  const [mounted, setMounted] = useState(false);

  const scrolled = useScrollTrigger(50);

  useEffect(() => setMounted(true), []);

  const menuItems = useMemo(
    () => (isAuthenticated ? authMenu : guestMenu),
    [isAuthenticated]
  );

  const handleToggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => setOpen(false), []);

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login");
    handleCloseMenu();
  }, [logout, navigate, handleCloseMenu]);

  const textColor = "#fff";

  const UserSection = ({ showLogout = true, mobile = false }) =>
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

  const MenuList = ({ onClick }) =>
    menuItems.map((item, idx) => (
      <NavButton key={idx} item={item} onClick={onClick} />
    ));

  return (
    <>
      <motion.div
        initial={!mounted ? { y: -30, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={(theme) => styles.appBar(theme, scrolled)}
        >
          <Toolbar sx={styles.toolbar}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ ...styles.logo, color: textColor }}
            >
              <ShoppingBagIcon sx={styles.logoIcon} />
              E-commerce Jorge Patricio
            </Typography>

            {/* DESKTOP */}
            <Box sx={styles.desktopMenu}>
              <MenuList />

              <IconButton onClick={toggleMode} sx={styles.toggleIcon}>
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>

              <UserSection />
            </Box>

            {/* MOBILE */}
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
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  style={styles.iconCenter}
                >
                  {open ? <CloseIcon /> : <MenuIcon />}
                </motion.div>
              </AnimatePresence>
            </IconButton>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleCloseMenu}
        transitionDuration={280}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", lg: "none" } }}
        PaperProps={{
          sx: (theme) => styles.drawerPaper(theme),
        }}
      >
        <Stack sx={styles.drawerStack} spacing={3}>
          <UserSection showLogout={false} mobile />

          <Divider sx={{ opacity: 0.25 }} />

          <MenuList onClick={handleCloseMenu} />

          {isAuthenticated && (
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <Button
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
                sx={(theme) => styles.logoutBtn(theme)}
              >
                Cerrar sesión
              </Button>
            </motion.div>
          )}

          <Stack spacing={2} alignItems="center" sx={styles.drawerUtilStack}>
            <IconButton onClick={toggleMode} sx={styles.toggleIcon}>
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
                                 }
