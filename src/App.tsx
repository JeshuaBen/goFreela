
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Home/LoginPage";
import SignUpPage from "./pages/Home/SignUpPage";
import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home";
import GlobalStyles from './global/styles/global';
import theme from "./global/styles/theme";

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
          <Route path="/SignUpPage" element={<SignUpPage/>} />
          
        </Routes>
      </Router>
    </ThemeProvider>
    
  )
}

export default App
