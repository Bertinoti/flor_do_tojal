import type React from "react"
import { useState } from "react"
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItemButton, ListItemText, Button } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import logo from "../images/flor-tojal-nf-.png"


const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const menuItems = ["Menu", "Pratos em Destaques", "Contact Us"]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {menuItems.map((item) => (
          <ListItemButton component="button" key={item}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "primary.main",
          boxShadow: "none",
          px: { xs: 2, md: 8 }, // Add horizontal padding
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              width: 120,
              height: 80,
              backgroundImage: `url(${logo})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "white",
                  fontWeight: 500,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              startIcon={<LocationOnIcon />}
              sx={{
                color: "white",
                fontWeight: 500,
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              Store Locator
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header

