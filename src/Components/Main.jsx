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

import work from "./34444908-removebg-preview.png";

import mern from "./large_2x-removebg-preview.png";

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
        backgroundColor: selected ? "#121212" : "#5cdb95",
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
                  <HomeIcon sx={{ color: selected ? "white" : "#05386b" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: selected ? "white" : "#05386b" }}
                  primary={"Home"}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon sx={{ color: selected ? "white" : "#05386b" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: selected ? "white" : "#05386b" }}
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
                    sx={{ color: selected ? "white" : "#05386b" }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: selected ? "white" : "#05386b" }}
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
                    sx={{ color: selected ? "white" : "#05386b" }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: selected ? "white" : "#05386b" }}
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

  const url = "ragunath_resume_a4_latest.pdf";

  const handledownload = (url) => {
    // fetch(url)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const bloburl = window.URL.createObjectURL(new Blob([blob]));
    //   });

    // const filename = "resume_ragunath"; //url.split("/").pop();
    const atag = document.createElement("a");
    atag.href =
      "https://drive.google.com/file/d/12tPFvJ6Vt2cD0bwJ7oyOlfuA9ZvJZg_-/view?usp=sharing";
    // atag.setAttribute("download", filename);
    atag.setAttribute("target", "_blank");

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
          backgroundColor: selected ? "#121212" : "#5cdb95",
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
                color: selected ? "white" : "#05386b",
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
                  backgroundColor: selected ? "#121212" : "#5cdb95",
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
              color: selected ? "white" : "#05386b",
            }}
            href="#main1"
          >
            Home
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              textDecoration: "none",
              color: selected ? "white" : "#05386b",
            }}
            href="#main2"
          >
            Intro
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              textDecoration: "none",
              color: selected ? "white" : "#05386b",
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
                  color: selected ? "white" : "#05386b",
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
                  color: selected ? "white" : "#05386b",
                }}
              />
            ) : (
              <LightModeIcon
                sx={{
                  color: selected ? "white" : "#05386b",
                  background: "none",
                  border: "none",
                }}
              />
            )}
          </ToggleButton>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          backgroundColor: selected ? "#121212" : "#5cdb95",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Caroussel />
      </div>
      <div
        id={"main1"}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          position: "relative",
          backgroundColor: selected ? "#121212" : "#8ee4af",
        }}
      >
        <ScrollAnimation animateIn="zoomIn" duration={2}>
          <h3 className={selected ? "div1title" : "div1titlenormal"}>
            Welcome to my PortFolio
          </h3>
        </ScrollAnimation>
        {/* <div className={selected ? "designname" : "normaldesignname"}></div>
        <div className={selected ? "design1name" : "normaldesign1name"}></div>
        <div className={selected ? "design2name" : "normaldesign2name"}></div> */}
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
          <ScrollAnimation animateIn="bounceInLeft" duration={2}>
            <h2 className="div2name">I'M Ragunath AG</h2>
            <h3
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "2rem",
                paddingTop: "8px",
              }}
              className="div2role"
            >
              MERN Stack Developer
            </h3>
            <Divider
              variant="middle"
              sx={{ backgroundColor: "#05386b", height: "2px", width: "250px" }}
            />
          </ScrollAnimation>
        </div>
        <Box data-aos="zoom-in-left" data-aos-duration="3000">
          <ScrollAnimation animateIn="rotateIn" duration={2}>
            <img src={mern} alt="mern" height={300} width={320} />
          </ScrollAnimation>

          <div className={selected ? "designintro" : "normaldesignintro"}></div>
          <div
            className={selected ? "design1intro" : "normaldesign1intro"}
          ></div>
          <div
            className={selected ? "design2intro" : "normaldesign2intro"}
          ></div>
        </Box>
      </Box>
      <div
        id="main3"
        style={{
          backgroundColor: selected ? "#121212" : "#8ee4af",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          minWidth: "100vw",
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
        <div>
          <ScrollAnimation animateIn="fadeInDown" duration={2}>
            <h3
              style={{
                color: selected ? "white" : "#05386B",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "3rem",
                marginTop: "20px",
              }}
              data-aos="fade-right"
              data-aos-duration="2000"
              className="div3work"
            >
              Work Experience
            </h3>
            <Divider
              variant="middle"
              sx={{ backgroundColor: "#05386b", height: "5px" }}
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration={2}>
            <div style={{ marginTop: "50px", display: selected && "none" }}>
              <img src={work} alt="img" height={200} width={300} />
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInRight" duration={2}>
          <div
            style={{
              marginTop: "90px",
              textAlign: "center",
              color: selected ? "white" : "#05386B",
            }}
          >
            <h3
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
              className="div3exp"
            >
              Software Developer
              <Divider
                variant="middle"
                sx={{ backgroundColor: "#05386b", height: "5px" }}
              />
            </h3>
            <div style={{ maxWidth: "300px", textAlign: "start" }}>
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
          backgroundColor: selected ? "#121212" : "#5cdb95",
          display: "flex",
          flexWrap: "wrap",
          color: "white",
          fontFamily: "'Josefin Sans', cursive",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "100vh",
          minWidth: "100vw",
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
          <ScrollAnimation animateIn="fadeInLeft" duration={2}>
            <Typography
              sx={{
                color: selected ? "white" : "#05386B",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
              mt={2}
              variant="h5"
            >
              Click Here To Download my Resume
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="tada" duration={2}>
            <Button
              onClick={() => handledownload(url)}
              sx={{ marginTop: "50px", backgroundColor: "yellow" }}
            >
              Download
            </Button>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInDown" duration={2}>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h5
                data-aos="fade-down"
                data-aos-duration="2000"
                style={{
                  textAlign: "center",
                  paddingBottom: "10px",
                  color: selected ? "white" : "#05386B",
                  fontFamily: "serif",
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
                variant="h5"
                className="div4iconshead"
              >
                Click on the icons to view my profiles
              </h5>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginLeft: "10px" }}>
                <Link
                  to="https://www.linkedin.com/in/ragunath-a-g"
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
              <div style={{ marginLeft: "10px" }}>
                <Link
                  to="https://www.naukri.com/mnjuser/homepage"
                  target="_blank"
                >
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
              <div style={{ marginLeft: "10px" }}>
                <Link to="https://github.com/Ragu27ag" target="_blank">
                  <img
                    src={require("./GitHub-Mark.png")}
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
        </ScrollAnimation>
      </div>
      <div className={selected ? "footer" : "footernormal"}>
        <span style={{ marginBottom: "10px" }}>© 2023 Ragunath AG</span>
      </div>
    </Box>
  );
};

export default Main;
