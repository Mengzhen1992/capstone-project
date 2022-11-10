import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --font-primary: 'Judson';
          --color-background: rgba(255, 255, 255, 0.4);
          --color-wrap: rgba(253, 231, 190, 0.4);
          --color-task: rgba(255, 255, 255, 0.5);
          --color-percent: #df1e7b;
          --color-button: rgba(223, 30, 123, 0.7);
          --color-button-font: #fff;
          --color-button-hover: rgba(223, 30, 123, 0.8);
          --color-addbutton: rgba(255, 255, 255, 0.45);
          --color-addbutton-border: rgba(255, 255, 255, 0.15);
          --color-popup: rgba(255, 255, 255, 0.8);
          --color-taskname: rgba(0, 0, 0, 0.8);
          --color-date: rgba(0, 0, 0, 0.6);
          --color-text: #000000;
          --shadow-box: 0px 4px 20px rgba(0, 0, 0, 0.1);
          --shadow-addbutton: 0px 4px 20px rgba(0, 0, 0, 0.15);
          --shadow-text: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

      .rbc-btn-group button {
        background: var(--color-button);
        font-family: var(--font-primary);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--color-button-font);
        margin: 1.5rem 1rem 0.8rem 1rem;
        box-shadow: var(--shadow-box);
        border: 1px solid var(--shadow-addbutton);
      }
      .rbc-btn-group > button:first-child:not(:last-child), 
      .rbc-btn-group > button:not(:first-child):not(:last-child),
      .rbc-btn-group > button:last-child:not(:first-child) {
        border-radius: 10px;
      }
      
      .rbc-toolbar-label {
        font-size: 1.4rem;
        font-weight: 700;
        margin-top:0.2rem;
        margin-bottom: -1.8rem;
      }

      .rbc-time-view,
      .rbc-time-header-content {
        border: none;
      }

      .rbc-today {
        background-color: transparent;
      }

      .rbc-time-content {
        border-top: 1.5px solid gray;
      }

      .rbc-timeslot-group {
        border-bottom: none;
        min-height: 50px;
      }

      .rbc-time-content > * + * > * {
        border-left: 1.5px solid gray;
      }

      .rbc-day-slot .rbc-time-slot {
        border-top: none;
      }

      .rbc-day-slot .rbc-event, .rbc-day-slot .rbc-background-event {
        background:var(--color-task);
        color: var(--color-taskname);
        opacity: 0.9;
        box-shadow: var(--shadow-box);
        border: 1px solid var(--shadow-addbutton);
      }

      .rbc-current-time-indicator {
        background-color: var(--color-button);
        height: 2px;
      }
    
  `;

export default GlobalStyle;
