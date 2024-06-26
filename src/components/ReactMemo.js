import React, { useState } from "react";

function ReactMemo({ dataObj, setDataObj }) {
  const [msg, setMsg] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (msg.length > 5) {
            setDataObj({
              ...dataObj,
              skillsArr: [
                ...dataObj.skillsArr,
                {
                  id:
                    dataObj.skillsArr.length === 0
                      ? 0
                      : dataObj.skillsArr[dataObj.skillsArr.length - 1].id + 1,
                  msg: msg,
                },
              ],
            });
            setMsg("");
          }
        }}
      >
        <input
          id="skill-input"
          type="text"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button id="skill-btn" type="submit">
          Add Skill
        </button>
      </form>
      <ul>
        {dataObj.skillsArr.length !== 0 &&
          dataObj.skillsArr.map((skill) => (
            <li key={skill.id} id={`item-${skill.msg}`}>
              {skill.msg}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ReactMemo;