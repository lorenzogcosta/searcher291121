import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'


// Importação Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Renderização de páginas//
ReactDOM.render(
  < BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </ BrowserRouter>
  ,
  document.getElementById('root')
);
