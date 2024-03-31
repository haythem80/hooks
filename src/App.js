import { useState } from "react";
import "./App.css";
import TaskList from "./Components/TaskList";
import Add from "./Components/Add";

function App() {
  const [todos, setTodos] = useState([
    { id: Math.random(), action: "Wake Up", isDone: true },
    { id: Math.random(), action: "Go Out", isDone: false },
  ]);
  const handleDelete=(THEID)=>setTodos(todos.filter(el=>el.id!==THEID))
  const handleComplete=(ID)=>setTodos(todos.map(el=>el.id===ID?{...el,isDone:!el.isDone}:el))
  const handleAdd=(newtask)=>setTodos([...todos,newtask])
  const handleEdit=(EditedOne)=>setTodos(todos.map(el=>el.id===EditedOne.id?{...el,...EditedOne}:el))
  return <div className="App">
  <Add addFunction={handleAdd} />
  <TaskList tasks={todos}  deletefunction={handleDelete} completefunction={handleComplete}  handleEdit={handleEdit}/>
  </div>;
}

export default App;
