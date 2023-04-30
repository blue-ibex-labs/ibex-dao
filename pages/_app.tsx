import "../styles/globals.css";
import type { AppProps } from "next/app";

import { MeshProvider } from "@meshsdk/react";
import Header from "../components/header";
import Head from "next/head";
import 'atropos/css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IBEX DAO</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </Head>
      <MeshProvider>

        <Header />
        <Component {...pageProps} />

      </MeshProvider>
    </>
  );
}

export default MyApp;
