import Checkbox from "./Checkbox.js"


const AddTodo = ({ onChange, inputText, completeHandler, switchBtn }) => {



    return (

        <div className={switchBtn ? "add-todo" : "add-todo light-todo"}>
            <Checkbox
                completeHandler={completeHandler}
                switchBtn={switchBtn}
            />
            <input onChange={onChange} type="text" placeholder="Create a new todo..." className={switchBtn ? "add-todo-text" : "add-todo-text light-todo"} value={inputText} />
        </div>
    )
}





export default AddTodo
