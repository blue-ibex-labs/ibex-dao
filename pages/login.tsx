import { CardanoWallet, MeshBadge, useAssets, useWallet } from "@meshsdk/react";
import { backendGetNonce, backendVerifySignature } from "../backend";
import { useEffect, useState } from "react";
import Menu from "../components/menu";
import NFT from "../components/nfts";
import MyWallet from "../components/nfts";

export default function Login() {
  const { wallet, connected } = useWallet();
  const [state, setState] = useState<number>(0);
  const assets = useAssets();

  async function frontendStartLoginProcess() {
    if (connected) {
      setState(1);
      const userAddress = (await wallet.getRewardAddresses())[0];
      const res = await backendGetNonce(userAddress);
      await frontendSignMessage(res.nonce);
    }
  }

  async function frontendSignMessage(nonce: string) {
    try {
      const userAddress = (await wallet.getRewardAddresses())[0];
      const signature = await wallet.signData(userAddress, nonce);
      const res = await backendVerifySignature(nonce, userAddress, signature);
      if (res.result === true) {
        setState(2);
      } else {
        setState(3);
      }
    } catch (error) {
      setState(0);
    }
  }

  return (
    <div className="flex h-screen items-center ">
      <div className="w-1/12 px-1 border-r">
        <Menu />
      </div>
      <div className="bg-ibex-pattern2 bg-cover bg-center h-screen w-screen fixed -z-10">
        <div className="flex h-screen items-center bg-gradient-to-l from-black via-stone-600"></div>
      </div>
      <div className="w-11/12">
        <div className="grid place-content-start md:place-content-center">
          <div>
            {state == 0 && (
              <CardanoWallet
                label="Sign In"
                onConnected={() => frontendStartLoginProcess()}
              />
            )}
            {state == 1 && <div>Signing in...</div>}
            {state == 2 && (
              <div className="grid">
                <div>Signed in successful</div>
                <div>
                  <MyWallet asset={assets} />
                </div>
                <div>
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Assets
                  </button>
                </div>
              </div>
            )}
            {state == 3 && (
              <div style={{ color: "#FF4136" }}>Signed in failed</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
