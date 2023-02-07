import React from "react";
import Card from "./Card";

const CardListItem = ({ assets }) => {
  return (
    <>
      {assets?.map((item) => (
        <div className="flex lg:flex-wrap justify-center">
          <Card item={item} />
        </div>
      ))}
    </>
  );
};

export default CardListItem;
