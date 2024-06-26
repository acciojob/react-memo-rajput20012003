import React from 'react'

function Counter({dataObj, setDataObj}) {
  return (
    <div>
        <p>Count: <span id='incr-cnt' >{dataObj.count}</span></p>
        <button id='incr-btn' onClick={()=>setDataObj({...dataObj, count: dataObj.count + 1})}>+</button>
        <h1>Expensive Calculation</h1>
        <p id='calc'>{1000000000 + dataObj.count}</p>
    </div>
  )
}

export default Counter;