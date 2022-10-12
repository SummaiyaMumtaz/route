// import profilepic from './img/profile.png'
import React, { Component } from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Profile() {
    return (
      <>
      <div>
        <a href='https://github.com/SummaiyaMumtaz'><GitHubIcon/></a>
        <a href='mailto:Professional.taz@gmail.com'><EmailIcon/></a>
        <a href='https://www.linkedin.com/in/summaiya-mumtaz-8b099021a/'><LinkedInIcon/></a>
        </div>
        </>
    );
}