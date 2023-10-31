import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple400};
`;

export const Text = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.black};
`;
