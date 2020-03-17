import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FaceIcon from "@material-ui/icons/Face";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    //width: 500,
    width: "0",
    position: "fixed",
    alignContent: "center",
    bottom: 0
    //marginTop: 150,
  }
});

const Navbar = withRouter(({ history }) => {
  const classes = useStyles();
  
  const [value, setValue] = React.useState("");

  const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#009688" }; //teal
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label=""
        value="Index"
        icon={<HomeIcon />}
        to="/"
        component={Link}
        style={isActive(history, "/")}
      />
      <BottomNavigationAction
        label=""
        value="Name"
        to="/name"
        icon={<AddCircleIcon />}
        component={Link}
        style={isActive(history, "/name")}
      />
      <BottomNavigationAction
        label=""
        value="Profile"
        to="/table"
        icon={<FaceIcon />}
        component={Link}
        style={isActive(history, "/table")}
      />
    </BottomNavigation>
  );
});

export default Navbar;

