import React, { useState, useEffect } from 'react'
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"


function App() {
  //State

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [switchBtn, setSwitchBtn] = useState(true);


  //Use Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status])


  //Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }


  return (
    <div className={switchBtn ? "App" : "light-app"}>
      <div className={switchBtn ? "header-bg" : "header-bg light-header "}></div>
      <div className="main-container">
        <Header
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setSwitchBtn={setSwitchBtn}
          switchBtn={switchBtn}
        />
        <ToDoList
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          switchBtn={switchBtn}
        />
      </div>
    </div>
  );
}

export default App;
