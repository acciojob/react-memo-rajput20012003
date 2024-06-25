import React, {useState} from "react";

const Count = ()=>{
    let [count, setCount] = useState(0);

    return(
        <div>
            <p id="incr-cnt">Count: {count}</p>
            <button id="incr-btn" onClick={()=>{setCount(count+1)}}>0</button>
            <br/>
            <h2>Expensive Calculation</h2>
            <p id="calc">{1000000000+count}</p>
            <hr />
            <hr />
            <br/>
        </div>
    )
}

export default Count;