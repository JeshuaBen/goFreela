import Routes from "../src/routes/index";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global/styles/global";
import theme from "./global/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
