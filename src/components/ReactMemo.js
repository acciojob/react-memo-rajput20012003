import React from "react";
import { useState , memo} from "react";

const Taskitem = memo(({task})=>{
    console.log(`rendering task ${task}`);
    return <li>{task}</li>
})

const Reactmemo = () => {
    const[tasks , setTasks] = useState(["task1" , "task2" , "task3"]);
    const[inputValue , setInputValue] = useState("");

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const addTask = () =>{
        setTasks([...tasks,inputValue]);
        setInputValue("");
    }

    return (
        <div>
            <h1>React Memo</h1>
            <ul>
            {
            tasks.map((task, index) => (
                   <Taskitem key={index} task={task} />
             ))}
                
            </ul>
            <input onChange={handleInputChange} value={inputValue} type="text"></input>
            <button onClick={addTask} disabled={inputValue.length <= 5}>Submit</button>
        </div>
    )
}

export default Reactmemo;