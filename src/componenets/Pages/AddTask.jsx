import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { taskActions } from '../../store/taskSlice';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addForm } from '../../store/task-actions';

function AddTask() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const isLoading=useSelector(state=>state.task.isLoading);
  const [startDate, setStartDate] = useState(new Date());
    const [formData,setFormData]=useState({
    title:"",
    titleDescription:"",
    completed:false,
    due_date:startDate,
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit=(e)=>{
   e.preventDefault();
   let formIsValid=true;
   if(formData.title===""&&formData.titleDescription==="")
   {
    formIsValid=false;
   }
   if(formIsValid){
    dispatch(addForm(formData));
    dispatch(taskActions.isLoadingState(true));
    setTimeout(()=>{
      dispatch(taskActions.isLoadingState(false));
      navigate('/taskConsole');
    },3000);
   }
  }

  return (
    <div className='md:mx-52 mx-8'>
      <div className='flex justify-between items-center '>
            <p className=' text-[52px] text-black font-bold'>Tasko<span className='text-yellow-500'>.</span></p>
        </div>
        {isLoading?<p className='p-2 bg-green-500 text-center text-white'>Task Added. Redirecting to Tasko Console</p>:<p className='text-center font-bold'>Task Add Form</p>}

          <form onSubmit={handleSubmit} className='w-full flex flex-col justify-start items-start shadow-xl p-4 roudned-xl mt-2'>
            <label className='mb-2'>Task Title:</label>
            <input name="title" value={formData.title} onChange={handleChange} className='block border-2 block w-full mb-2 p-2' placeholder='Title' />
            <label className='mb-2'>Task Description:</label>
            <textarea name="titleDescription" value={formData.titleDescription} onChange={handleChange} className='block border-2 block w-full mb-2 p-2' placeholder='Title' />
            <div className='flex gap-x-4 mb-2 p-2 '>
            <label >Due Date:</label>
            <DatePicker selected={startDate} onChange={(date) => {setStartDate(date);}} />
          </div>
          <button className='px-4 py-2 bg-brand-blue text-white font-bold rounded-md'>Add Task</button>
          </form>

    </div>
  )
}

export default AddTask