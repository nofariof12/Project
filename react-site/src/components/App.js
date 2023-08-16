import React from 'react';
import Home from "./Home"
import Login from "./log_in"
import MainPage from './Main_page';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/main' element={<MainPage />} />
        <Route exact path='login/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;