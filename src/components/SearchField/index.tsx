import { Container } from "./styled";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useIssue } from "../../hooks/issuesHooks";
const searchFormSchema = zod.object({
  query: zod.string(),
});
type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchField() {
  const [query, setQueryState] = useState("");
  const { fetchGetIssue, issues } = useIssue();
  const qtdIssues = issues.length;

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSetQUery(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setQueryState(e.target.value);
  }

  function handleSearchQuery() {
    fetchGetIssue(query);
  }
  return (
    <Container>
      <div>
        <p>Publicações</p>
        <span>
          {`${qtdIssues} ${qtdIssues === 1 ? "publicação" : "publicações"} `}
        </span>
      </div>

      <form onSubmit={handleSubmit(handleSearchQuery)}>
        <input
          {...register("query")}
          placeholder="Buscar conteúdo"
          onChange={handleSetQUery}
        />
      </form>
    </Container>
  );
}
