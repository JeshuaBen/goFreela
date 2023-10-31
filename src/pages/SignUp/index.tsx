import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import useSignUp from "../../hooks/useSignUp";
import { Toaster } from "react-hot-toast";

const SignUpPage = () => {
  const { formValues, handleSignUp, setFormValues } = useSignUp();

  const navigate = useNavigate();

  return (
    <>
      <Toaster
        position="top-right"
        containerStyle={{
          fontWeight: "600",
        }}
      />

      <S.ContainerLogin>
        <S.ButtonWrapperLog>
          <S.ButtonLoginSign onClick={() => navigate("/login")}>
            Login
          </S.ButtonLoginSign>
          <S.ButtonCadastrarSign>Cadastre-se</S.ButtonCadastrarSign>
        </S.ButtonWrapperLog>

        <S.InputField
          placeholder="E-mail"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />

        <S.InputField
          placeholder="Senha"
          type="password"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
        />

        <S.InputField
          placeholder="Usuário"
          type="text"
          value={formValues.username}
          onChange={(e) =>
            setFormValues({ ...formValues, username: e.target.value })
          }
        />

        <S.ButtonLogin onClick={() => handleSignUp(formValues)}>
          Cadastrar
        </S.ButtonLogin>
      </S.ContainerLogin>
    </>
  );
};

export default SignUpPage;
