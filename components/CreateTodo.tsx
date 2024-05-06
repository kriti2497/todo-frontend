"use client";

import React, { useState } from "react";

import axios from "axios";

const CreateTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);

  const createTodo = async () => {
    if (
      (todoTitle === "" || todoTitle.trim() === "") &&
      (todoDescription === "" || todoDescription.trim() === "")
    ) {
      setTitleErr(true);
      setDescriptionErr(true);
      return;
    }

    if (todoTitle === "" || todoTitle.trim() === "") {
      setTitleErr(true);
      return;
    }

    if (todoDescription === "" || todoDescription.trim() === "") {
      setDescriptionErr(true);
      return;
    }

    try {
      const response = await axios.post("/api/create-todo", {
        title: todoTitle,
        description: todoDescription,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log("create todo");
    await axios.post("/api/get-todos");
  };

  return (
    <div className="px-10 py-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col md:flex-row gap-4 w-full items-start">
          <div className="w-full">
            <input
              className="border-todoVeryDarkBlue rounded-md px-5 py-2 font-medium text-base border-[1px] w-full"
              placeholder="Enter a todo title..."
              type="text"
              name="title"
              value={todoTitle}
              onChange={(e) => {
                setTitleErr(false);
                setTodoTitle(e.target.value);
              }}
            />
            {titleErr && (
              <p className="text-red-600 text-xs mt-1 font-semibold">
                Title is a required field
              </p>
            )}
          </div>
          <div className="w-full">
            <input
              className="border-todoVeryDarkBlue rounded-md px-5 py-2 font-medium text-base border-[1px] w-full"
              placeholder="Enter a todo description..."
              type="text"
              name="description"
              value={todoDescription}
              onChange={(e) => {
                setDescriptionErr(false);
                setTodoDescription(e.target.value);
              }}
            />
            {descriptionErr && (
              <p className="text-red-600 text-xs mt-1 font-semibold">
                Description is a required field
              </p>
            )}
          </div>
          <button
            onClick={createTodo}
            className="bg-todoVeryDesaturatedBlue text-white px-4 py-2 rounded-md w-full md:w-auto"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
