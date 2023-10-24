import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  } from "react-icons/io5";
import {
  ButtonLogin,
  ContainerLogin,
  InputField,
  Text,
  ButtonLoginFlut,
  ButtonCadastrar,
  ButtonWrapperLog,
  HeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  Logo,
  CreateAccount,
  NavigationContainer,
  Line,
  LineContainer,
  Divider,
  CreateAccountText,
  ButtonSocialContainer,
  ButtonGoogle,
  ButtonFacebook,
  ButtonLinkdin,
  IconGoogle,
  IconFacebook,
  IconLinkdin,

} from "./styles";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      setLoginSuccess(true);
      alert("Login efetuado com sucesso!");
    } else {
      alert("Preencha todos os campos");
    }
  };

  const handleCadastrar = () => {
    navigate("/SignUpPage");
  };

  return (
    <ContainerLogin>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoWrapper>
            <Logo>goFreela</Logo>
          </LogoWrapper>
          <NavigationContainer>
            <CreateAccountText>
              Ainda não tem uma conta?
              <CreateAccount onClick={handleCadastrar}>
                CRIAR CONTA
              </CreateAccount>
            
            </CreateAccountText>
          </NavigationContainer>
        </HeaderWrapper>
      </HeaderContainer>

      <Text>Login</Text>

      <ButtonSocialContainer>
  <ButtonFacebook>
    <IconFacebook /> 
  </ButtonFacebook>
  <ButtonGoogle>
    <IconGoogle /> 
  </ButtonGoogle>
  <ButtonLinkdin>
    <IconLinkdin /> 
  </ButtonLinkdin>
</ButtonSocialContainer>

      <LineContainer>
        <Line />
        <Divider>
          <Text>ou</Text>
        </Divider>
        <Line />
      </LineContainer>



      <ButtonWrapperLog>
        <ButtonLoginFlut>Login</ButtonLoginFlut>
        <ButtonCadastrar onClick={handleCadastrar}>Cadastre-se</ButtonCadastrar>
      </ButtonWrapperLog>

      <InputField
        type="text"
        placeholder="E-mail ou usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ButtonLogin onClick={handleLogin}>Entrar</ButtonLogin>
    </ContainerLogin>
  );
}

export default LoginPage;
