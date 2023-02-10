import React from "react";
import { useState } from "react";
import { CardanoWallet, useLovelace, useWallet } from "@meshsdk/react";
import { createTransaction, signTransaction } from "../backend";

import Menu from "../components/menu";

export default function Minting() {
    const { wallet, connected } = useWallet();
    const [txHash, setTxHash] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const lovelace = useLovelace();

    async function startMining() {
        setLoading(true);
        try {
            const recipientAddress = await wallet.getChangeAddress();
            const utxos = await wallet.getUtxos();

            const { assetName, maskedTx, originalMetadata } = await createTransaction(
                recipientAddress,
                utxos
            );

            const signedTx = await wallet.signTx(maskedTx, true);

            const { appWalletSignedTx } = await signTransaction(
                assetName,
                signedTx,
                originalMetadata
            );

            const txHash = await wallet.submitTx(appWalletSignedTx);

            setTxHash(txHash);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
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
                    <div className="flex flex-row">
                        {connected ? (
                            <div className="grid grid-rows-3 grid-flow-col gap-4">
                                <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                    <div>
                                        <h2 className="text-gray-900 text-lg font-bold">
                                            Balance <b>₳ {parseInt(lovelace) / 1000000}</b>.
                                        </h2>
                                        <h3 className="mt-2 text-xl font-bold text-black text-left">
                                            + 150.000 ₭
                                        </h3>
                                        <p className="text-sm font-semibold text-gray-400">
                                            Last Transaction
                                        </p>
                                        <button
                                            className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none"
                                            type="button"
                                            onClick={() => startMining()}
                                            disabled={loading}
                                        >
                                            Mint
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center items-center ">
                                    <div className="text-white">
                                        <p>
                                            {loading ? "Creating transaction..." : "Ready to mint"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <CardanoWallet />
                        )}
                    </div>
                </div>
                <div className="flex flex-row">
                    {txHash && (
                        <div>
                            <p>Successful, transaction hash:</p>
                            <code>{txHash}</code>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}