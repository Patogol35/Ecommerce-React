import { useState, useCallback, useMemo } from "react";
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
  const scrolled = useScrollTrigger(50);

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

  const UserSection = ({ showLogout = true, mobile = false }) =>
    isAuthenticated && (
      <Stack
        direction={mobile ? "column" : "row"}
        spacing={1.5}
        alignItems="center"
        sx={styles.userSection(mobile)}
      >
        <AccountCircleIcon sx={{ color: "#fff" }} />
        <Typography sx={{ color: "#fff", fontWeight: 600 }}>
          {user?.username}
        </Typography>

        {showLogout && (
          <Button
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={(theme) => styles.logoutBtn(theme)}
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
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={styles.logo}
            >
              <ShoppingBagIcon sx={styles.logoIcon} />
              E-commerce Jorge Patricio
            </Typography>

            {/* Desktop */}
            <Box sx={styles.desktopMenu}>
              <MenuList />
              <IconButton onClick={toggleMode} sx={{ color: "#fff" }}>
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <UserSection />
            </Box>

            {/* Mobile */}
            <IconButton
              sx={(theme) => styles.menuBtnMobile(theme)}
              onClick={handleToggleMenu}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  style={styles.menuIconWrapper}
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

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleCloseMenu}
        sx={{ display: { xs: "block", md: "none" } }}
        PaperProps={{
          sx: (theme) => styles.drawerPaper(theme),
        }}
      >
        <Stack sx={styles.drawerStack} spacing={3}>
          <UserSection showLogout={false} mobile />

          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)", my: 2 }} />

          <MenuList onClick={handleCloseMenu} />

          {isAuthenticated && (
            <Button
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              sx={(theme) => styles.logoutBtn(theme)}
            >
              Cerrar sesión
            </Button>
          )}

          <Stack spacing={2} alignItems="center" sx={styles.drawerUtilStack}>
            <IconButton
              onClick={toggleMode}
              sx={(theme) => styles.toggleModeBtn(theme)}
            >
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
        }
