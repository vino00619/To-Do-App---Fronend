import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li>
        {props.text}{" "}
        <button
          class="fa-solid fa-xmark"
          style={{
            height:"1.9rem",
            width:"1.3rem",
            position: "relative",
            float: "right",
            background: "crimson",
            color: "white",
          }}
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
