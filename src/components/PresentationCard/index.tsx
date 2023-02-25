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
interface PresentationCardProps {
  isMainPage?: boolean;
  titleIssue?: string;
}
export function PresentationCard({
  isMainPage = true,
  titleIssue,
}: PresentationCardProps) {
  const { avatar_url, bio, company, following, login, name } = useUser();

  console.log;
  return (
    <Container isMainPage={isMainPage}>
      {isMainPage === true ? (
        <PhotoSpan>
          <img src={avatar_url} alt="" />
        </PhotoSpan>
      ) : null}

      <ContentContainer>
        {isMainPage === true ? (
          <>
            <h1>{name}</h1>
            <section>{bio}</section>
          </>
        ) : (
          <h1>{titleIssue}</h1>
        )}

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
