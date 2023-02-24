import { Container } from "./styled";
import { useForm } from "react-hook-form";

export function SearchField() {
  const { register, handleSubmit } = useForm();

  function fetchIssue() {}
  return (
    <Container>
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>

      <form action="">
        <input {...register("queryField")} placeholder="Buscar conteúdo" />
      </form>
    </Container>
  );
}
