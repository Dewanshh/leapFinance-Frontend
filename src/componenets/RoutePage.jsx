import React from 'react'
import { Routes,Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';

function RoutePage() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
    </Routes>
  )
}

export default RoutePage