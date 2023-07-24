import { Typography } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",

            padding: "4px",
            color: "white",
          }}
        >
          <ArrowCircleLeftIcon sx={{ fontSize: "20px" }} /> Back
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          width: "100%",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "5px" }}>
          <Typography variant="h3" gutterBottom>
            Bus Ticket Booking Application
          </Typography>
          <Typography variant="h4" gutterBottom>
            Description
          </Typography>
          <p>
            Application to book bus tickets.It has two interfaces one for user
            and admin. Users has to register and create an account and after the
            authentication process they are permited to access the
            application.They can book tickets.Admins has to login through their
            credentials and can modify and delete tickets{" "}
          </p>
          <a href="https://google.com" style={{ textDecoration: "none" }}>
            Bus Ticket Application{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
