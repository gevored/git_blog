import { Container } from "./styled";
import { IssueCard } from "../IssueCard/index";
import { useIssue } from "../../hooks/issuesHooks";
export function BoardIssues() {
  const { issues } = useIssue();
  return (
    <Container>
      {issues.map((issue) => (
        <IssueCard {...issue} key={issue.number} />
      ))}
    </Container>
  );
}
