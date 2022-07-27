import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from "./store";
import { Provider } from 'react-redux'
import './index.css';
import Header from "./components/header"
import Home from "./pages/home"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
