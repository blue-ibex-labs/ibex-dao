import React from "react";
import Image from "next/image";
import image from "public/9.png";

const Card = ({ item }) => {
  return (
    <div className="flex justify-center mt-5">
      <div className="rounded-lg shadow-xl bg-white max-w-[300px]  lg:max-w-xs xl:max-w-sm ">
        <a href="#!">
          <Image src={image} alt="nft" />
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
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-center lg:text-[16px] "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
