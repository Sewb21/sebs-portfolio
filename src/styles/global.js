import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');


    * {
        box-sizing: border-box;

    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: 'Dosis', sans-serif;
    }

    body {
        margin: 0;
        background-color: #3aafa2;
    }
`
