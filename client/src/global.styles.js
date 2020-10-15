import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        text-align: center;


        @media screen and (max-width:800px)
        {
            padding :10px;
        }
        @media screen and (max-width:1200px)
        {
            padding :20px;
        }
    }
    
    a{
        text-decoration:none ;
        color: black;
    }
    
    * {
        box-sizing: border-box;
    }
    
  
`;