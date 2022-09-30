import { Header } from "../../components/Header";
import {
  Container,
  Content,
  InfoWrapper,
  IconWrapper,
  Icon,
  Hello,
  TitleWrapper,
  Title,
  Description,
  ButtonWrapper,
  Button,
  FowardIconWrapper,
  FowardIcon,
} from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <InfoWrapper>
          <IconWrapper>
            <Icon />
            <Hello>Hello World</Hello>
          </IconWrapper>

          <TitleWrapper>
            <Title>
              Acelere as etapas para sua <br />
              primeira contratação
            </Title>
            <Description>
              A plataforma específica para você desenvolvedor aumentar suas
              <br />
              habilidades e para você empresa encontrar o seu talento
            </Description>
          </TitleWrapper>

          <ButtonWrapper>
            <Button>CONHECER PLATAFORMA</Button>
            <FowardIconWrapper>
              <FowardIcon />
            </FowardIconWrapper>
          </ButtonWrapper>
        </InfoWrapper>
      </Content>
    </Container>
  );
};
