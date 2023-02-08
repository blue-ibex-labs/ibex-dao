import React from "react";
import Card from "./Card";

const CardListItem = ({ assets }) => {
  return (
    <>
      {assets?.map((item, index) => (
        <div className="flex lg:flex-wrap justify-center" key={index}>
          <Card item={item} />
        </div>
      ))}
    </>
  );
};

export default CardListItem;
