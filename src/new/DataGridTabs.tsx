import { FC, useState } from "react";
import * as React from "react";
import { Box } from "@mui/material";
import {
  Card,
  TableRow,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Tooltip,
  IconButton,
  useTheme,
  Button,
  CardHeader,
  Divider,
  CardContent,
  Typography,
  Paper,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import RedeemIcon from "@mui/icons-material/Redeem";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import HistoryIcon from "@mui/icons-material/History";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function DataGridTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const headdata = [
    {
      salarydata: "BP",
      amount: 562235,
    },
    {
      salarydata: "CA",
      amount: 425647,
    },
    {
      salarydata: "LTA",
      amount: 25469,
    },
    {
      salarydata: "SP",
      amount: 25698,
    },
    {
      salarydata: "GROSS",
      amount: 9875,
    },
    {
      salarydata: "CTC",
      amount: 1256,
    },
  ];

  const tablecard = (
    <Card sx={{ marginLeft: "120px" }}>
      <TableContainer>
        <Table>
          {headdata?.map((role, index) => {
            return (
              <TableRow key={index}>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {role.salarydata}
                </TableCell>

                <TableCell
                  sx={{
                    width: "370px",
                    textAlign: "right",
                  }}
                >
                  {role.amount}
                </TableCell>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </Card>
  );
  const tabledata = [
    {
      empcode: 1,
      name: "nevile",
      ctc: "morgan",
      nextrevision: 256,
      designation: "employee",
      confirmation: "yes",
      reason: "test",
    },
    {
      empcode: 1,
      name: "nevile",
      ctc: "morgan",
      nextrevision: 256,
      designation: "employee",
      confirmation: "yes",
      reason: "test",
    },
    {
      empcode: 2,
      name: "nevile",
      ctc: "morgan",
      nextrevision: 256,
      designation: "employee",
      confirmation: "yes",
      reason: "test",
    },
    {
      empcode: 3,
      name: "nevile",
      ctc: "morgan",
      nextrevision: 256,
      designation: "employee",
      confirmation: "yes",
      reason: "test",
    },
    {
      empcode: 4,
      name: "nevile",
      ctc: "morgan",
      nextrevision: 256,
      designation: "employee",
      confirmation: "yes",
      reason: "test",
    },
  ];

  const theme = useTheme();
  const [firstcard, setfirstcard] = useState(true);
  const [secondcard, setsecondcard] = useState(false);
  const [thirdcard, setthirdcard] = useState(true);
  const hidecardfunction = () => {
    setsecondcard(true);
    setfirstcard(false);
    setthirdcard(true);
  };
 

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }
  // `/users/${params.row.id}`
  function renderNameCell(params: any) {
    return <a href="#">{params.value}</a>;
  }
  const columns = [
    { field: "id", headerName: "Emp Code", width: 100 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "designation", headerName: "Designation", width: 150 },
    { field: "ctc", headerName: "Ctc", width: 250 },
    { field: "nextrevision", headerName: "Next Revision", width: 250 },
    { field: "confirmation", headerName: "Confirmation", width: 250 },
    { field: "reason", headerName: "Reason", width: 250 },
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: renderNameCell,
    },
  ];

  const rows = [
    {
      id: "1",
      name: "Jerry",
      designation: "Senior Software Engineer",
      ctc: "150000",
      nextrevision: "12/03/2023",
      confirmation: "Yes",
      reason: "Test",
      actions: (
        <Tooltip title="Show History" arrow>
          <IconButton
            sx={{
              "&:hover": {
                background: theme.palette.primary.light,
              },
              color: theme.palette.primary.main,
            }}
            color="inherit"
            size="small"
            onClick={() => hidecardfunction()}
          >
            <HistoryIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      ),
    },
    {
      id: "2",
      name: "Jacob",
      designation: "Software Intern",
      ctc: "12000",
      nextrevision: "12/03/2023",
      confirmation: "No",
      reason: "Test",
      actions: "Icon",
    },
    {
      id: "3",
      name: "Akhila",
      designation: "Software Engineer",
      ctc: "12000",
      nextrevision: "12/03/2023",
      confirmation: "Yes",
      reason: "Test",
      actions: "Icon",
    },
    {
      id: "4",
      name: "Sachin",
      designation: "Software Engineer",
      ctc: "35000",
      nextrevision: "12/03/2023",
      confirmation: "Yes",
      reason: "Test",
      actions: "Icon",
    },
    {
      id: "5",
      name: "Divya",
      designation: "Software Engineer",
      ctc: "150000",
      nextrevision: "12/03/2023",
      confirmation: "Yes",
      reason: "Test",
      actions: "Icon",
    },
  ];

  return (
    <div>
      <Paper sx={{ backgroundColor: "#eedd82", p:1.5,mr:2,mt:3 }}>
        {firstcard && (
          <Card sx={{ margin: 4, marginTop: "35px" }}>
            <CardHeader title="Payscale View" />
            <Divider />
            <Grid
              md={12}
              container
              spacing={0}
              justifyContent="space-around"
              sx={{ marginTop: 4, marginBottom: 4 }}
            >
              <Grid container md={3} justifyContent="space-around">
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<RedeemIcon />}
                  >
                    Appraisal
                  </Button>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<ThumbUpAltIcon />}
                  >
                    Confirmation
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={4} md={8} textAlign="right"></Grid>
            </Grid>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Emp Code</TableCell>

                  <TableCell sx={{ cursor: "pointer" }}></TableCell>

                  <TableCell sx={{ cursor: "pointer" }}></TableCell>
                  <TableCell>Ctc</TableCell>

                  <TableCell sx={{ cursor: "pointer" }}></TableCell>
                  <TableCell>Confirmation</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata?.map((role, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{role.empcode}</TableCell>
                      <TableCell>{role.name}</TableCell>
                      <TableCell>{role.designation}</TableCell>
                      <TableCell>{role.ctc}</TableCell>
                      <TableCell>{role.nextrevision}</TableCell>
                      <TableCell>{role.confirmation}</TableCell>
                      <TableCell>{role.reason}</TableCell>
                      <TableCell align="right">
                        <Tooltip title="Show History" arrow>
                          <IconButton
                            sx={{
                              "&:hover": {
                                background: theme.palette.primary.light,
                              },
                              color: theme.palette.primary.main,
                            }}
                            color="inherit"
                            size="small"
                            onClick={() => hidecardfunction()}
                          ></IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
        )}
        {thirdcard && (
          <Card sx={{ margin: 4, marginTop: "35px" }}>
            <Grid md={12}>
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  density="compact"
                  slots={{
                    toolbar: CustomToolbar,
                  }}
                />
              </div>
            </Grid>
          </Card>
        )}
        {secondcard && (
          <div>
            <Card sx={{ margin: 4, marginTop: "35px", padding: "10px" }}>
              <Table style={{ padding: "0px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2} style={{ paddingTop: "0px" }}>
                      <CardHeader
                        title="Salary Revision View"
                        sx={{ fontWeight: 700, color: "#223354;" }}
                      />
                    </TableCell>
                    <TableCell colSpan={1} align="right">
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<ArrowBackIosNewIcon />}
                      >
                        Go Back
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <CardContent>
                <Card sx={{ margin: 4, marginTop: "25px", padding: -1 }}>
                  <Grid container justifyContent={"space-evenly"}>
                    <Grid item xs={3}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Employee Code : TT2563
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Department : Hr
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent={"space-evenly"} marginTop={2}>
                    <Grid item xs={3}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Employee Name : John Doe
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Confirmation : Yes
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent={"space-evenly"} marginTop={2}>
                    <Grid item xs={3}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Designation : Staff
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Next Revision : 23/12/2024
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
                <Card sx={{ margin: 4, marginTop: "20px", padding: "10px" }}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      bgcolor: "background.paper",
                      display: "flex",
                      // height: 500
                    }}
                  >
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={value}
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                      sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        height: 180,
                        color: "green",
                      }}
                    >
                      <Tab
                        label="20/12/2023"
                        {...a11yProps(0)}
                        sx={{
                          "&.Mui-selected": {
                            backgroundColor: "#1189E6",
                            color: "#ffffff",
                          },
                        }}
                      />
                      <Tab
                        label="20/12/2022"
                        {...a11yProps(1)}
                        sx={{
                          "&.Mui-selected": {
                            backgroundColor: "#1189E6",
                            color: "#ffffff",
                          },
                        }}
                      />
                      <Tab
                        label="20/12/2021"
                        {...a11yProps(2)}
                        sx={{
                          "&.Mui-selected": {
                            backgroundColor: "#1189E6",
                            color: "#ffffff",
                          },
                        }}
                      />
                      <Tab
                        label="20/12/2020"
                        {...a11yProps(3)}
                        sx={{
                          "&.Mui-selected": {
                            backgroundColor: "#1189E6",
                            color: "#ffffff",
                          },
                        }}
                      />
                      <Tab
                        label="Show All"
                        {...a11yProps(4)}
                        sx={{
                          "&.Mui-selected": {
                            backgroundColor: "#1189E6",
                            color: "#ffffff",
                          },
                        }}
                      />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                      {tablecard}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      {tablecard}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      {tablecard}
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      {tablecard}
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                      No More Records
                    </TabPanel>
                  </Box>
                </Card>
              </CardContent>
            </Card>
          </div>
        )}
      </Paper>
    </div>
  );
}
