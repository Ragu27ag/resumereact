import { Divider, ToggleButton, Typography } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LaunchIcon from "@mui/icons-material/Launch";
import "../CSS/Project.css";

import vidsrc from "../Videos/20231019_132928.mp4";
import vidsrc2 from "../Videos/20231019_133401.mp4";
import vidsrc3 from "../Videos/20231019_133626.mp4";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Projects = () => {
  const [selected, setSelected] = React.useState(false);

  const prjts = [
    {
      name: "Zenclass Portal",
      des: "Zen Student and admin dashboard Application",
      src: vidsrc,
      github: "https://github.com/Ragu27ag/zenfrontend",
      launch: "https://silver-blancmange-af8400.netlify.app/login",
      stacks: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Multer",
        "MaterialUI",
        "Chart.js",
      ],
    },
    {
      name: "Bus ticket Booking Application",
      des: "Application to book bus tickets.It has two interfaces one for user and admin Users has to register and create an account and after the authentication process they are permited to access the application.They can book tickets.Admins has to login through their credentials and can modify and delete tickets.Details are stored incloud",
      src: vidsrc2,
      github: "https://github.com/Ragu27ag/busticket",
      launch: "https://strong-parfait-f69617.netlify.app/",
      stacks: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Nodemailer",
        "MaterialUI",
      ],
    },
    {
      name: "Project Site (Phase - 1)",
      des: "Real time project for a startup that sells their products through online(still under development)",
      src: vidsrc3,
      github: "",
      launch: "https://simplebro.netlify.app/",
      stacks: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "React - Bootstrap",
        "MaterialUI",
      ],
    },
  ];

  return (
    <div
      style={{
        backgroundColor: selected ? "#121212" : "#5cdb95",
        position: "relative",
      }}
      className="main"
    >
      <div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            padding: "4px",
            color: selected ? "white" : "#05386b",
          }}
        >
          <ArrowCircleLeftIcon sx={{ fontSize: "20px" }} /> Back
        </Link>
      </div>
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
        sx={{
          position: "absolute",
          top: "0px",
          right: "0px",
          border: "none",
          background: "none",
        }}
      >
        {selected ? (
          <DarkModeIcon sx={{ color: selected ? "white" : "#05386b" }} />
        ) : (
          <LightModeIcon sx={{ color: selected ? "white" : "#05386b" }} />
        )}
      </ToggleButton>
      <div style={{ margin: "5px", color: selected ? "white" : "#05386b" }}>
        <h2>
          Projects{" "}
          <Divider
            variant="middle"
            sx={{
              backgroundColor: "#05386b",
              height: "5px",
              width: "70px",
            }}
          />
        </h2>
      </div>
      <div
        // style={{
        //   color: "white",
        //   display: "flex",
        //   flexWrap: "wrap",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
        className="cardmain"
      >
        {prjts.map((prt, i) => (
          <Card
            // sx={{
            //   backgroundColor: selected ? "#121212" : "white",
            //   color: selected ? "white" : "#121212",
            // }}
            key={i}
            className={selected ? "card1" : "cardnormal"}
          >
            <CardMedia>
              {" "}
              <video width="300px" height="200px" autoPlay loop muted>
                <source src={prt.src} type="video/mp4" />
                Your browser does not support HTML5 video
              </video>
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#05386b" }}
              >
                {prt.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={selected ? "ovr" : "ovrnormal"}
              >
                {prt.des}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "#05386b", marginTop: "15px" }}
              >
                Built Using
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                {prt.stacks.map((val, i) => (
                  <div style={{}} key={i} className="built">
                    <p
                      style={{
                        fontFamily: "serif",
                        fontSize: "13px",
                        fontWeight: "bold",
                        margin: 0,
                      }}
                    >
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardActions>
              <Link to={prt.github} target="_blank">
                {prt.github ? (
                  <img
                    src={require("../Components/GitHub-Mark.png")}
                    height={30}
                    width={30}
                    style={{ borderRadius: "50%" }}
                    alt="mail"
                    className="div4icons3"
                  />
                ) : (
                  ""
                )}
              </Link>

              <Link to={prt.launch} target="_blank">
                <LaunchIcon sx={{ color: selected ? "#05386b" : "black" }} />
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
