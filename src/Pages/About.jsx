import { Box, Divider, List, ListItem, ToggleButton, h3 } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import "../CSS/About.css";
import { Link } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const About = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("BMC Matric hr sec school", "SSLC", 92),
    createData("Sri Krishna matric school", "Higher secondary", 78),
    createData("Panimalar Engineering College", "BE Mechanical", 66),
  ];

  const [selected, setSelected] = React.useState(false);

  console.log(selected);

  return (
    <Box
      sx={{
        backgroundColor: selected && "#121212",
        color: selected ? "white" : "#121212",
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        // backgroundImage: selected
        //   ? ""
        //   : 'url("https://img.freepik.com/free-vector/dark-blue-gradient-background_78370-2078.jpg")',
      }}
    >
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

      <h3
        variant="h3"
        style={{ margin: "0.5em" }}
        gutterBottom
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Academic Details
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ padding: "2px", margin: "2px", maxWidth: 400 }}
        >
          <Table
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            sx={{
              backgroundColor: selected ? "#121212" : "white",
            }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Institutions</StyledTableCell>
                <StyledTableCell align="center">Grade</StyledTableCell>
                <StyledTableCell align="center">Percentage</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    sx={{
                      color: selected ? "white" : "#121212",
                      fontFamily: "serif",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      color: selected ? "white" : "#121212",
                      fontFamily: "serif",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    align="center"
                  >
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      color: selected ? "white" : "#121212",
                      fontFamily: "serif",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    align="center"
                  >
                    {row.fat}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <br />
      <Divider />
      <br />
      <div>
        <h3
          variant="h3"
          m={2}
          style={{ margin: "0.5em" }}
          gutterBottom
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          Certifications
        </h3>
        <div style={{ display: "flex", flexWrap: "nowrap", margin: "0.5em" }}>
          <WorkspacePremiumIcon sx={{ fontSize: "25px" }} />
          &nbsp;
          <p
            data-aos="fade-up-left"
            data-aos-duration="1500"
            className="overflow"
            style={{
              color: selected ? "white" : "#121212",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Completed ASNT-NDT Level 2 (PT,RT,UT,MPT) and a NDT Technician -{" "}
            <span>2021</span>
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "nowrap", margin: "0.5em" }}>
          <WorkspacePremiumIcon sx={{ fontSize: "25px" }} /> &nbsp;
          <p
            data-aos="fade-up-left"
            data-aos-duration="2500"
            style={{
              color: selected ? "white" : "#121212",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: "1rem",
              display: "inline-block",
            }}
            className="overflow"
          >
            Completed Full Stack Development in JAVA - <span>2022</span>
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "nowrap", margin: "0.5em" }}>
          <WorkspacePremiumIcon sx={{ fontSize: "25px" }} /> &nbsp;
          <p
            data-aos="fade-up-left"
            data-aos-duration="2500"
            style={{
              color: selected ? "white" : "#121212",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: "1rem",
              display: "inline-block",
            }}
            className="overflow"
          >
            Completed MERN Stack Development - <span>2023</span>
          </p>
        </div>
      </div>
      <br />
      <Divider />
      <br />
      <div>
        <h3
          variant="h3"
          data-aos="fade-left"
          data-aos-duration="1500"
          m={2}
          gutterBottom
          style={{ margin: "0.5em" }}
        >
          Skills
        </h3>
        <h3 variant="h6" style={{ margin: "0.5em" }} m={2} gutterBottom>
          FrontEnd
        </h3>
        <List>
          <ListItem sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}>
            <HtmlIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{
                margin: "0px",
                color: "red",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              HTML
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}>
            <CssIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{
                margin: "0px",
                color: "red",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              CSS
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}>
            <JavascriptIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{
                margin: "0px",
                color: "red",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              JavaScript
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}>
            <JavascriptIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{
                margin: "0px",
                color: "red",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              React.js
            </p>
          </ListItem>
        </List>
        <h3 variant="h6" style={{ margin: "0.5em" }} m={2}>
          Backend
        </h3>
        <List>
          <ListItem sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}>
            <FreeBreakfastIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{
                margin: "0px",
                color: "red",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              JAVA & ADV JAVA
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}>
            <JavascriptIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{
                margin: "0px",
                color: "red",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Node JS
            </p>
          </ListItem>
        </List>
        <h3 variant="h6" style={{ margin: "0.5em" }} m={2}>
          DataBase
        </h3>
        <List>
          <ListItem sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}>
            <StorageIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="1000"
              style={{
                margin: "0px",
                color: "red",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Oracle SQL and PLSQL
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}>
            <CloudDoneIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              // data-aos="fade-up-left"
              // data-aos-duration="1000"
              style={{
                margin: "0px",
                color: "red",
                color: selected ? "white" : "#121212",
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              MongoDB
            </p>
          </ListItem>
        </List>
      </div>
      <div style={{ height: "70px" }}></div>
    </Box>
  );
};

export default About;
