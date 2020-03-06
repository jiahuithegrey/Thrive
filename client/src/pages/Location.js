import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Aloe from "../assets/aloe.png";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }
}));

export default function Location(props) {
  const [location, setLocation] = useState("");

  function updateInput(event) {
    setLocation(event.target.value);
  }

  function saveLocation() {
    localStorage.setItem("plantLocation", location);
    props.history.push("Type");
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h1>Where's the location of this plant?</h1>

        <form>
          <TextField
            id="filled-basic"
            placeholder="i.e. kitchen"
            label=""
            variant="filled"
            onChange={updateInput}
            required
          />
        </form>

        <Button onClick={saveLocation} />
        <img src={Aloe} style={{ width: 130 }} alt="" />
      </div>
    </Container>
  );
}
