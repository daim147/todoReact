import React from "react";

export const TodoItem = (props) => {
  return (
    <li
      style={{
        textDecoration: props.checked ? "line-through" : null,
        userSelect: "none"
      }}
      onClick={(e) => props.handler(props.item)}
      onContextMenu={(e) => {
        e.preventDefault();
        props.completed(props.item);
      }}
    >
      {props.text}
    </li>
  );
};
