import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const NavbarTop = ({ langs }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = () => {
    langs.reverse();
    handleLanguageClose();
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #E0E0E0" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side - Logo */}
        <Link href="/">
          <Image
            src="/assets/Images/tree-736885_640.jpg"
            alt="PM Academy Logo"
            width={75}
            height={75}
            style={{ borderRadius: "2px", marginLeft: "10%" }}
          />
        </Link>
        {/* Right side - Language, Cart, Login, Register */}
        <Box display="flex" alignItems="center">
          {/* Language Selection */}
          <Box>
            <IconButton
              color="inherit"
              id="basic-button"
              onClick={handleLanguageClick}
              sx={{ borderRadius: 0 }}
            >
              <LanguageIcon sx={{ fontSize: 20, mr: 0.5 }} />
              <Typography variant="body2">{langs[0]}</Typography>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleLanguageClose}
            >
              <MenuItem onClick={handleLanguageChange}>{langs[1]}</MenuItem>
            </Menu>
          </Box>
          {/* Divider */}
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          {/* Cart Icon */}
          <IconButton
            sx={{
              color: "black",
              "&:hover": {
                color: "#6524D3",
              },
            }}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>

          {/* Register Button */}
          <Button
            href="/register"
            variant="outlined"
            color="primary"
            sx={{
              ml: 2,
              borderColor: "#6524D3",
              color: "#6524D3",
              "&:hover": {
                backgroundColor: "#6524D3",
                color: "white",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const NavbarBottom = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoriesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #E0E0E0", backgroundColor: "#EAEAEA" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexDirection: "row" }}>
        {/* Desktop Menu */}
        <Box>
          <Button
            onClick={handleCategoriesClick}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              alignSelf: "flex-start",
            }}
          >
            Categories
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            MenuListProps={{ disablePadding: true }}
            sx={{'&.MuiMenuList-padding	':0}} 
          >
            <MenuItem
              sx={{ backgroundColor: "#6524D3", color: "white" , 
                '&:hover':{
                  backgroundColor: "#4B01D6",
                }
              }}
              onClick={handleClose}
            >
              Category 1
            </MenuItem>
            <MenuItem
              sx={{ backgroundColor: "#6524D3", color: "white" , 
                '&:hover':{
                  backgroundColor: "#4B01D6",
                } }}
              onClick={handleClose}
            >
              Category 2
            </MenuItem>
            <MenuItem
              sx={{ backgroundColor: "#6524D3", color: "white", 
                '&:hover':{
                  backgroundColor: "#4B01D6",
                }
              }}
              onClick={handleClose}
            >
              Category 3
            </MenuItem>
          </Menu>
        </Box>
        <Box
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
          gap={0}
          sx={{ borderRadius: "0" }}
        >
          <Button
            href="/"
            sx={{
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              height: "64px",
              padding: "0 25px",
              "&:hover": {
                backgroundColor: "#6524D3",
                color: "white",
              },
            }}
          >
            Home
          </Button>
          <Button
          className="current"
            href="/courses"
            sx={{
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              height: "64px",
              padding: "0 25px",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#6524D3",
                color: "white",
              },
            }}
          >
            Courses
          </Button>
          <Button
            href="/free/videos"
            sx={{
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              height: "64px",
              padding: "0 25px",
              "&:hover": {
                backgroundColor: "#6524D3",
                color: "white",
              },
            }}
          >
            Free Resources
          </Button>
          <Button
            href="/about"
            sx={{
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              height: "64px",
              padding: "0 25px",
              "&:hover": {
                backgroundColor: "#6524D3",
                color: "white",
              },
            }}
          >
            About Us
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box display={{ xs: "flex", md: "none" }} alignItems="center">
          <IconButton onClick={handleMobileMenuToggle} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Box
          display={{ xs: "flex", md: "none" }}
          flexDirection="column"
          bgcolor="background.paper"
          p={2}
        >
          <Button
            href="/"
            sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}
          >
            Home
          </Button>
          <Button
            href="/courses"
            sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}
          >
            Courses
          </Button>
          <Button
            href="/free/videos"
            sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}
          >
            Free Resources
          </Button>
          <Button
            href="/about"
            sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}
          >
            About Us
          </Button>
        </Box>
      )}
    </AppBar>
  );
};
export default function Navbar() {
  const langs = ["English", "Arabic"];

  return (
    <>
      <NavbarTop langs={langs} />
      <NavbarBottom />
    </>
  );
}
