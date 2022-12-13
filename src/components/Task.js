import styled from "styled-components";
import { ImCheckboxChecked, ImCheckboxUnchecked, ImBin2 } from "react-icons/im";


export default function Task() {
  return (
    <Wrapper>
      <div>Teste</div>
      <div>
        <ImCheckboxChecked size="25px" color="#4CAF50" />
        <ImBin2 size="25px" color="#525252" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 38vw;
  height: 40px;
  margin: 5px 1vw;
  padding: 0 10px;
  border: 1px solid;
  border-radius: 5px;
  background-color: #FFF9C4;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;
  color: #303F9F;

  > div {
    background-color: inherit;
  }

  > div:nth-child(2) {
    width: 55px;
    display: flex;
    justify-content: space-between;
  }
`;
