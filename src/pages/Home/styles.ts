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
