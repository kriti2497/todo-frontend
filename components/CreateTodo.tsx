"use client";

import React from "react";

interface CreateTodoProps {
  todoTitle: string;
  setTodoTitle: (arg: string) => void;
  titleErr: boolean;
  setTitleErr: (arg: boolean) => void;
  todoDescription: string;
  setTodoDescription: (arg: string) => void;
  descriptionErr: boolean;
  setDescriptionErr: (arg: boolean) => void;
  createTodo: () => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({
  todoTitle,
  setTodoTitle,
  titleErr,
  setTitleErr,
  todoDescription,
  setTodoDescription,
  descriptionErr,
  setDescriptionErr,
  createTodo,
}) => {
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
