import { IoArrowForward, IoHandLeftSharp,  } from "react-icons/io5";
import { RiGoogleFill,RiFacebookFill,RiLinkedinFill } from "react-icons/ri";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Icon = styled(IoHandLeftSharp)`
  font-size: 24px;
  color: #ffdc5d;
`;

export const Hello = styled.span`
  font-size: 18px;
  color: #04d361;
`;

export const TitleWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 56px;
  color: ${({ theme }) => theme.colors.white};
`;
export const Description = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`;
export const ButtonWrapper = styled.div`
  width: 281px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 24px 15px 24px;
  background-color: ${({ theme }) => theme.colors.purple400};
  cursor: pointer;
  border-radius: 5px;
`;
export const Button = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.purple400};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const FowardIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #513f78;
  border-radius: 5px;
`;

export const FowardIcon = styled(IoArrowForward)`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;

//Estes componentes são referente a LoginPage
export const HeaderContainer = styled.div`
  width: 100%;
  height: 88px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: Outfit;
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px; 
  margin-bottom: 100px; 
  
`;
export const IconGoogle = styled(RiGoogleFill)`
  font-size: 24px;
  color: #fff;
`;
export const IconFacebook = styled(RiFacebookFill)`
  font-size: 24px;
  color: #fff;
`;
export const IconLinkdin = styled(RiLinkedinFill)`
  font-size: 24px;
  color: #fff;
`;

export const ButtonSocialContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  
`;

export const ButtonGoogle = styled.button`
  background-color: #dd4b39;
  color: white;
  font-size: 1.5em;
  padding: 12px 40px;
  margin-right: 10px; 

  
`;

export const ButtonFacebook = styled.button`
  background: #3b5998;
  color: white;
  font-size: 1.5em;
  padding: 12px 40px;
  margin-right: 10px; 
  
`;

export const ButtonLinkdin = styled.button`
  background-color: #0077B5;
  color: white;
  font-size: 1.5em;
  padding: 12px 40px;
 
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  margin: 20px;
`;

export const Line = styled.div`
  flex: 1;
  height: 3px;
  background-color: #ccc; /* Cor cinza */
  border-radius: 1px; /* Borda arredondada */
  margin: 0 10px; /* Espaço entre as duas metades */
`;

export const Divider = styled.div`
  width: 20px;
`;


export const ButtonWrapperLog = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ButtonLoginFlut = styled.button`
  background-color: #6A00BF;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 8px;
  width: 153px;
  height: 46px;
`;

export const ButtonCadastrar = styled.button`
  background-color: #000;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 8px;
  width: 153px;
  height: 46px;
`;

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  border: 1px solid #818181;
  border-radius: 12px;
  font-size: 16px;
  color: #818181;
  width: 416px;
  margin-bottom: 20px; /* Adiciona um espaçamento inferior */
`;

export const ButtonLogin = styled.button`
  background-color: #6A00BF;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 8px;
  width: 411px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px; /* Adiciona um espaçamento inferior */
`;

export const HeaderWrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoWrapper = styled.div``;
export const Logo = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
`;
export const NavigationContainer = styled.div`
  width: 200%;
  display: flex;
  justify-content: flex-end; /* Alinha o conteúdo à direita */
`;
export const HomePage = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
`;
export const About = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
`;
export const Planos = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
`;
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const CreateAccountText = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 10px; /* Adiciona um espaço à direita do texto */
  /* Outros estilos desejados para o texto "Ainda não tem uma conta?" */
`;

export const CreateAccount = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.purple400};
  border-radius: 5px;
  padding: 12px 24px;

  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple400};
  }
`;





//Estes componentes são referente a SingUpPage
export const ButtonLoginSign= styled.button`
 background-color: #000;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 153px;
  height: 46px;
`;
export const ButtonCadastrarSign = styled.button`
 background-color: #6A00BF;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 153px;
  height: 46px;
`;
export const InputFieldSing = styled.input`
background-color: ${({ theme }) => theme.colors.black};
padding: 10px;
border: 1px solid #818181;
border-radius: 12px;
font-size:Outfit 16px;
color: #818181; 
width: 216px;
`;
export const InputWrapper = styled.div`
  display: flex;
  gap: 20px; 
  }
`;






