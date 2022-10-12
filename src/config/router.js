
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from '../pages/about'
import Work from '../pages/work'
import Profile from '../pages/profile';

export default function AppRouter(){
    return(
        <Router>
            <div>
                {/* <Link to='/'>Home</Link> */}
                <Link to='/'> * PROFILE * </Link>
                <Link to='about'> About </Link>
                <Link to='work'> * PROJECTS *</Link>

                           </div>
            <Routes>
                {/* <Route path='/' element={<Home/>}/> */}
               <Route path='about' element={<About/>}/>
               <Route path='work' element={<Work/>}/>
               <Route path='/' element={<Profile/>}/>
            </Routes>
        </Router>
    );
}