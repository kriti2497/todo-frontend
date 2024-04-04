import React from "react";

const TodoList = () => {
  const dummyArr = [
    {
      id: 1,
      title: "Title 1",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Title 2",
      status: "todo",
    },
    {
      id: 3,
      title: "Title 3",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Title 4",
      status: "completed",
    },
    {
      id: 5,
      title: "Title 5",
      status: "todo",
    },
    {
      id: 6,
      title: "Title 6",
      status: "todo",
    },
    {
      id: 7,
      title: "Title 7",
      status: "completed",
    },
  ];
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="text-xl text-todoVeryDarkGrayishBlue2">
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyArr.map((todo: any) => (
            <tr key={todo.id}>
              <td className="text-center">{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
