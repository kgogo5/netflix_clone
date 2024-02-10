import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}
    #root {
        padding-bottom:198px;
        @media (max-width:1080px){
            padding-bottom:450px;
        }
        @media (max-width:768px){
            padding-bottom:0;
        }
    }
    a{
        text-decoration : none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        position:relative;
        min-height:100vh;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:50px;

        @media (max-width:620px) {
            padding-top:120px;
        }
    }
    .hideText {
        overflow: hidden;
        display: inline-block;
        border: 0;
        margin: -1px;
        width: 1px;
        height: 1px;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
    }
`;

export default globalStyles;
