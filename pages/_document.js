import { Html, Head, Main, NextScript } from "next/document";
// Importing the necessary components from Next.js's document module
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
// Importing the ServerStyleSheet class from styled-components

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Creating a new instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    // Saving the original renderPage method from ctx for later use
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />), // Wrapping the App component with the ServerStyleSheet's collectStyles method to collect all the styles used in the App component
        });

      const initialProps = await Document.getInitialProps(ctx); // Getting the initial props from the Document component
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()], // Adding the styles collected by the ServerStyleSheet to the initial props
      };
    } finally {
      sheet.seal(); // Seal the ServerStyleSheet to prevent further changes
    }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
