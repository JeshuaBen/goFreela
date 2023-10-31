import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

import logo from "../../assets/logoGoogle.png";
import google from "../../assets/googleText.png";
import { Header } from "../../components/Header";
import api from "../../services/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { VITE_lOCAL_STORAGE_TOKEN } = import.meta.env;

  const handleLogin = async () => {
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem(
        String(VITE_lOCAL_STORAGE_TOKEN),
        data.user.authentication.sessionToken
      );

      console.log(data.user.authentication.sessionToken);
      navigate("/home");
    } catch (error) {
      console.log("Deu erro porra", error);
    }
  };

  const handleCadastrar = () => {
    navigate("/signUp");
  };

  return (
    <S.ContainerLogin>
      <Header variant handleRegister={handleCadastrar} />

      <S.Text>Login</S.Text>

      <S.ButtonSocialContainer>
        {/* <S.ButtonFacebook>
          <S.IconFacebook />
        </S.ButtonFacebook> */}
        <S.ButtonGoogle>
          <img src={logo} />
          <img src={google} />
        </S.ButtonGoogle>
        {/* <S.ButtonLinkdin>
          <S.IconLinkdin />
        </S.ButtonLinkdin> */}
      </S.ButtonSocialContainer>

      <S.LineContainer>
        <S.Line
          style={{
            marginRight: "1rem",
          }}
        />
        <S.Divider>
          <S.Text>ou</S.Text>
        </S.Divider>
        <S.Line
          style={{
            marginLeft: "1.5rem",
          }}
        />
      </S.LineContainer>

      <S.ButtonWrapperLog>
        <S.ButtonLoginFlut>Login</S.ButtonLoginFlut>
        <S.ButtonCadastrar onClick={handleCadastrar}>
          Cadastre-se
        </S.ButtonCadastrar>
      </S.ButtonWrapperLog>

      <S.InputField
        type="text"
        placeholder="E-mail ou usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <S.InputField
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <S.ButtonLogin onClick={handleLogin}>Entrar</S.ButtonLogin>
    </S.ContainerLogin>
  );
};

export default LoginPage;
