import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { THeader } from "./types";

export const Header: React.FC<THeader> = ({ variant, handleRegister }) => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <>
      {!variant ? (
        <S.HeaderContainer>
          <S.HeaderWrapper>
            <S.LogoWrapper>
              <S.Logo onClick={() => navigate("/landingPage")}>goFreela</S.Logo>
            </S.LogoWrapper>
            <S.NavigationContainer>
              <S.HomePage>Home</S.HomePage>
              <S.Planos>Planos</S.Planos>
              <S.About>Quem somos?</S.About>
            </S.NavigationContainer>
            <S.MenuWrapper>
              <S.LoginWrapper>
                <S.Icon />
                <S.Login onClick={handleLoginClick}>ENTRAR</S.Login>
              </S.LoginWrapper>
              <S.CreateAccount onClick={() => navigate("/signUp")}>
                CRIAR CONTA
              </S.CreateAccount>
            </S.MenuWrapper>
          </S.HeaderWrapper>
        </S.HeaderContainer>
      ) : (
        <S.HeaderContainer>
          <S.HeaderWrapper>
            <S.LogoWrapper>
              <S.Logo onClick={() => navigate("/landingPage")}>goFreela</S.Logo>
            </S.LogoWrapper>
            <S.NavigationContainer>
              <S.CreateAccountText>
                Ainda não tem uma conta?
              </S.CreateAccountText>
              <S.CreateAccount onClick={handleRegister}>
                CRIAR CONTA
              </S.CreateAccount>
            </S.NavigationContainer>
          </S.HeaderWrapper>
        </S.HeaderContainer>
      )}
    </>
  );
};
