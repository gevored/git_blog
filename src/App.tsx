import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container } from "./AppStyled";
import { PresentationCard } from "./components/PresentationCard";
import { SearchField } from "./components/SearchField";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <PresentationCard />
        <SearchField />
      </Container>
    </ThemeProvider>
  );
}

export default App;
