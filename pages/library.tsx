export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:3000/api/assets?policy=9cb921b32bfe214a739ed824f3f2da4e16c535a5448253d2951cc732`
  );

  const data = await res.json();
  const assetID = data?.assets?.map(
    async (val) =>
      await fetch(`http://localhost:3000/api/asset?id=${val?.asset}`)
  );
  const inDAta = await Promise.all(assetID);
  const json = await Promise.all(
    inDAta.map(async (item: any) => await item.json())
  );
  // console.log("body data", JSON.stringify(json));

  return { props: { data: json } };
}

const Library = ({ data }) => {
  // console.log("hello world", data);

  return (
    <>
      <div className="flex w-full container mx-auto  ">
        <div className="flex flex-wrap justify-evenly ">
          {data?.map((item, id) => (
            <div
              key={id}
              className=" w-[93%] md:max-w-[310px] xl:max-w-[340px] p-6 lg-p-8 mt-8 lg-mt-12 border rounded-lg shadow-xl"
            >
              <div>
                <img
                  src={`http://gateway.ipfs.io/ipfs/${item?.assets?.onchain_metadata?.image.replace(
                    "ipfs://",
                    ""
                  )}`}
                  width={300}
                  alt="nft"
                  height={300}
                  style={{ margin: "auto" }}
                />
                <div className="pt-4">
                  <h1 className="flex-wrap break-words  ">
                    <span className="font-bold">Asset Name: </span>{" "}
                    {item?.assets?.onchain_metadata?.name}
                  </h1>
                  <h1>
                    {" "}
                    <span className="font-bold ">Quantity :</span>{" "}
                    {item?.assets?.quantity}
                  </h1>
                  <h1>
                    <span className="font-bold "> Author</span>{" "}
                    {item?.assets?.onchain_metadata?.authors}
                  </h1>{" "}
                  <span className="font-bold ">Description :</span>{" "}
                  {item?.assets?.onchain_metadata?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Library;
