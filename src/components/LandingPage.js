import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/22807-people-morph-flow.json";
import { makeStyles, useTheme} from "@material-ui/styles";
import { Link } from "react-router-dom";
import {Typography, Button, Grid, Container, Box, useMediaQuery} from "@material-ui/core" 

const useStyles = makeStyles((theme) => ({
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
    <Container maxWidth="lg">
    <Grid container direction="column"> 
    {/* column stacks as column */}
        <Grid container direction="row" justify="center" alignItems="center" style={{minHeight:"100vh"}}>
        {/* Row axis is horizontal because its a row, push to end of container, 
        alignItems aligning everything vertically  */}
          <Grid xs={12} md={6} item>
            <Typography variant="h2" align="left">
              Evidence. Insight. Impact.
            </Typography>
            <Typography variant="subtitle1" align="left">
              Demogapic allows easy access to data so that users can view 
              the inequality among certain demographics at a global scale 
              and make positive change based on the metrics provided.
            </Typography>
            <Button className={classes.tableButton} variant="contained" component={Link} to="/table">
                  Table
                </Button>
          </Grid>
          <Grid xs={12} md={6} item className={classes.lottieContainer}>
            <Lottie options={defaultOptions} height={"300px"} width={"300px"} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default LandingPage;
