import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { updateCheck, deleteTask, editTask } from '../../store/task-actions';

function TodoComp({task}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const checked=task.completed;
    const dateString=task.due_date;
    const date=new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const year = date.getFullYear() % 100; 
    const formattedDate = `${day}/${month}/${year}`;

    const onToggleChange=()=>{
        dispatch(updateCheck(task.id))
    }

    const onDelete=()=>{
        dispatch(deleteTask(task.id));
    }
    const onEdit=()=>{
        dispatch(editTask(task));
        navigate('/editTask');
    }

  return (
    <div className='mt-6 border-[1px] border-gray-500  w-full rounded-2xl flex overflow-hidden shadow-xl 'key={task.id}>
            <div className={`p-2  w-[50px] ${checked?'bg-green-700':'bg-blue-500'} flex items-center justify-center text-white`}>
        <input
        type="checkbox"
        className="p-2  focus:outline-none"
        onChange={onToggleChange} 
        checked={task.completed}
      /></div>
                <div className='w-full'>
                    <div className='border-b-2 mb-2 flex justify-between'><h1 className=' ml-4 text-[24px] font-semi'>{task.title}</h1>
                    <div className='flex'>
                    <button className='flex items-center m-2 rounded bg-green-700 px-6 text-white font-semi' onClick={onEdit}>Edit</button>
                    <button className='flex items-center m-2 rounded bg-red-700 px-6 text-white font-semi' onClick={onDelete}>Delete</button>
                    </div>
                    </div>
                    <div className='border-b-2'>
                        <div className='flex gap-x-6'>
                        <h1 className='ml-4 font-semibold text-light-gray'>Description: </h1>
                        <p className=' mb-2 font-semibold text-light-gray'>{task.titleDescription}</p>
                    </div>
                    </div>
                    <div className='mb-2 mt-2 flex gap-x-6'> 
                        <h1 className='ml-4 font-semibold text-light-gray'>Due Date:</h1>
                        <p className='ml-4 mb-2 font-semibold text-light-gray'>{formattedDate}</p>
                    </div>
                </div>
                
            </div>
  )
}

export default TodoComp