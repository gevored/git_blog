import { Container } from "./styled";

export function SearchField() {
  return (
    <Container>
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>
      <input type="text" name="search" placeholder="Buscar conteúdo" />
    </Container>
  );
}
