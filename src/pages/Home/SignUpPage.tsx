import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerLogin,
  InputField,
  Text,
  ButtonLoginSign,
  ButtonCadastrarSign,
  ButtonWrapperLog,
  ButtonLogin,
  InputWrapper,
  InputFieldSing,
} from "./styles";

function SignUpPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Lógica para enviar os dados ao servidor e criar uma conta
    if (firstName && lastName && email && password && confirmPassword) {
      // Enviar os dados para o servidor aqui
      // Se bem-sucedido, redirecionar para a página de login
      navigate("/LoginPage");
    } else {
      alert("Preencha todos os campos");
    }
  };
  return (
    <ContainerLogin>
      <Text>Criar conta na plataforma</Text>

      <ButtonWrapperLog>
        <ButtonLoginSign>Login</ButtonLoginSign>
        <ButtonCadastrarSign>Cadastre-se</ButtonCadastrarSign>
      </ButtonWrapperLog>

      <InputWrapper>
        <InputFieldSing
          placeholder="Nome"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputFieldSing
          placeholder="Sobrenome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </InputWrapper><br />

      <InputField
        placeholder="E-mail ou usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <InputField
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <InputField
        placeholder="Confirmação de senha"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <ButtonLogin onClick={handleSignUp}>Cadastrar</ButtonLogin>
    </ContainerLogin>
  );
}

export default SignUpPage;
