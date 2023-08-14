import React from 'react';
import Home from "./Home"
import Login from "./log_in"
import MainPage from './Main_page';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './register';
import BackButton from './BackButton';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/log_in' element={<Login />} />
        <Route exact path='/main_page' element={<MainPage />} />
        <Route exact path='/register' element={<Register/>} />
        <Route path='/back' component={BackButton} /> 
      </Routes>
    </BrowserRouter>

  );

}

export default App;