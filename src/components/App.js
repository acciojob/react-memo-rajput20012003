//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from "react";
import Usememo from "./useMemo";
import Reactmemo from "./ReactMemo";
import { useState } from "react";

const App = () => {
    const[count , setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Task Manager</h1>
             <button onClick={increaseCount}>Increment Counter</button>
             <p>Count : {count}</p>
            <Usememo />
            <Reactmemo />
        </div>
    )
}

export default App;