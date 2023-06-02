import { useState } from "react";
import {
  Grid,
  FormControl,
  Autocomplete,
  TextField,
  Container,
  Box,
  Button,
  Card,
  Paper,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Request {
  value: string;
  label: string;
}

export default function AutComp() {
  const [selectedRequest, setSelectedRequest] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      requesttype: "",
    },
    onSubmit: async () => {},

    validationSchema: Yup.object().shape({
      requesttype: Yup.string().required("Request Type is required"),
    }),
  });

  const handleRequestChange = (newInputValue: string) => {
    setSelectedRequest(newInputValue);
  };

  const Requests: Request[] = [
    { value: "One", label: "Item 1" },
    { value: "Two", label: "Item 2" },
    { value: "Three", label: "Item 3" },
    { value: "Four", label: "Item 4" },
    { value: "Five", label: "Item 5" },
  ];
  console.log(selectedRequest);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper sx={{backgroundColor:"#F0E68C",p:1.5,mr:2,mt:3}}>
      <Typography sx={{ mt: 3, fontSize: 25, ml: 5 }} >AutoComplete</Typography>
        <Container sx={{ mt: 5 }}>
          <Grid container>
            <Grid item xs={6}>
              <FormControl variant="standard" fullWidth>
                <Autocomplete
                  id="requesttype"
                  onChange={(event: any, newValue) => {
                    formik.setFieldValue("requesttype", newValue?.value);
                  }}
                  onInputChange={(event, newInputValue) => {
                    handleRequestChange(newInputValue);
                  }}
                  options={Requests}
                  getOptionLabel={(options: any) => options?.label}
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  renderOption={(props, option) => {
                    return (
                      <li {...props} key={option.value}>
                        {option.label}
                      </li>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select an Request Type"
                      variant="standard"
                      error={
                        formik.touched?.requesttype &&
                        Boolean(formik.errors?.requesttype)
                      }
                      sx={{
                        "& .css-ptiqhd-MuiSvgIcon-root": {
                          fontSize: "0.90rem",
                        },
                      }}
                    />
                  )}
                />
              </FormControl>
              {formik.touched?.requesttype &&
                Boolean(formik.errors?.requesttype) && (
                  <Card>
                    {formik.touched?.requesttype && formik.errors?.requesttype}
                  </Card>
                )}
              <Box sx={{ textAlign: "center", m: 3, mt: 5 }}>
                <Button type="submit" variant="contained">
                  submit
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Container>
      </Paper>
    </form>
  );
}
