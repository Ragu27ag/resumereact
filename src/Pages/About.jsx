import {
  Box,
  Divider,
  List,
  ListItem,
  ToggleButton,
  Typography,
} from "@mui/material";
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
import "./About.css";
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
        color: "white",
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundImage: selected
          ? ""
          : 'url("https://img.freepik.com/free-vector/dark-blue-gradient-background_78370-2078.jpg")',
      }}
    >
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
        sx={{ color: "white", position: "absolute", right: "10px" }}
      >
        {selected ? (
          <DarkModeIcon sx={{ backgroundColor: "white" }} />
        ) : (
          <LightModeIcon color="white" />
        )}
      </ToggleButton>
      <Link
        to="/"
        style={{ textDecoration: "none", padding: "4px", color: "white" }}
      >
        <ArrowCircleLeftIcon sx={{ fontSize: "20px" }} /> Back
      </Link>

      <Typography
        variant="h3"
        m={2}
        gutterBottom
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Academic Details
      </Typography>
      <TableContainer component={Paper} sx={{ padding: "2px", margin: "2px" }}>
        <Table
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          sx={{ minWidth: 400, backgroundColor: "#faa2a5" }}
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
                  sx={{ color: "red" }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell sx={{ color: "red" }} align="center">
                  {row.calories}
                </StyledTableCell>
                <StyledTableCell sx={{ color: "red" }} align="center">
                  {row.fat}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Divider />
      <br />
      <div>
        <Typography
          variant="h3"
          m={2}
          gutterBottom
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          Certifications
        </Typography>
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          <WorkspacePremiumIcon sx={{ fontSize: "25px" }} />
          &nbsp;
          <p
            data-aos="fade-up-left"
            data-aos-duration="1500"
            className="overflow"
          >
            Completed ASNT-NDT Level 2 (PT,RT,UT,MPT) and a NDT Technician -{" "}
            <span>2021</span>
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          <WorkspacePremiumIcon sx={{ fontSize: "25px" }} /> &nbsp;
          <p
            data-aos="fade-up-left"
            data-aos-duration="2500"
            style={{ display: "inline-block", color: "red" }}
            className="overflow"
          >
            Completed Full Stack Development in JAVA - <span>2022</span>
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          <WorkspacePremiumIcon sx={{ fontSize: "25px" }} /> &nbsp;
          <p
            data-aos="fade-up-left"
            data-aos-duration="2500"
            style={{ display: "inline-block", color: "red" }}
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
        <Typography
          variant="h3"
          data-aos="fade-left"
          data-aos-duration="1500"
          m={2}
          gutterBottom
        >
          Skills
        </Typography>
        <Typography variant="h6" m={2} gutterBottom>
          FrontEnd
        </Typography>
        <List>
          <ListItem sx={{ padding: "0px 0px 0px 15px" }}>
            <HtmlIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{ margin: "0px", color: "red" }}
            >
              HTML
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px" }}>
            <CssIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{ margin: "0px", color: "red" }}
            >
              CSS
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px" }}>
            <JavascriptIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{ margin: "0px", color: "red" }}
            >
              JavaScript
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px" }}>
            <JavascriptIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{ margin: "0px", color: "red" }}
            >
              React.js
            </p>
          </ListItem>
        </List>
        <Typography variant="h6" m={2}>
          Backend
        </Typography>
        <List>
          <ListItem sx={{ padding: "0px 0px 0px 15px" }}>
            <FreeBreakfastIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{ margin: "0px", color: "red" }}
            >
              JAVA & ADV JAVA(servlet,jsp,JDBC)
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px" }}>
            <JavascriptIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              style={{ margin: "0px", color: "red" }}
            >
              Node JS
            </p>
          </ListItem>
        </List>
        <Typography variant="h6" m={2}>
          DataBase
        </Typography>
        <List>
          <ListItem sx={{ padding: "0px 0px 0px 15px" }}>
            <StorageIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              data-aos="fade-up-left"
              data-aos-duration="1000"
              style={{ margin: "0px", color: "red" }}
            >
              Oracle SQL and PLSQL
            </p>
          </ListItem>
          <ListItem sx={{ padding: "0px 0px 0px 15px" }}>
            <CloudDoneIcon />
            &nbsp;&nbsp;&nbsp;
            <p
              // data-aos="fade-up-left"
              // data-aos-duration="1000"
              style={{ margin: "0px", color: "red" }}
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
