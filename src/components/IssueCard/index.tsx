import { Container } from "./styled";
import {
  formatDistanceToNowStrict,
  parseISO,
  differenceInDays,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { api } from "../../api/axios";
import { Outlet, Link } from "react-router-dom";
import { ViewIssue } from "../../pages/ViewIssue";

interface IssueCardProps {
  body: string;
  title: string;
  created_at: string;
  number: number;
}
function formatarData(data: string): string {
  const dataParsed = parseISO(data);
  const now = new Date();
  const diff = differenceInDays(dataParsed, now);
  return formatDistanceToNowStrict(dataParsed, {
    addSuffix: true,
    locale: ptBR,
  });
}

export function IssueCard({ body, title, created_at, number }: IssueCardProps) {
  function castString(p: string) {
    if (p.length > 200) {
      const stringCated = p.substring(0, 250) + " ...";
      return stringCated;
    }

    return p;
  }

  return (
    <Link to={`/issue/${number}`}>
      <Container>
        <div>
          <h1>{title}</h1>
          <span>{formatarData(created_at)}</span>
        </div>
        <p>{castString(body)}</p>
      </Container>
    </Link>
  );
}
