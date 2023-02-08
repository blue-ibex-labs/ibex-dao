import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="flex justify-center mt-5 container mx-auto">
      <div className="rounded-lg shadow-xl bg-white w-[100%] sm:max-w-[100%] lg:max-w-[300px] ">
        <a href="#!">
          <Image
            src="/../public/assects/9.png"
            alt="nft"
            width={400}
            height={400}
            className=" m-auto w-full "
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {item.assetName}
          </h5>
          <div className=" text-gray-900 text-base mb-4 break-words  w-full">
            {item.policyId}
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-center lg:text-lg text-blue-800 ">
              200$
            </h4>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-[16px] rounded-full"
            >
              Addto cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
