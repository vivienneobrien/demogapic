import { createMuiTheme } from '@material-ui/core/styles';

const gradient = 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)';

const blue = "#2196f3";
const orange = "#ff9100";
const theme = createMuiTheme ({
    palette: {
          common: {
              blue: `${blue}`,
              orange: `${orange}`
          },
          primary: {
              main: `${blue}`,
              mainGradient: `${gradient}`
          },
          secondary: {
              main: `${orange}`
          }
      },
      typography: {
          h2: {
              fontWeight: 700,
              fontSize: "2.5rem",
              color: `${blue}`,
              lineHeight: 1.5
          }
      }
    })
    export default theme