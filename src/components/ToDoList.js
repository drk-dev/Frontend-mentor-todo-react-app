import Todos from "./Todos.js"

const ToDoList = ({ todos, setTodos, setStatus, filteredTodos, switchBtn }) => {

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const clearCompletedHandler = () => {
        setTodos(todos.filter((el) => el.completed !== true))

    }

    return (
        <div className={switchBtn ? "todo-list-container" : "todo-list-container todo-list-container-light "}>

            {filteredTodos.map((todo) => (
                <Todos
                    setTodos={setTodos}
                    todos={todos}
                    text={todo.text}
                    key={todo.id}
                    todo={todo}
                    switchBtn={switchBtn}
                />
            ))}
            <footer className={switchBtn ? "" : "footer-light"}>
                <p>{filteredTodos.length} items left</p>
                <div className="footer-buttons">
                    <button onClick={statusHandler} value="all" >All</button>
                    <button onClick={statusHandler} value="active" >Active</button>
                    <button onClick={statusHandler} value="completed" >Completed</button>
                </div>
                <button onClick={clearCompletedHandler} >Clear Completed</button>
            </footer>
            <div className="buttons-mobile">
                <button onClick={statusHandler} value="all" >All</button>
                <button onClick={statusHandler} value="active" >Active</button>
                <button onClick={statusHandler} value="completed" >Completed</button>
            </div>
        </div>

    )
}

export default ToDoList
