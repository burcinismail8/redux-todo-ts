import React from "react";
import ToDoItem from "../../app/components/toDoItem";
import { useSelector } from "react-redux";
import { selectToDoList } from "../../features/toDoSlice";
import IToDoItem from "../../app/models/IToDoItem";
 const ToDoListContainer=()=>{
  let toDoList = useSelector(selectToDoList);

    return (<div className="app-container-todos">
    {toDoList.map((item:IToDoItem) => {
      return <ToDoItem name={item.item} id={item.id} done={item.done} />;
    })}
  </div>)
}

export default ToDoListContainer;
