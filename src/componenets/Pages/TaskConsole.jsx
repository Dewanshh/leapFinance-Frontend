import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import TodoComp from './TodoComp';
import { fetchData,listToggler } from '../../store/task-actions';
function TaskConsole() {
    const data=useSelector(state=>state.task.taskList);
    const completedList=useSelector(state=>state.task.completedList);
    const isLoading=useSelector(state=>state.task.isLoading);;
    const listTogglerValue=useSelector(state=>state.task.listToggler);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
      dispatch(fetchData());
    },[dispatch]);


  return (
    <>
    <div className=' flex flex-col md:mx-52 mx-8 py-6'>
        <div className='flex justify-between items-center '>
            <p className=' text-[52px] text-black font-bold'>Tasko<span className='text-yellow-500'>.</span></p>
            <button className='font-bold text-[18px] bg-brand-blue px-2 py-2 rounded text-white' onClick={()=>navigate('/addTask')}>Add Task</button>
        </div>

        <div className='flex gap-x-6 mt-6'>
            <button className={`px-4 py-2 ${listTogglerValue?'bg-green-500 text-white':'bg-white border-[1px]'} rounded `} onClick={()=>{
              dispatch(listToggler(true));
            }}>All</button>
            <button className={`px-4 py-2 ${listTogglerValue?'bg-white border-[1px]':'bg-green-500 text-white'} rounded `} onClick={()=>{
               dispatch(listToggler(false));
            }}>Completed</button>
    </div>
    <div>
        {data.length===0?<div className='flex justify-center h-[200px] items-center'>No Data Found</div>
        :isLoading?<div className='flex justify-center h-[200px] items-center'>Loading.....</div>:
        listTogglerValue?data.map(task=>(
           <TodoComp key={task.id} task={task} />
        )):completedList.map(task=>(
          <TodoComp key={task.id} task={task} />
       ))}
    </div>
    </div>
    
    </>
  )
}

export default TaskConsole