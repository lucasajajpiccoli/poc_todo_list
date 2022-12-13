import styled from 'styled-components';
import Input from './Input';
import List from './List';

export default function Box() {
  return (
    <Wrapper>
      <Input placeholder="Type your task up to 30 characters and Enter!" />
      <List />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40vw;
  margin: 5vh auto;
  padding: 5px 0;
  border: 1px solid #3F51B5;
  border-radius: 5px;
`;
