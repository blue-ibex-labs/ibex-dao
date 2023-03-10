import React from "react";
import Card from "./Card";

const CardListItem = ({ fakeData }) => {
  return (
    <>
      {fakeData.nft1?.map((item, index) => {
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
