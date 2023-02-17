import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.baseProfile};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 864px;
  height: 212px;
  padding: 30px 40px;
  position: relative;
  top: -100px;
  gap: 25px;

  h1 {
    font: 2rem Nunito;
    font-weight: bold;
    color: ${(props) => props.theme.baseTitle};
    line-height: 130%;
  }
`;

export const PhotoSpan = styled.span`
  img {
    border-radius: 6px;
    height: 148px;
    width: 148px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  section {
    font: 1rem Nunito;
    color: ${(props) => props.theme.baseText};
  }
`;

export const Info = styled.div`
  position: relative;
  top: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    font: 1rem Nunito;
    line-height: 160%;
  }
`;

export const ContainerInfo = styled.div`
  height: 26px;
  width: 393px;
  display: flex;

  gap: 24px;
`;
