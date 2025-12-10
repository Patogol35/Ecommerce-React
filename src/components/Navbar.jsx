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

const menuItems = isAuthenticated ? authMenu : guestMenu;

const handleLogout = () => {
logout();
navigate("/login");
setOpen(false);
};

const renderMenuItems = (onClick) =>
menuItems.map((item, i) => (
<NavButton key={i} item={item} onClick={onClick} />
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
{/* Navbar Desktop /}
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
{/ Logo */}
<Typography  
variant="h6"  
component={Link}  
to="/"  
sx={styles.logo}  
>
<ShoppingBagIcon sx={styles.logoIcon} />
E-commerce Patricio
</Typography>

{/* Desktop Menu */}  
        <Box sx={styles.desktopMenu}>  
          {renderMenuItems()}  
          <IconButton onClick={toggleMode} sx={{ color: "#fff" }}>  
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}  
          </IconButton>  
          {renderUserSection(true, false)}  
        </Box>  

        {/* Botón menú móvil con animación */}  
        <IconButton  
          sx={styles.menuBtnMobile}  
          onClick={() => setOpen(!open)}  
          aria-label={open ? "Cerrar menú" : "Abrir menú"}  
          aria-expanded={open}  
        >  
          <AnimatePresence mode="wait" initial={false}>  
            <motion.div  
              key={open ? "close" : "menu"}  
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}  
              animate={{ rotate: 0, opacity: 1, scale: 1 }}  
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}  
              transition={{ duration: 0.25, ease: "easeInOut" }}  
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

  {/* Drawer Móvil */}  
  <Drawer  
    anchor="right"  
    open={open}  
    onClose={() => setOpen(false)}  
    sx={{ display: { xs: "block", md: "none" } }}  
    PaperProps={{ sx: styles.drawerPaper }}  
  >  
    <Stack sx={styles.drawerStack} spacing={3}>  
      {/* User info móvil */}  
      {renderUserSection(false, true)}  

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)", my: 2 }} />  

      {/* Menú móvil */}  
      {renderMenuItems(() => setOpen(false))}  

      {isAuthenticated && (  
        <Button  
          onClick={handleLogout}  
          startIcon={<LogoutIcon />}  
          sx={styles.logoutBtn}  
        >  
          Cerrar sesión  
        </Button>  
      )}  

      {/* Botones utilitarios */}  
      <Stack spacing={2} alignItems="center" sx={styles.drawerUtilStack}>  
        <IconButton onClick={toggleMode} sx={styles.toggleModeBtn}>  
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}  
        </IconButton>  
      </Stack>  
    </Stack>  
  </Drawer>  
</>

);
      }
