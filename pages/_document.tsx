// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Manage all you travel agent needs at one place"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className="body-element">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
