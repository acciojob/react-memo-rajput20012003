import React from "react";
import Todo from "./Todo.js";
import Count from "./Count.js";
import Memo from "./Memo.js";

const App = ()=>{
    return(
        <div id='main'>
            <h1>React.useMemo</h1>
            <Todo />
            <Count />
            <Memo />
        </div>
    )
}

export default App;