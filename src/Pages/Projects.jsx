import { Typography } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      style={{ backgroundColor: "black", height: "100%", minHeight: "100vh" }}
    >
      <div>
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
        // style={{
        //   color: "white",
        //   display: "flex",
        //   flexWrap: "wrap",
        //   justifyContent: "center",
        //   alignItems: "center",

        // }}
        style={{
          color: "white",
          margin: "20px",
        }}
      >
        <Typography variant="h3" gutterBottom>
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
        </a>
      </div>
    </div>
  );
};

export default Projects;
