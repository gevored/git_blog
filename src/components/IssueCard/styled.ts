import styled from "styled-components";

export const Container = styled.div`
  width: 416px;
  height: 260px;
  background-color: ${(props) => props.theme.baseSpot};
  border-radius: 10px;
  padding: 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px 0;
  }
  h1 {
    width: 283px;
    font-family: "Nunito";
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${(props) => props.theme.baseTitle};
  }

  span {
    max-width: 123px;
    font-family: "Nunito";
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme.baseSpan};
  }

  p {
    font-family: "Nunito";
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme.baseText};
  }
`;
