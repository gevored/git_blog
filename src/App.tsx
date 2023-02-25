import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./context/userContext";
import { IssueProvider } from "./context/IssuesContext";
import { InitialPage } from "./pages/InitialPage/initialPage";
import { Router } from "./router";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvider>
        <IssueProvider>
          <Router />
        </IssueProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
