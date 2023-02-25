import ReactMarkdown from "react-markdown";
import { Container } from "./styled";
import remarkGfm from "remark-gfm";

interface ContentIssueProps {
  content: string;
}

export function BodyIssue({ content }: ContentIssueProps) {
  return (
    <Container>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </Container>
  );
}
