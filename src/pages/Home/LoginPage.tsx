
import React, { useState } from "react";
import {
ButtonLogin,
Container,
InputField,
Form
    
  } from "./styles";


function LoginPage() {
const [email, setEmail] = useState(""); // Estado para o email
 const [password, setPassword] = useState(""); // Estado para a senha
  
 const handleLogin = () => {};
      // Lógica de login
  return ( 
    <Container>
    <Form>
      <InputField
        type="text"
        placeholder="Email"
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
    </Form>
  </Container>

  );
 
}


export default LoginPage;
