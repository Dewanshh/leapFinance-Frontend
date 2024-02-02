import {createSlice} from '@reduxjs/toolkit'
import { listToggler } from './task-actions';

const taskSlice=createSlice({
    name:'task',
    initialState:{
        taskList:[],
        isLoading:false,
        editTask:{},
        completedList:[],
        listToggler:true,

    },
    reducers:{
        replaceData(state,action){
            state.taskList=action.payload;
        },
        addTask(state,action){
            const newItem=action.payload;
            state.taskList.push({id:newItem.id,titleDescription:newItem.titleDescription, title:newItem.title,  completed:newItem.completed, due_date:newItem.due_date});
        },
        removeFromList(state,action){
            const id=action.payload;
            const existingItem=state.taskList.find(item=>item.id===id);
            state.completedList=state.completedList.filter(item=>item.id===id);
            if(existingItem){
                state.taskList=state.taskList.filter(item=>item.id!==id);
            }
            
        },
        isLoadingState(state,action){
            state.isLoading=action.payload;
        },
        updateTaskData(state,action){
            const updatedTask=action.payload;
            state.taskList=state.taskList.map((task)=>task.id===updatedTask.id?updatedTask:task);
            state.completedList=state.completedList.map((task)=>task.id===updatedTask.id?updatedTask:task);

            // console.log(updatedList);
        },
        updateTaskCheck(state,action){
            const updateItems = state.taskList.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
              );
              state.taskList=updateItems;
            //   console.log(updateItems);
        },
        editTaskDataAssign(state,action){
            const editedTaskData=action.payload;
            state.editTask=editedTaskData;
            console.log(state.editTask);
        },
        updateCompletedList(state,action){
            const newCompletionList=[];
            state.taskList.forEach(item=>item.completed===true&&newCompletionList.push(item));
            state.completedList=newCompletionList;
            console.log(state.completedList);
        },
        listTogglerFn(state,action){
            state.listToggler=action.payload;
        },
    }
})

export const taskActions=taskSlice.actions;
export default taskSlice;