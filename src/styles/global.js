import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
    }
`
