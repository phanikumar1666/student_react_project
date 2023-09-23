import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/DashBoard';
import Layout from './components/Layout';
import Dataentry from './components/Dataentry';
import Common from './components/Common';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
  <Router>    
    <Routes>  
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/dhanush" element={<Login/>} />
      <Route path="/login" element={<Login/>} />     
      <Route path="/dashboard" element={<Layout door={<Dashboard/>}/>} />
      <Route path="/pauljhonson" element={<Layout door={<Dashboard/>}/>} />
     <Route path="/dataentry" element={<Layout door={<Dataentry/>}/>}/>
    </Routes>          
     
  </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

