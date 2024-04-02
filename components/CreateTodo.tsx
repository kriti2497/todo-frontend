import React, { useState } from "react";

const CreateTodo = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="px-10 py-3">
      <div className="p-2 flex justify-between items-center">
        <input
          className="border-todoVeryDarkBlue rounded-md px-5 py-2 font-medium text-base border-[1px] w-3/4"
          placeholder="Create a todo..."
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="bg-todoVeryDesaturatedBlue text-white px-4 py-2 rounded-md">
          + Create
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
