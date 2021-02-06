import Checkbox from "./Checkbox.js"



const Todos = ({ text, todo, todos, setTodos, switchBtn }) => {




    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))

    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        )
    }
    return (
        <div className={switchBtn ? "todo-list-item" : "todo-list-item item-light"}>
            <Checkbox completeHandler={completeHandler} />
            <p className={todo.completed ? "completed" : ""}>{text}</p>
            <button onClick={deleteHandler} className="delete-btn">+</button>
        </div>
    )
}

export default Todos
