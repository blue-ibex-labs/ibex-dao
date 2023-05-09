import React from "react";
import Image from "next/image";

export async function getServerSideProps(context) {
  //   console.log("id", context.query.policy);
  const res = await fetch(
    `http://localhost:3000/api/assets?policy=${context.query?.policy}`
  );
  //   https://ibex-dao-rose.vercel.app/
  const data = await res.json();
  console.log(data);

  return { props: { data: data } };
}

const policy = ({ data }) => {
  console.log("dasvdjhvavaskvasjvcjkasvjhcvasj", data);
  return (
    <div className="flex w-full container mx-auto  ">
      <div className="flex flex-wrap justify-evenly ">
        {data?.asset?.map((item, id) => (
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
                <h1 className="flex-wrap break-words  ">
                  <div className="font-bold">Asset Name: </div>{" "}
                  {item?.onchain_metadata?.name}
                </h1>
                <h1>
                  {" "}
                  <div className="font-bold ">Quantity :</div> {item?.quantity}
                </h1>
                <h1>
                  <div className="font-bold "> Author</div>{" "}
                  {item?.onchain_metadata?.authors}
                </h1>{" "}
                <div className="font-bold ">Description :</div>{" "}
                {item?.onchain_metadata?.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default policy;
