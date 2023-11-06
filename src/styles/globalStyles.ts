import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    :root { 
        --grey: #9A9A9A;
        --grey-dark: #242424;
        --background: #1A1A1A;
        --black: #1F1E1F;
    }

    a, button {
        color: var(--grey);
        cursor: pointer;
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    main, header, footer {
        color: var(--grey);
    }

    .container {
        max-width: 1200px;
        margin: auto;
    }

    .font-54px {
        font-size: 54px;
    }

    .font-28px {
        font-size: 28px;
    }

    .font-12px {
        font-size: 12px;
    }
`