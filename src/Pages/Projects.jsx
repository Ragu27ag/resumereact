import { ToggleButton, Typography } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "../CSS/Project.css";

import vidsrc from "../Videos/20231015_231636.mp4";
import vidsrc2 from "../Videos/20231015_233833.mp4";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Projects = () => {
  const [selected, setSelected] = React.useState(false);

  const prjts = [
    {
      name: "Zenclass Portal",
      des: "Zen Student and admin dashboard Application",
      src: vidsrc,
    },
    {
      name: "Bus ticket Booking Application",
      des: "Application to book bus tickets.It has two interfaces one for user and admin Users has to register and create an account and after theauthentication process they are permited to access theapplication.They can book tickets.Admins has to login through theircredentials and can modify and delete tickets.Details are stoered incloud",
      src: vidsrc2,
    },
    { name: "Project Site", des: "real time project" },
  ];

  return (
    <div
      style={{
        backgroundColor: selected ? "#121212" : "white",
      }}
      className="main"
    >
      <div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            padding: "4px",
            color: selected ? "white" : "#121212",
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
          right: "0.5em",
          border: "none",
          background: "none",
        }}
      >
        {selected ? (
          <DarkModeIcon sx={{ color: selected ? "white" : "#121212" }} />
        ) : (
          <LightModeIcon sx={{ color: selected ? "white" : "#121212" }} />
        )}
      </ToggleButton>
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
            // }}
            key={i}
            className={selected ? "card1" : "cardnormal"}
          >
            <CardMedia>
              {" "}
              <video width="345px" height="200px" autoPlay loop muted>
                <source src={prt.src} type="video/mp4" />
                Your browser does not support HTML5 video
              </video>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {prt.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={selected ? "ovr" : "ovrnormal"}
              >
                {prt.des}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;

{
  /* <Typography variant="h3" gutterBottom>
          Bus Ticket Booking Application
        </Typography>
        <Typography variant="h4" gutterBottom>
          Description
        </Typography>
        <p style={{ overflowWrap: "break-word" }}>
          Application to book bus tickets.It has two interfaces one for user and
          admin. Users has to register and create an account and after the
          authentication process they are permited to access the
          application.They can book tickets.Admins has to login through their
          credentials and can modify and delete tickets.Details are stoered in
          cloud{" "}
        </p>
        <a
          href="https://strong-parfait-f69617.netlify.app/"
          style={{ textDecoration: "none" }}
        >
          Bus Ticket Application{" "}
        </a>
        <Typography sx={{ marginTop: "15px" }} variant="h3" gutterBottom>
          Zen Student and admin dashboard Application
        </Typography>
        <Typography variant="h4" gutterBottom>
          Description
        </Typography>
        <p>
          Application for maintaining student data and admin student interaction
          using MERN
        </p>
        <a
          href="https://silver-blancmange-af8400.netlify.app/"
          style={{ textDecoration: "none" }}
        >
          Zen Application{" "}
      </a> */
}
