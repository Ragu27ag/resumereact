import { Box, Divider, List, ListItem, ToggleButton } from "@mui/material";
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
import ScrollAnimation from "react-animate-on-scroll";

import cert from "./vector-cartoon-certificate-icon-comic-style-removebg-preview.png";

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
        backgroundColor: selected ? "#121212" : "#5cdb95",
        color: selected ? "white" : "#05386b",

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
          right: "10px",
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
      <div
        className="certdiv"
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <div style={{ zIndex: "1" }}>
          <h3
            variant="h3"
            m={2}
            style={{ margin: "0.5em" }}
            gutterBottom
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            Certifications
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#05386b",
                height: "5px",
                width: "130px",
              }}
            />
          </h3>

          <List>
            <ScrollAnimation animateIn="bounceInRight" duration={1}>
              <ListItem>
                <WorkspacePremiumIcon sx={{ fontSize: "25px" }} />
                &nbsp;
                <p
                  data-aos="fade-up-left"
                  data-aos-duration="1500"
                  // className={selected ? "overflow" : "overflownormal"}
                  style={{
                    color: selected ? "white" : "#05386b",
                    fontFamily: "serif",
                    fontWeight: "bolder",
                    fontSize: "1rem",
                    margin: 0,
                  }}
                >
                  Completed ASNT-NDT Level 2 (PT,RT,UT,MPT) and a NDT Technician
                  - <span>2021</span>
                </p>
              </ListItem>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight" duration={1.5}>
              <ListItem>
                <WorkspacePremiumIcon sx={{ fontSize: "25px" }} /> &nbsp;
                <p
                  data-aos="fade-up-left"
                  data-aos-duration="2500"
                  style={{
                    color: selected ? "white" : "#05386b",
                    fontFamily: "serif",
                    fontWeight: "bolder",
                    fontSize: "1rem",
                    display: "inline-block",
                    margin: 0,
                  }}
                  // className={selected ? "overflow" : "overflownormal"}
                >
                  Completed Full Stack Development in JAVA - <span>2022</span>
                </p>
              </ListItem>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight" duration={1.9}>
              <ListItem>
                <WorkspacePremiumIcon sx={{ fontSize: "25px" }} /> &nbsp;
                <p
                  data-aos="fade-up-left"
                  data-aos-duration="2500"
                  style={{
                    color: selected ? "white" : "#05386b",
                    fontFamily: "serif",
                    fontWeight: "bolder",
                    fontSize: "1rem",
                    display: "inline-block",
                    margin: 0,
                  }}
                  // className={selected ? "overflow" : "overflownormal"}
                >
                  Completed MERN Stack Development - <span>2023</span>
                </p>
              </ListItem>
            </ScrollAnimation>
          </List>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "0px",
            right: "3px",
            zIndex: "0",
            display: selected && "none",
          }}
        >
          <img src={cert} alt="cert" height={300} width={300} />
        </div>
      </div>

      <div className={selected ? "div1" : "div1normal"}>
        <ScrollAnimation animateIn="bounceInLeft" duration={2}>
          <h3
            variant="h3"
            style={{
              margin: "0.5em",
            }}
            gutterBottom
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Academic Details
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#05386b",
                height: "5px",
                width: "170px",
              }}
            />
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
              sx={{
                padding: "2px",
                margin: "2px",
                maxWidth: 400,
              }}
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
                          backgroundColor: selected ? "#121212" : "#5cdb95",
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
                          backgroundColor: selected ? "#121212" : "#8ee4af",
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
                          backgroundColor: selected ? "#121212" : "#5cdb95",
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
        </ScrollAnimation>
        <div
          className={
            selected ? "designnameacademic" : "normaldesignnameacademic"
          }
        ></div>
        <div
          className={
            selected ? "design1nameacademic" : "normaldesign1nameacademic"
          }
        ></div>
        <div
          className={
            selected ? "design2nameacademic" : "normaldesign2nameacademic"
          }
        ></div>
      </div>
      <br />
      <Divider />
      <br />

      <br />
      <Divider />
      <br />
      <div
        style={{
          minHeight: "50vh",
        }}
      >
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
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#05386b",
                height: "5px",
                width: "30px",
              }}
            />
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                marginTop: "10px",
                minWidth: "280px",
                border: "1px solid grey",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: selected ? "#121212" : "#8ee4af",
              }}
            >
              <h3 variant="h6" style={{ margin: "0.5em" }} m={2} gutterBottom>
                FrontEnd
              </h3>
              <Divider
                variant="middle"
                sx={{ backgroundColor: "#05386b", height: "2px" }}
              />
              <ScrollAnimation animateIn="fadeInDown" duration={3}>
                <List>
                  <ListItem
                    sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}
                  >
                    <HtmlIcon />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      data-aos="fade-up-left"
                      data-aos-duration="2000"
                      style={{
                        margin: "0px",

                        color: selected ? "white" : "#05386b",
                        fontFamily: "serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      HTML
                    </p>
                  </ListItem>

                  <ListItem
                    sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}
                  >
                    <CssIcon />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      data-aos="fade-up-left"
                      data-aos-duration="2000"
                      style={{
                        margin: "0px",

                        color: selected ? "white" : "#05386b",
                        fontFamily: "serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      CSS
                    </p>
                  </ListItem>

                  <ListItem
                    sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}
                  >
                    <JavascriptIcon />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      data-aos="fade-up-left"
                      data-aos-duration="2000"
                      style={{
                        margin: "0px",

                        color: selected ? "white" : "#05386b",
                        fontFamily: "serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      JavaScript
                    </p>
                  </ListItem>

                  <ListItem
                    sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}
                  >
                    <JavascriptIcon />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      data-aos="fade-up-left"
                      data-aos-duration="2000"
                      style={{
                        margin: "0px",

                        color: selected ? "white" : "#05386b",
                        fontFamily: "serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      React.js
                    </p>
                  </ListItem>
                </List>
              </ScrollAnimation>
            </div>
            <div
              style={{
                marginTop: "10px",
                minWidth: "280px",
                border: "1px solid grey",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: selected ? "#121212" : "#8ee4af",
              }}
            >
              <h3 variant="h6" style={{ margin: "0.5em" }} m={2}>
                Backend
              </h3>
              <Divider
                variant="middle"
                sx={{ backgroundColor: "#05386b", height: "2px" }}
              />
              <ScrollAnimation animateIn="fadeInDown" duration={3}>
                <List>
                  <ListItem
                    sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}
                  >
                    <FreeBreakfastIcon />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      data-aos="fade-up-left"
                      data-aos-duration="2000"
                      style={{
                        margin: "0px",

                        color: selected ? "white" : "#05386b",
                        fontFamily: "serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      JAVA & ADV JAVA
                    </p>
                  </ListItem>
                  <ListItem
                    sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}
                  >
                    <JavascriptIcon />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      data-aos="fade-up-left"
                      data-aos-duration="2000"
                      style={{
                        margin: "0px",

                        color: selected ? "white" : "#05386b",
                        fontFamily: "serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      Node JS
                    </p>
                  </ListItem>
                </List>
              </ScrollAnimation>
            </div>
            <div
              style={{
                marginTop: "10px",
                minWidth: "280px",
                border: "1px solid grey",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: selected ? "#121212" : "#8ee4af",
              }}
            >
              <h3 variant="h6" style={{ margin: "0.5em" }} m={2}>
                DataBase
              </h3>
              <Divider
                variant="middle"
                sx={{ backgroundColor: "#05386b", height: "2px" }}
              />
              <ScrollAnimation animateIn="fadeInDown" duration={3}>
                <List>
                  <ListItem
                    sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}
                  >
                    <StorageIcon />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      data-aos="fade-up-left"
                      data-aos-duration="1000"
                      style={{
                        margin: "0px",

                        color: selected ? "white" : "#05386b",
                        fontFamily: "serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      Oracle SQL and PLSQL
                    </p>
                  </ListItem>
                  <ListItem
                    sx={{ padding: "0px 0px 0px 15px", margin: "0.5em" }}
                  >
                    <CloudDoneIcon />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      // data-aos="fade-up-left"
                      // data-aos-duration="1000"
                      style={{
                        margin: "0px",

                        color: selected ? "white" : "#05386b",
                        fontFamily: "serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      MongoDB
                    </p>
                  </ListItem>
                </List>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "70px" }}></div>
    </Box>
  );
};

export default About;
