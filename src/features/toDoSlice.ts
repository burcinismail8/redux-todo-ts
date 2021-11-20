import {createSlice} from "@reduxjs/toolkit";
import IToDoItem from "../app/models/IToDoItem";

const initialState= {
    toDoList: [] as IToDoItem[]
}

const toDoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        saveToDo:(state,action)=>{
            state.toDoList.push(action.payload)
        },
        setCheck:(state,action)=>{
            state.toDoList.map((item:IToDoItem)=>{
                if(action.payload===item.id){
                    if(item.done===true){
                        item.done=false
                    }
                    else{
                        item.done=true;
                    }
                }
                return 0;
            })
        }
    }
})

export const {saveToDo, setCheck} = toDoSlice.actions;
export const selectToDoList = (state: { todos: { toDoList: any; }; })=>state.todos.toDoList;
export default toDoSlice.reducer;