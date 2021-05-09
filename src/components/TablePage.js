import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Container, Box } from "@material-ui/core"; //gods for layout

const rows = [
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
  {
    id: 5,
    col1: "River Raymond",
    col2: "81",
    col3: "Male",
    col4: "Retired",
    col5: "Doctor",
    col6: "India",
  },
];

const columns = [
  { field: "col1", headerName: "Name", width: 150 },
  { field: "col2", headerName: "Age", width: 150 },
  { field: "col3", headerName: "Gender", width: 150 },
  { field: "col4", headerName: "Seniority", width: 150 },
  { field: "col5", headerName: "Job Title", width: 150 },
  { field: "col6", headerName: "Country", width: 150 },
];

const TablePage = () => {
  return (
    <Container maxWidth="lg">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    </Container>
  );
};

export default TablePage;
