import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/22807-people-morph-flow.json";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "2em",
    marginLeft: "5em",
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "1em",
    marginLeft: "5%",
    marginRight: "15%"
  },
  tableButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "2em",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item>
            <Typography variant="h2" align="left">
              DEMOGAPIC <br /> 
              - Bridging the gap.
            </Typography>
            <Typography variant="subtitle1" align="left">
              Demogapic allows easy access to data so that users can view 
              <br /> the inequality among certain demographics at a global scale 
              <br /> and make change based on the metrics provided.
            </Typography>
            <Button className={classes.tableButton} variant="contained" component={Link} to="/table">
                  Table
                </Button>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
