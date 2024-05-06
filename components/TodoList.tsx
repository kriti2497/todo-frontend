"use client";

import React, { useEffect, useState } from "react";

import CardListing from "./CardListing";
import axios from "axios";

const TodoList = () => {
  const [todoArray, setTodoArray] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("/api/get-todos");
    setTodoArray(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-10 py-4">
      <table className="hidden lg:table w-full">
        <thead>
          <tr className="text-xl text-todoVeryDarkGrayishBlue2">
            {/* <th>#</th> */}
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todoArray.map((todo: any) => (
            <tr key={todo._id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <CardListing todoList={todoArray} />
    </div>
  );
};

export default TodoList;
