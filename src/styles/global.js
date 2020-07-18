import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;

    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: 'Open Sans';
    }

    body {
        margin: 0;
        background-color: #3aafa2;
    }
`;
