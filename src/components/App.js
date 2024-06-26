import React from "react";
import { useState } from "react";
// 
import MyTodos from "./MyTodos";
import Counter from "./Counter";
import ReactMemo from "./ReactMemo";
const App = () => {
    const [dataObj, setDataObj] = useState({
        todoArr: [],
        count: 0,
        skillsArr: []
    })
  return (
    <div id="main">
        <h1>React.useMemo</h1>
        <MyTodos dataObj={dataObj} setDataObj={setDataObj} /><hr />
        <Counter dataObj={dataObj} setDataObj={setDataObj} /><hr /><hr />
        <ReactMemo dataObj={dataObj} setDataObj={setDataObj} />
    </div>
  );
};

export default App;