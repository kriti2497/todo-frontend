"use client";

import CreateTodo from "@/components/CreateTodo";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <CreateTodo />
    </>
  );
}
