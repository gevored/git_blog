import {
  PhotoSpan,
  Container,
  ContentContainer,
  Info,
  ContainerInfo,
} from "./styled";
import { FaGithub } from "react-icons/fa";
import { HiOfficeBuilding, HiUsers } from "react-icons/hi";
import { useUser } from "../../hooks/userHooks";

export function PresentationCard() {
  const { avatar_url, bio, company, following, login, name } = useUser();

  return (
    <Container>
      <PhotoSpan>
        {/* <img src="https://avatars.githubusercontent.com/u/14332784?s=400&u=a6c39afaf7d036126f0213491d3b4e344d8344cc&v=4" /> */}
        <img src={avatar_url} alt="" />
      </PhotoSpan>
      <ContentContainer>
        <h1>Diego Fernandes</h1>
        <section>{bio}</section>
        <ContainerInfo>
          <Info>
            <FaGithub />
            <span>{login}</span>
          </Info>
          <Info>
            <HiOfficeBuilding />
            <span>{company}</span>
          </Info>
          <Info>
            <HiUsers />
            <span>{following} seguidores</span>
          </Info>
        </ContainerInfo>
      </ContentContainer>
    </Container>
  );
}
