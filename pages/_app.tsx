import "../styles/globals.css";
import type { AppProps } from "next/app";

import { MeshProvider } from "@meshsdk/react";
import Header from "./header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Header />
      <Component {...pageProps} />
    </MeshProvider>
  );
}

export default MyApp;
