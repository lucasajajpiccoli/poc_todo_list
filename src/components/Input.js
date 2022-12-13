import styled from "styled-components";

export default function Input({ placeholder }) {
  return (
    <Wrapper placeholder={placeholder}>

    </Wrapper>
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
