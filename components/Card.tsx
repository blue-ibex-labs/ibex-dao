// import React from "react";

// const Card = ({ item }) => {
//   return (
//     <div className="flex w-full container mx-auto ">
//       <div className="flex flex-wrap justify-evenly ">
//         <div
//           // key={id}
//           className=" w-full md:max-w-[340px] lg:max-w-[440] p-8 mt-8 border rounded-sm "
//         >
//           {/* {console.log(item.asset)} */}
//           <div className="w-full md:max-w-[430px] p-4 m-auto">
//             <img
//               src={`https://gateway.ipfs.io/ipfs/QmUZr2zEMpUxWxzJbWbRHpb6vnn2rPghigte4wqJ7YD7dJ`}
//               style={{ maxWidth: "200px" }}
//             />
//           </div>
//           <h1 className="flex-wrap break-words text-xs ">
//             <span className="font-bold">Asset Name: </span> {item.asset_name}
//           </h1>
//           <h1>
//             {" "}
//             <span className="font-bold text-xs">Quantity :</span>{" "}
//             {item.quantity}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";
import { useSpring, animated } from "react-spring";

const Card = ({ item }) => {
  const [hover, setHover] = React.useState(false);

  const cardProps = useSpring({
    boxShadow: hover
      ? "0px 15px 30px -10px rgba(0,0,0,0.5)"
      : "0px 10px 20px -10px rgba(0,0,0,0.75)",
    transform: hover ? "translateY(-5px)" : "translateY(0px)",
  });

  const imgProps = useSpring({
    transform: hover ? "scale(1.05)" : "scale(1)",
  });

  return (
    <animated.div
      style={cardProps}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex w-full container mx-auto mt-8 rounded-lg bg-violet-100"
    >
      <animated.div
        // key={id}
        className="w-full md:max-w-[340px] lg:max-w-[440] p-8   shadow-md "
        style={{
          transition: "all 0.3s ease ",
          translate: "100px 20px ",
        }}
      >
        {/* {console.log(item.asset)} */}
        <div className="w-full md:max-w-[430px] p-4 m-auto">
          <animated.img
            src={`https://gateway.ipfs.io/ipfs/QmUZr2zEMpUxWxzJbWbRHpb6vnn2rPghigte4wqJ7YD7dJ`}
            style={{ maxWidth: "250px" }}
            className="rounded-lg shadow-md"
            alt=""
            {...imgProps}
          />
        </div>
        <h1 className="flex-wrap break-words text-sm font-bold mb-2">
          Asset Name: {item.asset_name}
        </h1>
        <h1 className="text-sm">Quantity: {item.quantity}</h1>
      </animated.div>
    </animated.div>
  );
};

export default Card;
