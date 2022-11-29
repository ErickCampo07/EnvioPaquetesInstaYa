import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; /*Destructuración de BrowserRouter,Routes,Route, dentro de un elemento*/
import Login from './components/Login/Login';
/*import User from './components/User/User';*/
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
