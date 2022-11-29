import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; /*Destructuración de BrowserRouter,Routes,Route, dentro de un elemento*/
import Login from './components/Login/Login';
/*import User from './components/User/User';*/
import Forgot from './components/Forgot/Forgot-password';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/forgot-password" element={<Forgot/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/new-order" element={<NewOrder/>}></Route>
        <Route path="/update-order" element={<UpdateOrder/>}></Route>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
