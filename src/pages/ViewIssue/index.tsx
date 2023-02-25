import { useEffect, useState } from "react";
import { api } from "../../api/axios";
import { Header } from "../../components/Header";
import { PresentationCard } from "../../components/PresentationCard";
import { Container, ContentContainer } from "./styled";
import { useParams } from "react-router-dom";
import { BodyIssue } from "../../components/BodyIssue";

interface Issue {
  title: string;
  body: string;
}

export function ViewIssue() {
  const { idIssue } = useParams();
  const [issue, setIssue] = useState({} as Issue);
  async function fetchIssue() {
    const response = await api.get(
      `repos/rocketseat-education/bootcamp-gostack-desafios/issues/${idIssue}`
    );

    const { data } = response;
    setIssue({ ...data });
  }

  useEffect(() => {
    fetchIssue();
  }, []);

  return (
    <Container>
      <Header />
      <PresentationCard isMainPage={false} titleIssue={issue.title} />
      <ContentContainer>
        <BodyIssue content={issue.body} />
      </ContentContainer>
    </Container>
  );
}
