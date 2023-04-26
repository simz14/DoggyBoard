import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  h2{
    font-size: 24px;
    color: black;
    font-weight: 800;
  }
  h3{
    font-size: 14px;
    font-weight: 500;
  }
  p{
    font-size: 12px;
    font-weight: 500;
  }
  span{
    font-size: 14px;
    color: gray;
  }
`;
export default GlobalStyles;
