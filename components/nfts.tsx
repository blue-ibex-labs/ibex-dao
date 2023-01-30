import { useAssets, useWalletList } from "@meshsdk/react";
import { useState } from "react";

export default function NFTList() {
  const assets = useAssets();
  let distinctAssets = [];
  if (assets) {
    distinctAssets = assets.filter(
      (thing, i, arr) =>
        arr.findIndex((t) => t.policyId === thing.policyId) === i
    );
  }

  if (distinctAssets.length > 0) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {distinctAssets.map((pl) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{pl.assetName}</div>
              <p className="text-gray-700 text-base truncate"></p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}
