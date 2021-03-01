import React from "react";

export default function TodoCard(props) {
  const { title, remove, index } = props;

  return (
    <li>
      {title}&nbsp;
      <button
        class="buttonStyle"
        onClick={() => {
          remove(index);
        }}
      >
        Remove
      </button>
    </li>
  );
}
