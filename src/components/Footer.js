import React, { useContext } from "react";
import { makeStyles } from '@mui/styles';
import { BottomNavigation, BottomNavigationAction, Box, Typography } from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext";
import { LinkedIn, Twitter, Email } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  bottomNavigation: {
    bottom: "0px",
    position: "fixed",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  bottomNavTextBox: {
    paddingLeft: "10px",
    alignItems: "center",
    paddingTop: "16px",
    justifyContent: "center",
  },
  actionItemsBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  actionItems: {
    "& .MuiSvgIcon-root": {
      fill: "black",
      fontSize: "2.0rem",
      
      "&:hover": {
        fontSize: "2.8rem",
      },
    },
  },
}));

const Footer = () => {
  const { theme }  = useContext(ThemeContext)
  const classes = useStyles(theme);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <BottomNavigation showLabels className={classes.bottomNavigation}>
      <Box className={classes.bottomNavTextBox}>
        <Typography align="center">Designed and developed by Arnav Goel</Typography>
      </Box>
      <Box className={classes.bottomNavTextBox}>
        <Typography>
        Copyright © {year} AG
        </Typography>
      </Box>
      <Box className={classes.actionItemsBox}>
        <BottomNavigationAction label = "Linkedin" icon={<LinkedIn />} className={classes.actionItems} />
        <BottomNavigationAction label = "Twitter" icon={<Twitter />} className={classes.actionItems} />
        <BottomNavigationAction label = "Gmail" icon={<Email />} className={classes.actionItems} />
      </Box>
    </BottomNavigation>
  );
};
export default Footer;