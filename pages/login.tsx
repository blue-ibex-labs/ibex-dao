// import {  useWallet } from "@meshsdk/react";
// import { backendGetNonce, backendVerifySignature } from "../backend";
// import { useState } from "react";
import Menu from "../components/menu";
import Wallet from "./wallet";

export default function Login() {
  // const { wallet, connected } = useWallet();
  // const [_, setState] = useState<number>(0);

  // async function frontendStartLoginProcess() {
  //   if (connected) {
  //     setState(1);
  //     const userAddress = (await wallet.getRewardAddresses())[0];
  //     const res = await backendGetNonce(userAddress);
  //     await frontendSignMessage(res.nonce);
  //   }
  // }

  // async function frontendSignMessage(nonce: string) {
  //   try {
  //     const userAddress = (await wallet.getRewardAddresses())[0];
  //     const signature = await wallet.signData(userAddress, nonce);
  //     const res = await backendVerifySignature(nonce, userAddress, signature);
  //     if (res.result === true) {
  //       setState(2);
  //     } else {
  //       setState(3);
  //     }
  //   } catch (error) {
  //     setState(0);
  //   }
  // }

  return (
    <div className="flex h-screen items-center  ">
      <div className="w-1/12 px-1 border-r">
        <Menu />
      </div>
      <div className="bg-ibex-pattern2 bg-cover bg-center h-screen w-screen fixed -z-10">
        <div className="flex h-screen items-center bg-gradient-to-l from-black via-stone-600"></div>
      </div>
      <div className="w-11/12">
        <div className="grid place-content-start justify-center md:place-content-center">
          <div>
            <Wallet />


          </div>
        </div>
      </div>
    </div>
  );
}
