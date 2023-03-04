import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"

import { MeshProvider } from "@meshsdk/react";
import Header from "./header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </MeshProvider>
  );
}

export default MyApp;
