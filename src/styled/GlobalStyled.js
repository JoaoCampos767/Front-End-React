import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-size: border-box;

    font-family: "Lato";
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: grayscaler;
}

#root {
    height: 100vh;
}

ul, li {
    list-style: none;
}

body {
    background-color: #EBF6FF;
}
`;
