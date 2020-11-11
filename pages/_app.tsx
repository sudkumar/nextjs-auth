import NextApp from "next/app";
import { bootstrapXHR } from "../packages/xhr";

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    await bootstrapXHR(ctx);
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, ...otherProps } = this.props;
    return <Component {...otherProps} {...pageProps} />;
  }
}

export default App;
