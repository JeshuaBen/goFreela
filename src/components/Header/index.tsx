import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  Logo,
  MenuWrapper,
  Login,
  CreateAccount,
  LoginWrapper,
  Icon,
  NavigationContainer,
  HomePage,
  About,
  Planos,
} from "./styles";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/LoginPage");
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo>goFreela</Logo>
        </LogoWrapper>
        <NavigationContainer>
          <HomePage>Home</HomePage>
          <Planos>Planos</Planos>
          <About>Quem somos?</About>
        </NavigationContainer>
        <MenuWrapper>
          <LoginWrapper>
            <Icon />
            <Login onClick={handleLoginClick} >ENTRAR</Login>
          </LoginWrapper>
          <CreateAccount onClick={() => navigate("/SignUpPage")} >CRIAR CONTA</CreateAccount>
        </MenuWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
