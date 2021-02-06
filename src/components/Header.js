import AddTodo from "./AddTodo.js";

const Header = ({ setInputText, todos, setTodos, inputText, setSwitchBtn, switchBtn }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("")
    }

    const switchThemeHandler = () => {
        if (switchBtn === true) {
            setSwitchBtn(false)

        } else {
            setSwitchBtn(true)
        }
    }

    return (
        <div className='header-container'>
            <div className="title">
                <h1>TODO</h1>
                <i className={switchBtn ? "switch-icon sun" : "switch-icon moon"} onClick={switchThemeHandler} />
            </div>
            <AddTodo
                inputText={inputText}
                completeHandler={submitTodoHandler}
                onChange={inputTextHandler}
                switchBtn={switchBtn}
            />
        </div>
    )
}




export default Header
