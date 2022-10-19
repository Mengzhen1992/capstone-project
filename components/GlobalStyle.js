import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --font-primary: 'Judson';
      }

      /* judson-regular - latin */
      @font-face {
         font-family: 'Judson';
         font-style: normal;
         font-weight: 400;
         src: local(''),
            url('/fonts/judson-v18-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/judson-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }

      *,
      *::before,
      *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
      }
  
      body {
          font-family: var(--font-primary);
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
  `;

export default GlobalStyle;
