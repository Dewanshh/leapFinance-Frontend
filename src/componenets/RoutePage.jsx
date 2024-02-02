import React from 'react'
import { Routes,Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import TaskConsole from './Pages/TaskConsole';
import AddTask from './Pages/AddTask';
import EditTask from './Pages/EditTask';

function RoutePage() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/taskConsole' element={<TaskConsole />} />
      <Route path='/addTask' element={<AddTask />} />
      <Route path='/editTask' element={<EditTask />} />

    </Routes>
  )
}

export default RoutePage