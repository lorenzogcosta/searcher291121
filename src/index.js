import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Results from './pages/login/sub-components/List-results';
import LoginProvider from './pages/login/Provider';
import RoutePrivate from './pages/login/sub-components/private';

import './styles/index.css'


// Importação Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Router//
ReactDOM.render(
  <BrowserRouter >
    <LoginProvider>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route exact path='/results/*' component={<RoutePrivate/>} >
            <Route exact path='/results/*' element={<Results/>}/>
          </Route>
      </Routes>
    </LoginProvider>
  </ BrowserRouter>
  ,
  document.getElementById('root')
);
