import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus{
        outline: 0;
        box-shadow :0 0 0 2px transparent ;
    }
    body{
        background-color: ${(props) => props.theme.baseBackground} ;
        color:  #AFC2D4;
        -webkit-font-smoothing: antialiased;
    }
    body,input,textarea,button{
        font: 400 1rem Nunito ,sans-serif ;
    }

    a{
        text-decoration:none;
    }
`;
