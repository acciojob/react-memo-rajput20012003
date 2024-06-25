import React from "react";
import { useState, useMemo } from "react";

const Usememo = () => {
    const[tasks , setTasks] = useState(["task1" , "task2" , "task3"]);
    const[inputValue , setInputValue] = useState("");

    const Memoisedtask = useMemo(()=> tasks.map((task,index)=> 
                    <li key={index}>{task}</li>)
    ,[tasks]);
    

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const addTask = () =>{
        setTasks([...tasks,inputValue]);
        setInputValue("");
    }
    return (
        <div>
            <h1>Use memo</h1>
            <ul>{Memoisedtask}</ul>
            <input type="text" value={inputValue} onChange={handleInputChange}></input>
            <button onClick={addTask} disabled={inputValue.length <= 5}>Submit</button>
        </div>
    )
}

export default Usememo;