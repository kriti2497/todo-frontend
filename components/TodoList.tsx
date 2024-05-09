"use client";

import React, { useEffect, useState } from "react";

import CardListing from "./CardListing";

const TodoList = ({ getData, todoArray }: any) => {
  useEffect(() => {
    getData();
  }, [todoArray]);

  return (
    <div className="px-10 py-4">
      <table className="hidden lg:table w-full">
        <thead>
          <tr className="text-xl text-todoVeryDarkGrayishBlue2">
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todoArray.map((todo: any) => (
            <tr key={todo._id} className="leading-10 hover:bg-gray-400 mb-2">
              <td className="pl-4 pr-2">{todo.title}</td>
              <td className="px-2">{todo.description}</td>
              <td className="pl-2 pr-4">{todo.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <CardListing todoList={todoArray} />
    </div>
  );
};

export default TodoList;
