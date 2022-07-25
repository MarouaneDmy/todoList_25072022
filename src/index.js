import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from "./components/header"
import Home from "./pages/home"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
