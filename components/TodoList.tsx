"use client";

import React, { useEffect, useState } from "react";

import CardListing from "./CardListing";
import axios from "axios";

const TodoList = ({
  getData,
  todoArray,
  setTodoTitle,
  setTodoDescription,
  setTodoBtnTitle,
  setSelectedTodoId,
}: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const statusObj: any = {
    todo: "Todo",
    "in-progress": "In Progress",
    completed: "Completed",
  };
  useEffect(() => {
    getData();
  }, []);

  const printStatus = (status: string) => {
    // return (
    //   <div className="relative cursor-pointer lg:w-80 lg:m-0">
    //     <div
    //       className="p-4 flex items-center justify-between"
    //       onClick={() => setOpenDropdown(!openDropdown)}
    //     >
    //       <span>{statusObj[status]}</span>
    //       <i className="fas fa-angle-down"></i>
    //     </div>
    //     <div
    //       className={`absolute w-100 overflow-y-auto h-0 ${
    //         openDropdown ? "h-48" : ""
    //       }`}
    //     >
    //       {Object.values(statusObj).map((status: any) => (
    //         <div
    //           className="option"
    //           key={status}
    //           onClick={() => {
    //             // setSearch("");
    //             // setSearchRegion(region.region);
    //             setOpenDropdown(false);
    //           }}
    //         >
    //           {status}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
    return statusObj[status];
  };

  const populateData = (todoId: string) => {
    setSelectedTodoId(todoId);
    setTodoBtnTitle("Update");
    const dataToUpdate = todoArray.filter((each: any) => each._id === todoId);
    setTodoTitle(dataToUpdate[0].title);
    setTodoDescription(dataToUpdate[0].description);
  };

  const onDelete = async (todoId: string) => {
    const response = await axios.delete(`/api/delete-todo/${todoId}`);
    console.log(response);
    getData();
  };

  return (
    <div className="px-10 py-4">
      <table className="hidden lg:table w-full">
        <thead>
          <tr className="text-xl text-left text-todoVeryDarkGrayishBlue2">
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoArray.map((todo: any) => (
            <tr key={todo._id} className="leading-10 hover:bg-gray-400 mb-2">
              <td className="pl-4 pr-2">{todo.title}</td>
              <td className="px-2">{todo.description}</td>
              <td className="pl-2 pr-4">{printStatus(todo.status)}</td>
              <td className="pl-2 pr-4">
                <div className=" flex gap-4 items-center">
                  {/* TODO: FIND A SOLUTION FOR USING SVGs */}
                  <svg
                    onClick={() => populateData(todo._id)}
                    height="20px"
                    width="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                  <svg
                    onClick={() => onDelete(todo._id)}
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 11V17"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 11V17"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 7H20"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CardListing todoList={todoArray} />
    </div>
  );
};

export default TodoList;
