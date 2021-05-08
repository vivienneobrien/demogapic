
import React from 'react';
import Header from './ui/Header'
import {ThemeProvider} from '@material-ui/styles'
import theme from './ui/Theme'
import {BroswerRouter, BrowserRouter, Route, Switch} from "react-router-dom"
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
} from "@material-ui/data-grid";
import LandingPage from "../components/LandingPage"



const rows: GridRowsProp = [
  {
    id: 1,
    col1: "Laura Bean",
    col2: "32",
    col3: "Female",
    col4: "Manager",
    col5: "Senior Engineer",
    col6: "United Kingdom",
  },
  {
    id: 2,
    col1: "Paulo Stoe",
    col2: "27",
    col3: "Male",
    col4: "Junior",
    col5: "Junior Engineer",
    col6: "Spain",
  },
  {
    id: 3,
    col1: "Sarah McAskill",
    col2: "60",
    col3: "Non-Binary",
    col4: "Mid-Level",
    col5: "Shop Assistant",
    col6: "France",
  },
  {
    id: 4,
    col1: "Jim Brown",
    col2: "45",
    col3: "Other",
    col4: "Manager",
    col5: "Senior Engineer",
    col6: "Ireland",
  },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Name", width: 150 },
  { field: "col2", headerName: "Age", width: 150 },
  { field: "col3", headerName: "Gender", width: 150 },
  { field: "col4", headerName: "Seniority", width: 150 },
  { field: "col5", headerName: "Job Title", width: 150 },
  { field: "col6", headerName: "Country", width: 150 },
];
function App() {


  return (
    
    <div>
    

    <ThemeProvider theme={theme}> 
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact="true" path="/" component={LandingPage}/>
        <Route exact="true" path="/table" 
        component={() => 
        <div style={{ height: 300, width: "80%", margin: "10rem", marginTop: "5rem"}}>
          <DataGrid
            rows={rows}
            columns={columns}
            componenets={{
              Toolbar: GridToolbar,
            }}
          />
        </div>}/>

      </Switch>
    </BrowserRouter>
   
    </ThemeProvider>
    
    </div>
  ); 
}

export default App;


