import styled from 'styled-components';
import Task from './Task';

export default function List({ list, setList }) {
  return (
    <Wrapper>
      {list.map((_task, key) =>
        <Task
          id={key}
          list={list}
          setList={setList}
          key={key} />
      )}
    </Wrapper>

  );
}

const Wrapper = styled.div`
  height: 50vh;
  overflow: scroll;
`;