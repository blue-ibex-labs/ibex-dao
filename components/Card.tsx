import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="flex rounded-xl border bg-gray-50 justify-center w-full mt-5 flex-col lg:flex-row  lg:max-w-[450px] xl:max-w-[420px]">
      <div className="rounded-lg shadow-xl bg-white w-[100%]  ">
        <a href="#!">
          <Image
            // src="/../public/assects/9.png"
            src={`/QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE`}
            alt="nft"
            width={400}
            height={400}
            className=" m-auto w-full "
          />
        </a>
      </div>
      <div className="p-3 w-[100%]  lg:max-w-[230px] ">
        <div className=" text-gray-900 text-base mb-2 break-words font-bold w-full">
          Quantity:{item.quantity}
        </div>
        <div className=" text-gray-900 text-base mb-2 break-words font-bold w-full">
          collection: {item.onchain_metadata.Collection}
        </div>

        <h5 className="text-gray-900 text-xl font-bold mb-2">
          Name {item.asset_name}
        </h5>
        <div className=" text-gray-900 text-base mb-4 break-words  w-full">
          {item.policy_id}
        </div>
        <div className="flex justify-between mb-2 text-sm font-bold text-red-600">
          <span> Mint: {item.mint_or_burn_count}</span>
          <span>Supply:{item.Supply}</span>
        </div>
        <div className="flex justify-between  items-center">
          <h4 className="font-bold  text-sm  text-red-600 ">
            floor:{item.Floor}
          </h4>
          <h4 className="font-bold text-center text-sm  text-red-600 ">
            volume:{item.Volume}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
