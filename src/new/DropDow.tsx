import { Container, FormControl, InputLabel, Paper, Select,MenuItem, Button, Typography } from '@mui/material'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function DropDow() {
    const formik = useFormik({
        initialValues: {
          Type: ''
        },
        onSubmit: async () => {},
    
        validationSchema: Yup.object().shape({
          Type: Yup.string().required('Select a data')
        })
      });

    const Type = [
        { key: 'Sample1', value: 'Sample Data1' },
        { key: 'Sample2', value: 'Sample Data2' },
        { key: 'Sample3', value: 'Sample Data3' },
        { key: 'Sample4', value: 'Sample Data4' }
      ];
  return (
    <form onSubmit={formik.handleSubmit}>
        <Paper sx={{backgroundColor:"#FFA07A",p:3,mt:3}}>
        <Typography sx={{ mt: 3, fontSize: 25, ml: 5 }}>Dropdown</Typography>
    <Container sx={{ mt: 5 }}>
        <FormControl variant='standard' sx={{width:280}}>
            <InputLabel>Type</InputLabel>
            <Select
            type="text"
            label="Type"
            name="Type"
            onChange={formik.handleChange}
            error={
              formik.touched?.Type &&
              Boolean(formik.errors?.Type)
            }>
                {Type?.map((Type, index) => (
                    <MenuItem key={index} value={Type.key}>
                      {Type.value}
                    </MenuItem>
                  ))}
            </Select>
            {formik.touched.Type &&
                Boolean(formik.errors?.Type) && (
                  <Paper>
                    {formik.touched?.Type && formik.errors?.Type}
                  </Paper>
                )}
        </FormControl>
        <br></br>
        <br></br>
        <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ mr: 2, mt: 3 }}
            >
              Submit
            </Button>
    </Container>
    </Paper>
    </form>
  )
}

