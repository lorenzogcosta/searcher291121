import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Results from './pages/login/sub-components/List-results';

import './styles/index.css'


// Importação Router
import { BrowserRouter, Routes ,  Route } from "react-router-dom";

//Import Router//
ReactDOM.render(
  < BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/results" element={<Results />} />
    </Routes>
  </ BrowserRouter>
  ,
  document.getElementById('root')
);
