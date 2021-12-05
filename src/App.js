import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Erro404 from './Pages/Erro404/Erro404'
// import About from './Pages/About/About'
// import Login from './Pages/Login/Login'
// import SearchList from './Pages/SearchList/SearchList'


function App() {
  return (
    <div>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/sobre" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/lista-de-busca" exact element={<SearchList />} />  */}
            <Route element={<Erro404 />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
