
import React from 'react';
import content from './static.js/index';
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Schema from '../helpers/Schema'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
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
    reset();
    console.log(data)
  }
  // const { values, update, submit, clear, errors, validate, disabled } = props;


  // const handleChange = e => {

  //   const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  //   update(e.target.name, e.target.value);

  //   validate(e);

  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   submit();
  // };

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
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button 
            type="submit" 
            fullWidth variant="contained" 
            sx={{ mt: 3, mb: 2 }}
            >
            Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            </Box> 
          </Box>
      </Container>
    </ThemeProvider>
    // <form className='form-container' onSubmit={handleSubmit}>
    //   <h1 className='title'>Contact Us</h1>
    //   <div>
    //     <label className='form-input'>Name
    //       <input 
    //       name='name'
    //       type='text'
    //       placeholder='enter name'
    //       value={values.name}
    //       onChange={handleChange}/>
    //     </label>
    //      <p>{errors.name}</p>
    //     <label className='form-input'>Email
    //       <input 
    //       name='email'
    //       type='email'
    //       placeholder='enter email'
    //       value={values.email}
    //       onChange={handleChange}/>
    //     </label>
    //       {errors.email && <p>{errors.email}</p>}
    //     <label className='form-input'>Birth Date
    //       <input 
    //       name='birthdate'
    //       type='string'
    //       placeholder='enter birth date'
    //       value={values.birthdate}
    //       onChange={handleChange}/>
    //     </label>
    //       {errors.birthdate && <p>{errors.birthdate}</p>}
    //     <label className='checkbox'>I Agree To Be Contacted Via Email
    //       <input 
    //       name='agreement'
    //       type='checkbox'
    //       value='true'
    //       checked={values.agreement}
    //       onChange={handleChange}/>
    //     </label>
    //       <div>{errors.agreement}</div>
    //     <div>
    //       <button className="button" onClick={()=> clear()}>Clear</button>
    //     </div>

    //     <div>
    //       <button className="button" disabled={disabled}>Submit</button>
    //     </div>

    //   </div>
    // </form>
  );
};