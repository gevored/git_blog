import styled from "styled-components";

export const Container = styled.div`
  /* border: solid 2px orange; */
  width: 864px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -30px;
  gap: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
  }
  input {
    border: solid 1px ${(props) => props.theme.baseBorder};
    border-radius: 6px;
    padding-left: 10px;
    height: 50px;
    width: 100%;
    background-color: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseText};
  }
`;
