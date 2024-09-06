"use client";
import { addTodo } from "@/redux/todoSlice";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

export default function TodoForm() {
  const dispatch = useDispatch()
  const [todo, settodo] = useState("");
  const handletodo = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (todo === "") {
    } else {
      dispatch(addTodo({_id:Math.random().toString(), todo:todo}))
      settodo("");
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto border-2 border-black py-5 px-5 mt-5 rounded-md ">
      <h1 className="text-center text-3xl font-semibold">Todo Application</h1>
      <form onClick={handletodo} className="flex gap-4">
        <div className="flex-1 relative">
          <input
            onChange={(e) => settodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Write your todo here"
            className="border border-gray-600 pl-3 pr-6 w-full h-10 rounded-md "
          />
          {todo && (
            <RxCross1
              onClick={(e) => settodo("")}
              className="absolute right-2 top-3"
            />
          )}
        </div>
        <button
          type="submit"
          className="border-1 bg-gray-500 px-5 rounded-md text-white capitalize"
        >
          add todo{" "}
        </button>
      </form>
      <TodoList/>
    </div>
  );
}
