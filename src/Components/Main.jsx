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

const Main = () => {
  const [state, setState] = React.useState({
    left: false,
  });

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
        backgroundColor: "rgb(47, 47, 162)",
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
                  <HomeIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={"Home"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={"About"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={"Projects"} />
              </ListItemButton>
            </ListItem>
          </Link>
          {adjust.width < 400 && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={"Resume"}>
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

  const url = "resume.pdf";

  const handledownload = (url) => {
    // fetch(url)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const bloburl = window.URL.createObjectURL(new Blob([blob]));
    //   });

    const filename = "resume"; //url.split("/").pop();
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

  useEffect(() => {
    const handleAdjust = () => {
      setAdjust(useAdjust);
    };

    window.addEventListener("resize", handleAdjust);

    return () => {
      window.removeEventListener("resize", handleAdjust);
    };
  }, [adjust]);

  console.log(adjust);
  return (
    <Box sx={{}}>
      <div
        style={{
          height: "150px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#2F2FA2",
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
                color: "white",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <div
          style={{
            height: "50px",
            marginTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "center",
          }}
        >
          <a style={{ textDecoration: "none", color: "white" }} href="#main1">
            Home
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a style={{ textDecoration: "none", color: "white" }} href="#main2">
            Intro
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a style={{ textDecoration: "none", color: "white" }} href="#main3">
            Experience
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {adjust.width > 400 && (
            <a style={{ textDecoration: "none", color: "white" }} href="#main4">
              Resume
            </a>
          )}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <Box
        id={"main1"}
        sx={{
          height: "580px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#2F2FA2",
        }}
      >
        <Typography
          data-aos="zoom-in"
          data-aos-duration="2500"
          sx={{ color: "white" }}
          variant="h3"
        >
          Welcome to my PortFolio
        </Typography>

        <Caroussel />
      </Box>
      <Box
        id={"main2"}
        sx={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/abstract-technology-blue-background_1035-17929.jpg")',
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          height: "690px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          alignItems: "center",
        }}
      >
        <div
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          style={{
            width: "400px",
            height: "300px",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" pt={8} color={"white"}>
            I'M Ragunath AG
          </Typography>
        </div>
        <Box
          data-aos="zoom-in-left"
          data-aos-duration="3000"
          sx={{
            width: "400px",
            height: "300px",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" pt={10} color={"white"} gutterBottom>
            MERN Stack Developer
          </Typography>
        </Box>
      </Box>
      <div
        id="main3"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          height: "670px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
          backgroundImage:
            'url("https://img.freepik.com/premium-vector/network-sophisticated-digital-connections_49459-659.jpg")',
        }}
      >
        <Typography
          data-aos="fade-right"
          data-aos-duration="2000"
          marginTop={5}
          variant="h3"
        >
          Work Experience
        </Typography>
        <Divider sx={{ color: "white" }} />
        <div
          style={{
            width: "400px",
            height: "400px",
            marginTop: "90px",
            textAlign: "center",
          }}
        >
          <Typography
            data-aos="fade-up-left"
            data-aos-duration="2000"
            marginTop={5}
            variant="h4"
          >
            Software Developer - 2022
          </Typography>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            style={{ padding: "40px" }}
          >
            Having 1 year exprience as a software developer at Inspirisys
            Solutions,chennai.Worked as a JAVA Developer along with sql and
            plsql responsible for creating , customizing and fixing bugs to
            ensure the smooth functioning of the application
          </p>
        </div>
      </div>
      <div
        className="exp"
        id="main4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          color: "white",
          fontFamily: "'Josefin Sans', cursive",
          justifyContent: "space-around",
          height: "600px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          backgroundImage:
            'url("https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-background-image_401612603.jpg")',
        }}
      >
        <div
          style={{
            height: "200px",
            width: "500px",
            textAlign: "center",
          }}
          data-aos="zoom-out-right"
          data-aos-duration="2000"
        >
          <Typography mt={2} variant="h5">
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
            <Typography
              data-aos="fade-down"
              data-aos-duration="2000"
              sx={{ textAlign: "center", paddingBottom: "20px" }}
              variant="h5"
            >
              Click on the icons to view my profiles
            </Typography>
            <Link to="https://www.google.com" target="_blank">
              <img
                src={require("./free-linkedin-logo-icon-2430-thumb.png")}
                alt="linkedin"
                height={40}
                width={40}
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </Link>
          </div>
          <div>
            <Link to="https://www.google.com" target="_blank">
              <img
                src={require("./png-transparent-naukri-com-employment-website-job-hunting-online-job-search-india-employment-online-job-search-thumbnail.png")}
                height={40}
                width={40}
                style={{ borderRadius: "50%" }}
                data-aos="fade-left"
                data-aos-duration="2500"
                alt="naukri"
              />
            </Link>
          </div>
          <div>
            <Link to="https://www.google.com" target="_blank">
              <img
                src={require("./google-mail-icon-logo-isolated-on-transparent-background-free-vector.jpg")}
                height={40}
                width={40}
                style={{ borderRadius: "50%" }}
                data-aos="fade-left"
                data-aos-duration="3000"
                alt="mail"
              />
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Main;
