import { Container, Grid } from "@mui/material";
import AutComp from "./new/AutComp";
import DropDow from "./new/DropDow";
import Tabl from "./new/Tabl";
import Dat from "./new/Dat";
import DataGridTabs from "./new/DataGridTabs";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          {/* AutoComplete */}
          
            
          <AutComp />
        </Grid>

        <Grid item xs={6}>
          {/* Dropdown */}
          
          <DropDow />
        </Grid>

        <Grid item xs={12}>
          {/* Table */}

          <Tabl />
        </Grid>
        <Grid item xs={12}>
          {/* Date */}
          
          <Dat />
        </Grid>
        <Grid item xs={12}>
          {/* DataGridTabs */}
          
          <DataGridTabs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
