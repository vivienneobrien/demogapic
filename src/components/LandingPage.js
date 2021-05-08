import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}));

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
    <Grid container direction="column">
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item>
            <Typography variant="h2" align="left">
              Demogapics is bridging the gaps
              <br /> between minority groups
              {/* Demogapics allows for easy access to data to view the inequality
              <br /> among certain demographics at a global scale */}
            </Typography>
          </Grid>
          <Grid sm item>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;

