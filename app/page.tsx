"use client";

import CreateTodo from "@/components/CreateTodo";
import Header from "@/components/Header";
import Image from "next/image";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <Header />
      <CreateTodo />
      <TodoList />
    </>
  );
}
