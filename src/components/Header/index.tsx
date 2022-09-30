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
            <Login>ENTRAR</Login>
          </LoginWrapper>
          <CreateAccount>CRIAR CONTA</CreateAccount>
        </MenuWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
