import { useCallback, useState } from "react";
import "./App.css";
import Form from "./Component/Form";
import Lists from "./Component/Lists";

function App() {
  console.log("App Rendering");
  const [todoData, setTodoData] = useState([]);
  
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log(newTodoData, todoData);
    setTodoData(newTodoData);
  },[todoData]);

  const handleRemoveClick = () => {
    setTodoData([]);
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-[#16222a] to-[#3a6073]">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>Todo List</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Lists 
        // @ts-ignore
        handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default App;
