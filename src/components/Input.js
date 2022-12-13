import { useState } from "react";
import styled from "styled-components";

export default function Input({ placeholder, setList, list }) {
  const [text, setText] = useState("");

  function handleInput(event) {
    setText(event.target.value);
  }

  function handleKeyDown(event) {
    const { value } = event.target;
    const { key } = event;
    if (key === "Enter" && value.length <= 30) {
      setList(
        [
          ...list,
          {
            text: value,
            isChecked: false
          }
        ]
      );
      setText("");
    }
  }

  return (
    <Wrapper
      placeholder={placeholder}
      value={text}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
    />
  );
}

const Wrapper = styled.input`
  width: 38vw;
  height: 30px;
  margin: 5px 1vw 0 1vw;
  padding: 0 5px;
  border: 1px solid;
  border-radius: 5px;
  
  font-size: 20px;
  color: #303F9F;

  ::placeholder {
    font-style: italic;
  }
`;
