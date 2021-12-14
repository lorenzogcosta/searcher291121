import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
// import SearchList from './pages/searchlist/SearchList'
import './styles/index.css'


// Importação Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Router//
ReactDOM.render(
  < BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/lista-de-busca" exact element={<SearchList />} /> */}
    </Routes>
  </ BrowserRouter>
  ,
  document.getElementById('root')
);
