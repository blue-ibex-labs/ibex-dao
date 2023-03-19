import "../styles/globals.css";
import dynamic from 'next/dynamic'
import type { AppProps } from "next/app";

import { MeshProvider } from "@meshsdk/react";
import Header from "../components/header";


const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <AnimatedCursor color="255,255,255"
        innerSize={8}
        outerSize={20}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        trailingSpeed={4}
        outerStyle={{
          border: '3px solid #fff'
        }} />
      <Header />
      <Component {...pageProps} />
    </MeshProvider>
  );
}

export default MyApp;
