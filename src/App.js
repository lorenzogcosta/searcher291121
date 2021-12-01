import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import Erro404 from '../src/Pages/Erro404/Erro404'


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/sobre" exact element={<Sobre />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/lista-busca" exact element={<ListaBusca />} /> */}
        <Route element={<Erro404 />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
