
import React from 'react';
import Header from './ui/Header'
import {ThemeProvider} from '@material-ui/styles'
import theme from './ui/Theme'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "../components/LandingPage"
import TablePage from "../components/TablePage"


function App() {


  return (
    
    <div>
    

    <ThemeProvider theme={theme}> 
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact="true" path="/" component={LandingPage}/>
        <Route exact="true" path="/table" 
        component={() => <TablePage/>}/>
      </Switch>
    </BrowserRouter>
   
    </ThemeProvider>
    
    </div>
  ); 
}

export default App;


