import React from "react";

function MyTodos({ dataObj, setDataObj }) {
  return (
    <div>
      <h1>My todos</h1>
      {dataObj.todoArr.length !== 0 &&
        dataObj.todoArr.map((todo) => 
        <p key={todo.id} id={`todo-${todo.id}`}>{todo.msg}</p>)}
      <button
      id="add-todo-btn"
        onClick={() =>
          setDataObj({
            ...dataObj,
            todoArr: [
              ...dataObj.todoArr,
              {
                id: (dataObj.todoArr.length === 0)? 0 : dataObj.todoArr[dataObj.todoArr.length - 1].id + 1,
                msg: "New Todo",
              },
            ],
          })
        }
      >
        Add Todo
      </button>
    </div>
  );
}

export default MyTodos;