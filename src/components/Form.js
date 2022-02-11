
import React from 'react';
import content from './static.js/index';
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Schema from '../helpers/Schema'
import axios from 'axios';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Form(props) {


  const { register, reset, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) => {

    axios.post('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users')
        .then((res) => {
          console.log("-------------->>>",res.data)
        })
        .catch((err) => console.log(err))
    
    
    reset();
    console.log(data)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography component="h2" variant="h4">Sign In</Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt:1}}>
            {content.inputs.map((input, key) => {
              return(
              <Box key={key}>
                  <TextField
                  autoFocus
                  margin="normal"
                  required
                  fullWidth
                  label={input.name}
                  name={input.name} 
                  className="input" 
                  type={input.type}
                  {...register(`${input.name}`, {required: true})}
                  />
              <p>{errors[input.name]?.message}</p>
              </Box>
              );
            })}
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Email Consent"
              name="emailConsent"
              {...register("emailConsent", {required : false})}
            />
            <p>{errors.emailConsent ? errors.emailConsent.message : " "}</p>
            <Button 
            type="submit" 
            fullWidth variant="contained" 
            sx={{ mt: 3, mb: 2 }}
            >
            Submit
            </Button>
            <Button 
            type="reset" 
            fullWidth variant="contained" 
            sx={{ mt: 3, mb: 2 }}
            >
            Clear
            </Button>
            </Box> 
          </Box>
      </Container>
    </ThemeProvider>
  );
};