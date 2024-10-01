// @ts-nocheck
import React from 'react'

export default function List({todoData, setTodoData}) {
    
    const btnStyle = {
        color: "black",
        border: "1px solid black",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
    };
    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
          if (data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        });
        setTodoData(newTodoData);
      };
      const listStyle = (completed) => {
        return{
          padding: "10px",
          borderBottom: "1px #ccc dashed",
          textDecoration: completed ? "line-through" : "none",
        }
      }
    
      const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        console.log(newTodoData, todoData);
        setTodoData(newTodoData);
      };
  return (
    <div>
        {todoData.map((data) => (
            <div style={listStyle(data.completed)} key={data.id}>
            <input type="checkbox" onChange={()=>handleCompleteChange(data.id)} defaultChecked={data.completed} />{" "}
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
            </div>
        ))}
      </div>
  )
}
