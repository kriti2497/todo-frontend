import Card from "./Card";
import React from "react";

const CardListing = ({ todoList }: any) => {
  return (
    <div className="lg:hidden grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {todoList.map((todo: any) => (
        <Card todo={todo} />
      ))}
    </div>
  );
};

export default CardListing;
