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
          --color-popup: rgba(255, 255, 255, 0.9);
          --color-taskname: rgba(0, 0, 0, 0.8);
          --color-date: rgba(0, 0, 0, 0.6);
          --color-text: #000000;
          --color-calendar-border: /* rgba(223, 30, 123, 0.2) */rgba(0, 0, 0, 0.25);
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

      .rbc-toolbar {
        display: flex;
        flex-direction: column;
      }

      .rbc-btn-group button {
        background: var(--color-button);
        font-family: var(--font-primary);
        font-size: 1rem;
        color: var(--color-button-font);
        margin: 0.5rem 1rem 0.8rem 1rem;
        box-shadow: var(--shadow-box);
        border: 1px solid var(--shadow-addbutton);
      }
      .rbc-btn-group > button:first-child:not(:last-child), 
      .rbc-btn-group > button:not(:first-child):not(:last-child),
      .rbc-btn-group > button:last-child:not(:first-child) {
        border-radius: 15px;
      }
      
      .rbc-toolbar-label {
        font-size: 1.5rem;
        font-weight: 900;
        margin-top:0.3rem;
        margin-bottom: -1.5rem;
      }

      .rbc-time-view {
        border: none;
      }
      
    
      .rbc-time-header-content {
        border: none;
      }

      .rbc-today {
        background-color: transparent;
      }

      .rbc-time-content {
        background: var(--color-background);
        box-shadow: var(--shadow-box);
        border-radius: 10px;
        border-top: none;
        padding-top:1rem;
        padding-bottom: 0.5rem;
      }

      .rbc-timeslot-group {
        border-bottom: none;
        min-height: 45px;
      }

      .rbc-time-content > * + * > * {
        border-left: none;
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
        height: 3px;
      }
    
  `;

export default GlobalStyle;
