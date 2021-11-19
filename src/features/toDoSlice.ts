import {createSlice} from "@reduxjs/toolkit";
interface CounterState  {
    toDoList:any,
}

const initialState: CounterState = {
    toDoList:[]
}

const toDoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        saveToDo:(state,action)=>{
            state.toDoList.push(action.payload)
        },
        setCheck:(state,action)=>{
            state.toDoList.map(item=>{
                if(action.payload===item.id){
                    if(item.done==true){
                        item.done=false
                    }
                    else{
                        item.done=true;
                    }
                }
            })
        }
    }
})

export const {saveToDo, setCheck} = toDoSlice.actions;
export const selectToDoList = (state)=>state.todos.toDoList;
export default toDoSlice.reducer;