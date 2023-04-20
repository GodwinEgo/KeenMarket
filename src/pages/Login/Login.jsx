import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, InputAdornment, InputLabel, OutlinedInput, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';



function Copyright ( props )
{
  return (
    <Typography variant='body2 ' color='text.secondary' align='center' { ...props }>
      { 'Copyright @ ' }
      <Link color='inherit' href='#'>Nbuddy</Link>{ ' ' }
      { new Date().getFullYear() }
      { '.' }
    </Typography>
  );
}

const theme = createTheme();


const Login = () =>
{

  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    const data = new FormData( e.currentTarget );
    console.log( {
      email: data.get( 'email' ),
      password: data.get( 'password' ),
    } );
  };


  return (
    <ThemeProvider theme={ theme }>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />

        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }>

          <Typography component='h1' variant='h5'>
            Sign In
          </Typography>


          <Box component="form" onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={ showPassword ? 'text' : 'password' }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={ handleClickShowPassword }
                    onMouseDown={ handleMouseDownPassword }
                    edge="end"
                  >
                    { showPassword ? <VisibilityOff /> : <Visibility /> }
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormControlLabel
              control={ <Checkbox value="remember" color="primary" /> }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={ { mt: 3, mb: 2 } }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  { "Don't have an account? Sign Up" }
                </Link>
              </Grid>
            </Grid>

          </Box>

        </Box>

        <Copyright sx={ {
          mt: 8, mb: 4, position: 'absolute', bottom: 0,
        } } />
      </Container>
    </ThemeProvider >
  );


}

export default Login
