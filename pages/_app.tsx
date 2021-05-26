import { AppProps } from "next/app";
import "../src/App.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
