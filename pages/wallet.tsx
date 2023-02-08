import { useState } from "react";
import type { NextPage } from "next";
import { useWallet } from "@meshsdk/react";
import { CardanoWallet } from "@meshsdk/react";
import CardList from "../components/CardList";

const Wallet: NextPage = () => {
  const { connected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getAssets() {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-6 w-ful mt-4">
      <CardanoWallet />
      {connected && (
        <>
          <h1 className="mt-4">Get Wallet Assets</h1>
          {assets ? (
            <code className="language-js md:flex flex-wrap xl:flex-wrap justify-evenly  ">
              {/* {JSON.stringify(assets, null, 2)} */}
              <CardList assets={assets} />
            </code>
          ) : (
            <button
              type="button"
              onClick={() => getAssets()}
              disabled={loading}
              style={{
                margin: "8px",
                backgroundColor: loading ? "orange" : "gray",
              }}
              className=" font-bold rounded p-4 text-yellow-50  "
            >
              <span> Show Wallet Assets</span>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Wallet;
