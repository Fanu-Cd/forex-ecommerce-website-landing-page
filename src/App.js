import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Messages from './pages/messages';
import Layout from './pages/layout';
import Login from './pages/login';
import Signup from './pages/signup';

import ReactDOM from "react-dom/client";
import TextField from '@mui/material/TextField';
const App=()=>{
  return(<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path="messages" element={<Messages />} />
        <Route path='login' element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );}
 


  
export default App;