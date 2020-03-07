import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "../components/AddBtn";
import { makeStyles } from "@material-ui/core/styles";
import Plants from "../assets/3Plants.png";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  btn: {
    marginTop: theme.spacing(4)
  },
  img:{
    marginTop: theme.spacing(8)
  }
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>Welcome plant lovers!</h2>
        <h3>Time to add a plant!</h3>
        
        <Button
          type="submit"
          href="Name"
          fullWidth
          variant="contained"
          className={classes.btn}
        >
          Add A Plant
        </Button>

        <img className={classes.img} src={Plants} style={{ width: 240 }} alt="plantsImg" />

      </div>
    </Container>
  );
}
