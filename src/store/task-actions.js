import { taskActions } from "./taskSlice";
import axios from 'axios';

export const fetchData=()=>{
    return async(dispatch)=>{
        const fetchHandler=async()=>{
            const fData=await axios.get('http://localhost:9191/getAllTasks');
            // console.log(fData.data);
            return fData.data;
        }
    try{
        dispatch(taskActions.isLoadingState(true));
        const taskData=await fetchHandler();
        dispatch(taskActions.isLoadingState(false));
        dispatch(taskActions.replaceData(taskData));
    }
    catch(err){
        console.log(err);
    }
}
}

export const updateCheck=(id)=>{
    return async(dispatch)=>{
        const updateHandler= async()=>{
            const response=await axios.put(`http://localhost:9191/updateCompletion/${id}`);
            return response.data;
        }
        try{
            dispatch(taskActions.isLoadingState(true));
            dispatch(taskActions.updateTaskCheck(id));
            dispatch(taskActions.updateCompletedList());
            await updateHandler();
            // console.log(response);
            dispatch(taskActions.isLoadingState(false));
        }
        catch(err){console.log(err);}
    }
}

export const deleteTask=(id)=>{
    return async(dispatch)=>{
        const deleteHandler=async()=>{
            const response=await axios.delete(`http://localhost:9191/delete/${id}`);
            return response.data;
        }
        try{
            dispatch(taskActions.isLoadingState(true));
            dispatch(taskActions.removeFromList(id));
            const response=await deleteHandler();
            // console.log(response);
            dispatch(taskActions.isLoadingState(false));
        }catch(err){console.log(err);}

    }
}

export const addForm=(task)=>{
    return async(dispatch)=>{
        const submitHandler=async()=>{
            const{title,titleDescription,due_date,completed}=task;
            const response=await axios.post('http://localhost:9191/addTask',{title,titleDescription,due_date,completed});
            console.log(response);
            return response.data;
        }
        try{
            const addedTask=await submitHandler();
            dispatch(taskActions.addTask(addedTask));
            console.log(addedTask);
        }catch(err){console.log(err);}

    }
}

export const updateForm=(task)=>{
    return async(dispatch)=>{
        const submitHandler=async()=>{
            const{id,title,titleDescription,due_date,completed}=task;
            const response=await axios.put('http://localhost:9191/update',{id,title,titleDescription,due_date,completed});
            console.log(response);
            return response.data;
        }
        try{
            const updatedTask=await submitHandler();
            dispatch(taskActions.updateTaskData(updatedTask));
            console.log(updatedTask);
        }catch(err){console.log(err);}

    }
}
export const editTask=(task)=>
{
    return async(dispatch)=>{
        try{
            dispatch(taskActions.editTaskDataAssign(task));
        }catch(err){console.log(err)};
    }
}
export const listToggler=(value)=>{
    return async (dispatch)=>{
        try{
            dispatch(taskActions.listTogglerFn(value));
        }catch(err){console.log(err);}
    }
}
