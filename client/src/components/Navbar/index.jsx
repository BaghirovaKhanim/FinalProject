import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import style from "./index.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            style={{ backgroundColor: "white", padding: "13px 0" }}
          >
            <Container maxWidth="lg">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <img
                    src="https://preview.colorlib.com/theme/drimo/drimo/img/logo-6.png"
                    alt=""
                  />
                </Typography>
                <Button className={style.hamburgerIcon}>
                  <MenuIcon />
                </Button>
                <div className={style.navList}>
                  <Button>
                    <Link style={{ color: "black" }} to="/">
                      HOME
                    </Link>
                  </Button>
                  <Button style={{ color: "black" }}>ABOUT</Button>
                  <Button style={{ color: "black" }}>PRICE</Button>
                  <Button style={{ color: "black" }}>TEAM</Button>
                  <Button style={{ color: "black" }}>NEWS</Button>
                  <Button style={{ color: "black" }}>CONTACT</Button>
                  <Button style={{ color: "black" }}>SIGN IN</Button>
                  <Button style={{ color: "black" }}>
                    <Link style={{ color: "black" }} to="/add">
                      ADD
                    </Link>
                  </Button>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      </header>
    </>
  );
};

export default Navbar;
