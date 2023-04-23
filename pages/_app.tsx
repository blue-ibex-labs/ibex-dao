import "../styles/globals.css";
// import dynamic from 'next/dynamic'
import type { AppProps } from "next/app";

import { MeshProvider } from "@meshsdk/react";
import Header from "../components/header";
import Head from "next/head";
import 'atropos/css'


// const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
//   ssr: false
// });


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IBEX DAO</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      </Head>
      <MeshProvider>
        {/* <AnimatedCursor color="0,0,0"
        innerSize={8}
        outerSize={20}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        trailingSpeed={4}
        outerStyle={{
          border: '3px solid #000'
        }} /> */}
        <Header />
        <Component {...pageProps} />

      </MeshProvider>
    </>
  );
}

export default MyApp;
