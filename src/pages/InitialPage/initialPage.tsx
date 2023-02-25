import { BoardIssues } from "../../components/BoardIssues";
import { Header } from "../../components/Header";
import { PresentationCard } from "../../components/PresentationCard";
import { SearchField } from "../../components/SearchField";
import { Container } from "./styled";

export function InitialPage() {
  return (
    <Container>
      <Header />
      <PresentationCard />
      <SearchField />
      <BoardIssues />
    </Container>
  );
}
