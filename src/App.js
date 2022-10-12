// import logo from './img/bg.jpg';
import profile from './img/profile.png'
import './App.css';
// import MailIcon from '@mui/icons-material/Mail';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';
import React, { Component } from 'react'
// import { Link } from '@mui/material';
// import AppRouter from './config/router';
import AppRouter from './config/router';
function App() {
  return (
    <div className='parent row'>
      <div className='col-md-2'></div>
      <div className='main col-md-8'>
        <img className='profile pt-5' src={profile}/>
        <h2 className='pt-4'>Summaiya Mumtaz</h2>
        <p>FRONTEND DEVELOPER </p>
        <h6>Sotware Engineer to be..</h6>
        <div>
          {/* <ul><li>About</li></ul> */}
        </div>
        <div className='icons'>
          {/* icon */}
          {/* <Link href='#'><GitHubIcon></GitHubIcon></Link>
          <Link href='#'><MailIcon></MailIcon></Link>
          <Link href='#'><LinkedInIcon></LinkedInIcon></Link> */}
<AppRouter></AppRouter>
        </div>
       
      </div>
      <div className='col-md-2'></div>
    </div>
  );
}

export default App;
