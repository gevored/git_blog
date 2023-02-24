import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container } from "./AppStyled";
import { PresentationCard } from "./components/PresentationCard";
import { SearchField } from "./components/SearchField";
import { BoardIssues } from "./components/BoardIssues";
import { UserProvider } from "./context/userContext";
import { IssueProvider } from "./context/IssuesContext";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvider>
        <IssueProvider>
          <Container>
            <Header />
            <PresentationCard />
            <SearchField />
            <BoardIssues />
          </Container>
        </IssueProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
