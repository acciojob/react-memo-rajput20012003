import React, {useState} from "react";

const Todo = ()=>{
    let [todos, setTodos] = useState(['New Todo']);

    return(
        <div>
            <h2>My todos</h2>
            {
                todos &&
                todos.map((todo, ind)=>(
                    <p id={`todo-${ind}`}>{todo}</p>
                ))
            }
            <button id='add-todo-btn' onClick={()=>{setTodos([...todos, 'New todo'])}}>Add Todo</button>
            <br/>
            <br/>
            <hr />
        </div>
    )
}

export default Todo;