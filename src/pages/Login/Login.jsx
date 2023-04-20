import { Typography, createTheme } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';



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


const Login = () =>
{

  const handleSubmit


}

export default Login
