import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --orange-bg: #2f2618;
        --orange:#ff9d01;
        --magenta: #ff005c;
        --gray-bg: #2b2b2c;
        --btn-gradient:linear-gradient(165deg, #e5ff39 0, #f2fb25 10%, #f8e612 20%, #f8ce05 30%, #f0b305 40%, #e2970c 50%, #d17c13 60%, #c16519 70%, #b2521e 80%, #a74222 90%, #9d3527 100%);
        --btn-gradient-secondary: linear-gradient(140deg, #3b3022, #3b2329);
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        background: white;
        font-family: sans-serif;
        color: black;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
    } 
    a {
        text-decoration: none;
        color: black;
    }
    a:visited {
        color: blue;
    }
    li {
        list-style: none;
    }
`
