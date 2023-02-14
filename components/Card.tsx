import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="flex rounded-xl border bg-gray-50 justify-center w-full mt-5 flex-col lg:flex-row  lg:max-w-[450px] xl:max-w-[420px]">
      <div className="rounded-lg shadow-xl bg-white w-[100%]  ">
        <a href="#!">
          <Image
            src="/../public/assects/9.png"
            alt="nft"
            width={400}
            height={400}
            className=" m-auto w-full "
          />
        </a>
      </div>
      <div className="p-3 w-[100%]  lg:max-w-[230px] ">
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          {item.assetName}
        </h5>
        <div className=" text-gray-900 text-base mb-4 break-words  w-full">
          {item.policyId}
        </div>
        <div className="flex justify-between mb-2 text-xs font-bold text-red-600">
          <span>Mint:120ADA</span>
          <span>Supply:1000 NFTs</span>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="font-bold  text-sm  text-red-600 ">floor:200ADA</h4>
          <h4 className="font-bold text-center text-sm  text-red-600 ">
            volume:100K
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
