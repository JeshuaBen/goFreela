
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
ButtonLogin,
ContainerLogin,
InputField,
Text,
ButtonLoginFlut,
ButtonCadastrar,
ButtonWrapperLog,

    
  } from "./styles";


function LoginPage() {
const [email, setEmail] = useState(""); // Estado para o email
const [password, setPassword] = useState(""); // Estado para a senha
const [loginSuccess, setLoginSuccess] = useState(false);
const navigate = useNavigate();


 const handleLogin = () => {
      // Lógica de login
      if (email && password) {
        setLoginSuccess(true);
        alert("Login efetuado com sucesso!")
      }else{
        alert("Preencha todos os campos");
      }
    };

    

      const handleCadastrar = () => {
        navigate("/SignUpPage");
      };

  return ( 
    <ContainerLogin>
      <Text>Fazer login na plataforma</Text>

      <ButtonWrapperLog>
      <ButtonLoginFlut>Login</ButtonLoginFlut> 
      <ButtonCadastrar onClick={handleCadastrar}>Cadastre-se</ButtonCadastrar>
      </ButtonWrapperLog>
      <br/>
      <InputField
        type="text"
        placeholder="E-mail ou usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
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
