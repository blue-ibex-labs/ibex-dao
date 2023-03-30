import React from "react";

const Card = ({ item }) => {
  return (
    // <div className="flex rounded-xl border bg-gray-50 justify-center w-full mt-5 flex-col lg:flex-row  lg:max-w-[450px] xl:max-w-[420px]">
    //   <div className="rounded-lg shadow-xl bg-white w-[100%]  ">
    //     <a href="#!">
    //       <img
    //         src={`https://gateway.ipfs.io/ipfs/QmWUnNuYG3LCzjPYYBpxGhkc3KgCiWUhwVJrUJsceTiJe1`}
    //         style={{ maxWidth: "400px" }}
    //       />
    //     </a>
    //   </div>
    //   <div className="p-3 w-[100%]  lg:max-w-[230px] ">
    //     <div className=" text-gray-900 text-base mb-2 break-words font-bold w-full">
    //       Quantity:{item.quantity}
    //     </div>
    //     <div className=" text-gray-900 text-base mb-2 break-words font-bold w-full">
    //       collection: {item.onchain_metadata.Collection}
    //     </div>

    //     <div className="text-gray-900 text-lg font-[600] mb-2">
    //       Name : {item.asset_name}
    //     </div>
    //     <div className=" text-gray-900 text-base mb-4 break-words  w-full">
    //       {item.policy_id}
    //     </div>
    //     <div className="flex justify-between mb-2 text-sm font-bold text-red-600">
    //       <span> Mint: {item.mint_or_burn_count}</span>
    //       <span>Supply:{item.Supply}</span>
    //     </div>
    //     <div className="flex justify-between  items-center">
    //       <h4 className="font-bold  text-sm  text-red-600 ">
    //         floor:{item.Floor}
    //       </h4>
    //       <h4 className="font-bold text-center text-sm  text-red-600 ">
    //         volume:{item.Volume}
    //       </h4>
    //     </div>
    //   </div>
    // </div>
    <div className="flex w-full container mx-auto ">
      <div className="flex flex-wrap justify-evenly ">
        <div
          // key={id}
          className=" w-full md:max-w-[340px] lg:max-w-[440] p-8 mt-8 border rounded-sm "
        >
          <div className="">
            {/* {console.log(item.asset)} */}
            <div className="w-full md:max-w-[430px] p-4 mt-4 ">
              <img
                src={`https://gateway.ipfs.io/ipfs/QmUZr2zEMpUxWxzJbWbRHpb6vnn2rPghigte4wqJ7YD7dJ`}
                style={{ maxWidth: "300px" }}
              />
            </div>
            <h1 className="flex-wrap break-words text-xs ">
              <span className="font-bold">Asset Name: </span> {item.asset_name}
            </h1>
            <h1>
              {" "}
              <span className="font-bold text-xs">Quantity :</span>{" "}
              {item.quantity}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
