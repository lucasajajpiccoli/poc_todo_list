import styled from "styled-components";

export default function Title({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 33vw;
  margin: 5vh auto;

  font-family: 'Pacifico', cursive;
  font-size: 60px;
  line-height: 72px;
  text-align: center;
  color: #1A237E;
`;
