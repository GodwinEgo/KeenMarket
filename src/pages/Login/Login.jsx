import { Typography, createTheme } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Login = () =>
{

  function Copyright ( props )
  {
    return (
      <Typography variant='body2 ' color='text.secondary' align='center' { ...props }>
        { 'Copyright @ ' }
        <Link color='inherit' href='#'>Nbuddy</Link>{ ' ' }
        { new Date().getFullYear() }
        ['.']
      </Typography>
    );
  }

  const theme = createTheme();

}

export default Login
