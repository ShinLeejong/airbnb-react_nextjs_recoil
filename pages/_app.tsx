import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import GlobalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
