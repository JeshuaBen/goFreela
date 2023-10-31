import { useState } from "react";
import { ISignUp } from "../pages/SignUp/types";
import toast from "react-hot-toast";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [formValues, setFormValues] = useState<ISignUp>({
    email: "",
    password: "",
    username: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (values: ISignUp) => {
    setIsLoading(true);
    try {
      const { data } = await api.post("/auth/register", {
        email: values.email,
        password: values.password,
        username: values.username,
      });

      console.log(data);
      navigate("/login");
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      toast.error("Ocorreu algum erro no cadastro, tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formValues,
    setFormValues,
    handleSignUp,
    isLoading,
  };
};

export default useSignUp;
