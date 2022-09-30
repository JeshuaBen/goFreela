import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

body {
  font-size: 1rem;
  overflow-x: hidden;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  opacity: 1;
  font-family: 'Roboto';
}
`;
