import React from "react";
import Image from "next/image";

export async function getServerSideProps(context) {
  //   console.log("id", context.query.policy);
  const res = await fetch(
    `https://ibex-dao-rose.vercel.app/api/assets?policy=${context.query?.policy}`
  );
  //   https://ibex-dao-rose.vercel.app/
  const data = await res.json();
  // console.log(data);

  return { props: { data: data } };
}

const policy = ({ data }) => {
  // console.log("dasvdjhvavaskvasjvcjkasvjhcvasj", data);
  return (
    <div className="flex w-full container mx-auto  ">
      <div className="flex flex-wrap justify-evenly ">
        {data?.asset?.map((item, id) =>
          item?.onchain_metadata?.image ? (
            <div
              key={id}
              className=" w-[93%] md:max-w-[310px] xl:max-w-[340px] p-6 lg-p-8 mt-8 lg-mt-12 border rounded-lg shadow-xl"
            >
              <div>
                <Image
                  src={`http://gateway.ipfs.io/ipfs/${item?.onchain_metadata?.image.replace(
                    "ipfs://",
                    ""
                  )}`}
                  width={300}
                  alt="nft"
                  height={300}
                  style={{ margin: "auto" }}
                  unoptimized
                />

                <div className="pt-4">
                  <span className="break-words  ">
                    <div className="flex flex-wrap  font-bold">
                      Asset Name:{" "}
                    </div>{" "}
                    {item?.onchain_metadata?.name}
                  </span>
                  <span className=" flex flex-wrap ">
                    {" "}
                    <div className="font-bold ">Quantity : </div>{" "}
                    {item?.quantity}
                  </span>
                  <span className=" flex flex-wrap ">
                    <div className="font-bold "> Author: </div>{" "}
                    {item?.onchain_metadata?.authors}
                  </span>{" "}
                  <div className="flex flex-wrap">
                    <span className="font-bold ">Description : </span>
                    <span>{item?.onchain_metadata?.description}</span>
                  </div>{" "}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default policy;
