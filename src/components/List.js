import styled from 'styled-components';
import Task from './Task';

export default function List() {
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_item => <Task />)}
    </Wrapper>

  );
}

const Wrapper = styled.div`
  height: 50vh;
  overflow: scroll;
`;