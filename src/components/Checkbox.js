const Checkbox = ({ completeHandler }) => {

    return (

        <div className="checkbox-container">
            <input onClick={completeHandler} type="checkbox" name="add-todo-checkbox" id="add-todo-checkbox" className="add-todo-checkbox" />
            <label className="checkbox-label" form="add-todo-checkbox"></label>
        </div>

    )
}

export default Checkbox
