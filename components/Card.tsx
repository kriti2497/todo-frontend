import React from "react";

const Card = ({ todo }: any) => {
  return (
    <div className="px-4 py-3 border rounded bg-gray-200 border-black">
      <p>Title: {todo.title}</p>
      <p>Status: {todo.status}</p>
    </div>
  );
};

export default Card;
