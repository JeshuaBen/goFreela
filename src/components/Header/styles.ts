import styled from "styled-components";
import { IoPersonOutline } from "react-icons/io5";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 88px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 35%;

  display: flex;
  justify-content: space-around;
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
export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  padding: 12px 24px;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const Icon = styled(IoPersonOutline)`
  color: ${({ theme }) => theme.colors.purple500};
  font-size: 1rem;
`;
export const Login = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
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
