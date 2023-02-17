import {
  PhotoSpan,
  Container,
  ContentContainer,
  Info,
  ContainerInfo,
} from "./styled";
import { FaGithub } from "react-icons/fa";
import { HiOfficeBuilding, HiUsers } from "react-icons/hi";

export function PresentationCard() {
  return (
    <Container>
      <PhotoSpan>
        <img src="https://avatars.githubusercontent.com/u/14332784?s=400&u=a6c39afaf7d036126f0213491d3b4e344d8344cc&v=4" />
      </PhotoSpan>
      <ContentContainer>
        <h1>Cameron Williamson</h1>
        <section>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </section>
        <ContainerInfo>
          <Info>
            <FaGithub />
            <span>gevored</span>
          </Info>
          <Info>
            <HiOfficeBuilding />
            <span>Rocketseat</span>
          </Info>
          <Info>
            <HiUsers />
            <span>32 seguidores</span>
          </Info>
        </ContainerInfo>
      </ContentContainer>
    </Container>
  );
}
