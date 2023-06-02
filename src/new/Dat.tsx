import React from "react";
import {
  
  FormControl,
  
  TextField,
  Grid,
  Typography,
  
  Button,
  Stack,
  Paper,
  Container,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import { LocalizationProvider } from "@mui/lab";
import { differenceInDays } from "date-fns";

export default function Dat() {
  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
    },
    onSubmit: async () => {},

    validationSchema: Yup.object().shape({
      startDate: Yup.string().required("Start date is required"),
      endDate: Yup.string().required("End date is required"),
    }),
  });

  const startDate = formik.values.startDate;
  const endDate = formik.values.endDate;
  const noOfDays =
    startDate && endDate
      ? differenceInDays(new Date(endDate), new Date(startDate)) + 1
      : "";
  return (
    <form onSubmit={formik.handleSubmit}>
        <Paper sx={{backgroundColor:"#eedd82",mb:3}}>
        <Typography sx={{ mt: 3, fontSize: 25, ml: 5 }}>Date</Typography>
    <Grid container sx={{mt:6,ml:7}}>
      <Grid item xs={4}>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack>
              <MobileDatePicker
                label={"Start Date"}
                inputFormat="dd/MM/yyyy"
                value={formik.values.startDate}
                minDate={new Date()}
                onChange={(newValue) => {
                  if (newValue) {
                    formik.setFieldValue(
                      "startDate",
                      moment(newValue).format("yyyy-MM-DD")
                    );
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="startDate"
                    sx={{ width: 280 }}
                    size="medium"
                    variant="standard"
                    error={
                      formik.touched?.startDate &&
                      Boolean(formik.errors?.startDate)
                    }
                  ></TextField>
                )}
              ></MobileDatePicker>
            </Stack>
          </LocalizationProvider>
          {formik.touched.startDate && Boolean(formik.errors?.startDate) && (
            <Paper>
              {formik.touched?.startDate && formik.errors?.startDate}
            </Paper>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <MobileDatePicker
                label={"End Date"}
                inputFormat="dd/MM/yyyy"
                value={formik.values.endDate}
                minDate={new Date()}
                onChange={(newValue) => {
                  if (newValue) {
                    formik.setFieldValue(
                      "endDate",
                      moment(newValue).format("yyyy-MM-DD")
                    );
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="endDate"
                    sx={{ width: 280 }}
                    size="medium"
                    variant="standard"
                    error={
                      formik.touched?.endDate && Boolean(formik.errors?.endDate)
                    }
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>
          {formik.touched.endDate && Boolean(formik.errors?.endDate) && (
            <Paper>{formik.touched?.endDate && formik.errors?.endDate}</Paper>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="standard" fullWidth>
          <TextField
            label="No of Days"
            id="days"
            type="text"
            name="no of days"
            value={noOfDays}
            variant="standard"
            sx={{ width: 280 }}
          />
        </FormControl>
      </Grid>
      <br></br>
      <br></br>
      <Container sx={{ml:50,mt:3}}>
      <Button type="submit" variant="contained" sx={{mb:2}}>Submit</Button>
      </Container>
    </Grid>
    </Paper>
    </form>
  );
}
