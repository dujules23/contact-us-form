
import React from 'react';
import content from './static.js/index';
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Schema from '../helpers/Schema'
import axios from 'axios';

import { FormHelperText } from '@mui/material';
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
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography component="h2" variant="h4">Sign In</Typography>
          <Box size="large" component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt:1}}>
            {content.inputs.map((input, key) => {
              return(
              <Box key={key}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  label={input.name}
                  name={input.name} 
                  className="input" 
                  type={input.type}
                  {...register(`${input.name}`, {required: true})}
                  />
              <FormHelperText error="true">{errors[input.name]?.message}</FormHelperText>
              </Box>
              );
            })}
            <FormControlLabel
              // sx={{ width: 3/4 }}
              control={<Checkbox color="primary" />}
              label="I agree to be contacted via email"
              name="emailConsent"
              {...register("emailConsent", {required : true})}
            />
              <FormHelperText error="true">
                <p>{errors.emailConsent?.message}</p>
              </FormHelperText>
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