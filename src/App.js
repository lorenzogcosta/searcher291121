import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
// import About from './pages/about/About'
// import Login from './pages/login/Login'
// import SearchList from './pages/searchlist/SearchList'


function App() {
  return (
    <div>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/sobre" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/lista-de-busca" exact element={<SearchList />} />  */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
