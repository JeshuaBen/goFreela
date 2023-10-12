import { IoArrowForward, IoHandLeftSharp } from "react-icons/io5";
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

export const ButtonLogin = styled.button`
border: 0;
  background-color: ${({ theme }) => theme.colors.purple400};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 199px;  
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%
  
  
`;
export const InputField = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const Form = styled.form`
  background-color: #000; /* Cor de fundo preta */
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  display: flex;
  flex-direction: column;
  
`;


