"use client";

import CreateTodo from "@/components/CreateTodo";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [todoBtnTitle, setTodoBtnTitle] = useState("Create");

  const createUpdateTodo = async (actionType: string, id?: string) => {
    console.log(actionType, id);
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
      if (actionType === "create") {
        console.log("create todo");
        const response = await axios.post("/api/create-todo", {
          title: todoTitle,
          description: todoDescription,
        });
      } else {
        console.log("update todo");
        const response = await axios.put(`/api/update-todo/${id}`, {
          ...(todoTitle && { title: todoTitle }),
          ...(todoDescription && { description: todoDescription }),
        });
        console.log(response);
      }
      getData();
      setTodoTitle("");
      setTodoDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  const clearTodo = () => {
    setTodoBtnTitle("Create");
    setTodoTitle("");
    setTodoDescription("");
  };

  const getData = async () => {
    const { data } = await axios.get("/api/get-todos");
    setTodoArray(data);
  };
  return (
    <>
      <Header />
      <CreateTodo
        todoBtnTitle={todoBtnTitle}
        createUpdateTodo={createUpdateTodo}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        setTodoDescription={setTodoDescription}
        todoDescription={todoDescription}
        setTitleErr={setTitleErr}
        titleErr={titleErr}
        descriptionErr={descriptionErr}
        setDescriptionErr={setDescriptionErr}
        clearTodo={clearTodo}
        selectedTodoId={selectedTodoId}
      />
      <TodoList
        getData={getData}
        todoArray={todoArray}
        setTodoTitle={setTodoTitle}
        setTodoDescription={setTodoDescription}
        setTodoBtnTitle={setTodoBtnTitle}
        setSelectedTodoId={setSelectedTodoId}
      />
    </>
  );
}
