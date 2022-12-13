import styled from "styled-components";
import { ImCheckboxUnchecked, ImCheckboxChecked, ImBin2 } from "react-icons/im";


export default function Task({ id, list, setList }) {

  function handleTrashClick(_event) {
    list.splice(id, 1);
    setList([...list]);
  }

  function handleCheckClick(_event) {
    list[id].isChecked = true;
    setList([...list]);
  }

  function handleUncheckClick(_event) {
    list[id].isChecked = false;
    setList([...list]);
  }

  return (
    <Wrapper isChecked={list[id].isChecked} >
      <div>{list[id].text}</div>
      <div>
        {
          list[id].isChecked
            ?
            <ImCheckboxChecked
              data-testid="checked"
              size="25px"
              color="#4CAF50"
              onClick={handleUncheckClick}
            />
            :
            <ImCheckboxUnchecked
              data-testid="unchecked"
              size="25px"
              color="#FFB74D"
              onClick={handleCheckClick}
            />
        }
        <ImBin2
          data-testid="deletion"
          size="25px"
          color="#525252"
          onClick={handleTrashClick}
        />
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
  background-color: ${props => props.isChecked ? "#C8E6C9" : "#FFF9C4"};
  
   

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;
  ${props => 
    {
      if(props.isChecked) {
        return `
          text-decoration: line-through;
          font-style: italic;
          `
      }
    }
  }
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
