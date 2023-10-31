import { Header } from "../../components/Header";
import * as S from "./styles";

const LandingPage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.InfoWrapper>
          <S.IconWrapper>
            <S.Icon />
            <S.Hello>S.Hello World</S.Hello>
          </S.IconWrapper>

          <S.TitleWrapper>
            <S.Title>
              Acelere as etapas para sua <br />
              primeira contratação
            </S.Title>
            <S.Description>
              A plataforma específica para você desenvolvedor aumentar suas
              {""}
              habilidades e para você empresa encontrar o seu talento
            </S.Description>
          </S.TitleWrapper>

          <S.ButtonWrapper>
            <S.Button>CONHECER PLATAFORMA</S.Button>
            <S.FowardIconWrapper>
              <S.FowardIcon />
            </S.FowardIconWrapper>
          </S.ButtonWrapper>
        </S.InfoWrapper>
      </S.Content>
    </S.Container>
  );
};

export default LandingPage;
