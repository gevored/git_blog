import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container } from "./AppStyled";
import { PresentationCard } from "./components/PresentationCard";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <PresentationCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
