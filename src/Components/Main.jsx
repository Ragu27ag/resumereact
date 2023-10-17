import { Box, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Caroussel from "../Pages/Caroussel";
import "./free-linkedin-logo-icon-2430-thumb.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ToggleButton from "@mui/material/ToggleButton";

import "../CSS/main.css";
import ScrollAnimation from "react-animate-on-scroll";

const Main = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const [selected, setSelected] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        marginTop: "100px",
        backgroundColor: selected ? "#121212" : "white",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon sx={{ color: selected ? "white" : "#121212" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: selected ? "white" : "#121212" }}
                  primary={"Home"}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon sx={{ color: selected ? "white" : "#121212" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: selected ? "white" : "#121212" }}
                  primary={"About"}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon
                    sx={{ color: selected ? "white" : "#121212" }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: selected ? "white" : "#121212" }}
                  primary={"Projects"}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          {adjust.width < 400 && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon
                    sx={{ color: selected ? "white" : "#121212" }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: selected ? "white" : "#121212" }}
                  primary={"Resume"}
                >
                  <a href="#main4">Resume</a>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          )}
        </>
      </List>

      <Divider />
    </Box>
  );

  // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const url = "resume_ragunathag_17082023.pdf";

  const handledownload = (url) => {
    // fetch(url)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const bloburl = window.URL.createObjectURL(new Blob([blob]));
    //   });

    const filename = "resume_ragunath"; //url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", filename);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };

  const useAdjust = () => {
    return {
      width: window.innerWidth,
    };
  };

  const [adjust, setAdjust] = useState(useAdjust());

  const [animated, setAnimated] = useState(false);

  console.log(adjust);

  // const [ref, inView] = useInView({ triggerOnce: true });

  // console.log(inView, animated, ref);

  useEffect(() => {
    const handleAdjust = () => {
      setAdjust(useAdjust);
    };

    // if (inView) {
    //   setAnimated(true);
    // } else setAnimated(false);
    window.addEventListener("resize", handleAdjust);

    return () => {
      window.removeEventListener("resize", handleAdjust);
    };
  }, [adjust]);

  return (
    <Box sx={{}}>
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: selected ? "#121212" : "white",
        }}
      >
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
              edge="start"
              sx={{
                m: 2,
                height: "20px",
                color: selected ? "white" : "#121212",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              PaperProps={{
                sx: {
                  backgroundColor: selected ? "#121212" : "white",
                },
              }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <div className="maindiv">
          <a
            style={{
              textDecoration: "none",
              color: selected ? "white" : "#121212",
            }}
            href="#main1"
          >
            Home
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              textDecoration: "none",
              color: selected ? "white" : "#121212",
            }}
            href="#main2"
          >
            Intro
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              textDecoration: "none",
              color: selected ? "white" : "#121212",
            }}
            href="#main3"
          >
            Experience
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {adjust.width > 400 && (
            <>
              <a
                style={{
                  textDecoration: "none",
                  color: selected ? "white" : "#121212",
                }}
                href="#main4"
              >
                Resume
              </a>
            </>
          )}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
            sx={{
              color: selected ? "white" : "#121212",
              position: "absolute",
              right: "10px",
              top: "-1px",
              background: "none",
              border: "none",
            }}
          >
            {selected ? (
              <DarkModeIcon
                sx={{
                  color: selected ? "white" : "#121212",
                }}
              />
            ) : (
              <LightModeIcon
                sx={{
                  color: selected ? "white" : "#121212",
                  background: "none",
                  border: "none",
                }}
              />
            )}
          </ToggleButton>
        </div>
      </div>

      <Box id={"main1"} className={selected ? "div1" : "div1normal"}>
        <h3 className={selected ? "div1title" : "div1titlenormal"}>
          Welcome to my PortFolio
        </h3>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "2px solid",
          paddingTop: "50px",
          backgroundColor: selected ? "#121212" : " white",
          minHeight: "100vh",
        }}
      >
        <Caroussel />
      </div>
      <Box
        className={selected ? "div2" : "div2normal"}
        id={"main2"}
        sx={
          {
            // backgroundImage: selected
            //   ? ""
            //   : 'url("https://img.freepik.com/free-vector/abstract-technology-blue-background_1035-17929.jpg")',
          }
        }
      >
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <ScrollAnimation animateIn="tada">
            <h2 className="div2name">I'M Ragunath AG</h2>
          </ScrollAnimation>
        </div>
        <Box data-aos="zoom-in-left" data-aos-duration="3000">
          <ScrollAnimation animateIn="bounceInRight">
            <h2
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "3rem",
                paddingTop: "8px",
              }}
              className="div2role"
            >
              MERN Stack Developer
            </h2>
          </ScrollAnimation>
        </Box>
      </Box>
      <div
        id="main3"
        style={{
          backgroundColor: selected && "#121212",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
          position: "relative",
          minHeight: "100vh",
          // backgroundImage: selected
          //   ? ""
          //   : 'url("https://img.freepik.com/premium-vector/network-sophisticated-digital-connections_49459-659.jpg")',
        }}
      >
        <ScrollAnimation animateIn="fadeInDown" delay={1000}>
          <h3
            style={{
              color: selected ? "white" : "#121212",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
            data-aos="fade-right"
            data-aos-duration="2000"
            className="div3work"
          >
            Work Experience
          </h3>
        </ScrollAnimation>
        <Divider sx={{ color: "white" }} />
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <div
            style={{
              width: "400px",
              height: "400px",
              marginTop: "90px",
              textAlign: "center",
              color: selected ? "white" : "#121212",
            }}
          >
            <h4
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
              className="div3exp"
            >
              Software Developer - 2022
            </h4>
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              style={{
                padding: "40px",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
              className="div3exp"
            >
              Having 1 year exprience as a software developer at Inspirisys
              Solutions,chennai.Worked as a JAVA Developer along with sql and
              plsql responsible for creating , customizing and fixing bugs to
              ensure the smooth functioning of the application
            </p>
          </div>
        </ScrollAnimation>
        <div className={selected ? "design" : "normaldesign"}></div>
        <div className={selected ? "design1" : "normaldesign1"}></div>
        <div className={selected ? "design2" : "normaldesign2"}></div>
      </div>

      <div
        className="exp"
        id="main4"
        style={{
          backgroundColor: selected && "#121212",
          display: "flex",
          flexWrap: "wrap",
          color: "white",
          fontFamily: "'Josefin Sans', cursive",
          justifyContent: "space-around",
          height: "600px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          minHeight: "100vh",
          // backgroundImage: selected
          //   ? ""
          //   : 'url("https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-background-image_401612603.jpg")',
        }}
      >
        <div
          data-aos="zoom-out-right"
          data-aos-duration="2000"
          className="div4butt"
        >
          <Typography
            sx={{
              color: selected ? "white" : "#121212",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
            mt={2}
            variant="h5"
          >
            Click Here To Download my Resume
          </Typography>
          <Button
            onClick={() => handledownload(url)}
            sx={{ marginTop: "50px", backgroundColor: "yellow" }}
          >
            Download
          </Button>
        </div>
        <div
          style={{
            height: "300px",
            width: "500px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <h5
              data-aos="fade-down"
              data-aos-duration="2000"
              style={{
                textAlign: "center",
                paddingBottom: "20px",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
              variant="h5"
              className="div4iconshead"
            >
              Click on the icons to view my profiles
            </h5>
            <Link
              to="https://www.linkedin.com/in/ragunath-ag-258479285/"
              target="_blank"
            >
              <img
                src={require("./free-linkedin-logo-icon-2430-thumb.png")}
                alt="linkedin"
                height={40}
                width={40}
                data-aos="fade-left"
                data-aos-duration="2000"
                className="div4icons1"
              />
            </Link>
          </div>
          <div>
            <Link to="https://www.naukri.com/mnjuser/homepage" target="_blank">
              <img
                src={require("./png-transparent-naukri-com-employment-website-job-hunting-online-job-search-india-employment-online-job-search-thumbnail.png")}
                height={40}
                width={40}
                style={{ borderRadius: "50%" }}
                data-aos="fade-left"
                data-aos-duration="2500"
                alt="naukri"
                className="div4icons2"
              />
            </Link>
          </div>
          <div>
            <Link to="https://mail.google.com/" target="_blank">
              <img
                src={require("./google-mail-icon-logo-isolated-on-transparent-background-free-vector.jpg")}
                height={40}
                width={40}
                style={{ borderRadius: "50%" }}
                data-aos="fade-left"
                data-aos-duration="3000"
                alt="mail"
                className="div4icons3"
              />
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Main;
