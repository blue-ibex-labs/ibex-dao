import React from "react";
import Card from "./Card";

const CardListItem = ({ assets, fakeData }) => {
  // console.log(assets);
  return (
    <>
      {fakeData?.map((item, index) => {
        return (
          <div className=" flex lg:flex-wrap justify-center" key={index}>
            <Card item={item} />
          </div>
        );
      })}
    </>
  );
};

export default CardListItem;
