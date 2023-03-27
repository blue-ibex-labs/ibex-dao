export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:3000/api/assets?policy=9cb921b32bfe214a739ed824f3f2da4e16c535a5448253d2951cc732`
  );
  //   const res2 = await fetch(
  //     `http://localhost:3000/api/assets?policy=e7514e65f977ee4b84a8e62e7d97ea2e5c11682dfe1444d8a14e74db`
  //   );
  //   const res3 = await fetch(
  //     `http://localhost:3000/api/assets?policy=9cb921b32bfe214a739ed824f3f2da4e16c535a5448253d2951cc732`
  //   );
  //   const data = await Promise.all([res, res2, res3]);
  const data = await res.json();
  console.log("test", data);

  //   return {
  //     props: {
  //       response: data[0],
  //       response1: data[1],
  //       response2: data[2],
  //     },
  //   };
  return { props: { data } };
}

const Library = ({ data }) => {
  return (
    <div className="flex w-full container mx-auto ">
      <div className="flex flex-wrap justify-evenly ">
        {data?.assets?.map((item, id) => (
          <div
            key={id}
            className=" w-full md:max-w-[330px] p-8 mt-8 border rounded-sm "
          >
            <div>
              {/* {console.log(item.asset)} */}
              <img
                src={`https://gateway.ipfs.io/${item.asset}`}
                // src={`https://testnet.cutymals.com/api/Ipfs/${item.asset}?X-API-KEY=ILoveCutyMals`}
                alt=""
                width={300}
                height={300}
              />

              <h1 className="flex-wrap break-words text-xs ">
                <span className="font-bold">AssetId: </span> {item.asset}
              </h1>
              <h1>
                {" "}
                <span className="font-bold text-xs">Quantity :</span>{" "}
                {item.quantity}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
