import {useEffect, useState} from "react";
import {
  Container,
  IconButton,
  TableContainer,
  Toolbar,
  Tooltip,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface SampleData {
    Type0: string;
    Type1: string;
    Type2: string;
    Type3: string;
    Type4: string;
    Type5: string;
  }

export default function Tabl() {
    const [sample, setSample] = useState<SampleData[]>([]);

    useEffect(() => {
        setSample([]);

    }, [])
  return <Container sx={{ mt: 5 }}>
    <Paper sx={{backgroundColor:"#F0E68C",p:1.5,mr:2}}>
    <TableContainer component={Paper}>
        <Toolbar sx={{ m: 1, textAlign: 'center' }}>
          <Tooltip title="New">
            <IconButton
              color="primary"
              size="small"
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Typography sx={{ flex: '1 1 100%' }} variant="h4" component="div">
            Table
          </Typography>
          
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#e7f3fb' }}>
              <TableCell>Item 1</TableCell>
              <TableCell>Item 2</TableCell>
              <TableCell>Item 3</TableCell>
              <TableCell>Item 4</TableCell>
              <TableCell>Item 5</TableCell>
              <TableCell>Item 6</TableCell>
            </TableRow>
          </TableHead>
          {sample.length ? (
            <TableBody>
              {sample?.map((sample, index) => (
                <TableRow key={index}>
                  <TableCell>{sample.Type0}</TableCell>
                  <TableCell>{sample.Type1}</TableCell>
                  <TableCell>{sample.Type2}</TableCell>
                  <TableCell>{sample.Type3}</TableCell>
                  <TableCell>{sample.Type4}</TableCell>
                  <TableCell>{sample.Type5}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={12}>
                  <Paper>No Data Available</Paper>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      </Paper>
  </Container>;
}
