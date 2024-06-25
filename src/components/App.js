import React, { useState, useEffect } from "react";
import Todo from "./Todo.js";
import UseMemo from "./UseMemo.js";
import Count from "./Count.js";
import '../styles/App.css';

const App = () => {
    useEffect(() => { }, [count, memo, todos]);
    let [todos, Settodos] = useState(["New Todo"]);
    let [memo, Setmemo] = useState(["HTMLL", "CSSS3"]);
    let [count, Setcount] = useState(1000000000);
    return (
        <div id="main">
            <h1>React.useMEMo</h1>x
            <Todo set={Settodos} arr={todos} />
            <Count set={Setcount} number={count} />
            <h1>Expensive Calculation</h1>
            <UseMemo set={Setmemo} arr={memo} />
        </div>
    );
};

export default App;