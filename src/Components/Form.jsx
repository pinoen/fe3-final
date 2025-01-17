import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik";
import * as Yup from 'yup'


const Form = () => {

  const [isSubmit, setIsSubmit] = useState(false)

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(6, 'Full name must be longer than 5 characters. Please verify your data').required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: (data) => {
      setIsSubmit(prev => !prev)
    }
  })

  return (
    <div>
      <form className='form-container' onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={2}
          sx={{ width: "100%" }} >

          <Grid item xs={12} md={8}>
            <TextField
              value={values.name}
              onChange={handleChange}
              name='name'
              type={"text"}
              label="Enter full name"
              variant="outlined"
              error={errors.name}
              helperText={errors.name}
              fullWidth
            />

          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              value={values.email}
              onChange={handleChange}
              name='email'
              type={"email"}
              label="Enter email"
              variant="outlined"
              error={errors.email}
              helperText={errors.email}
              fullWidth
            />

          </Grid>
        </Grid>
        <Button size='large' type='submit' variant='contained' endIcon={<SendIcon />}>Submit</Button>
        {isSubmit ? <Typography variant='h5' color={"primary"} align="center">Thanks {values.name}, we'll contact you as soon as possible by email</Typography> : null}
      </form>
    </div>
  );
};

export default Form;
