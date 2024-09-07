"use client"
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

const TodoFrom = () => {
      const dispatch = useDispatch()
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [number, setNumber] = useState("")

      const todoData = {name, email, number }
      // console.log("todoData", todoData)
      const handlaSubmit = (e: any) => {
            e.preventDefault()
            dispatch(addTodo(todoData))
      }

      return (
            <div className="bg-red-100 py-10">
                  <h1 className="text-4xl font-medium text-center"> Todo Application</h1>
                  <div className="flex justify-center h-[400px]">
                        <form onSubmit={handlaSubmit} className="items-start mt-10">
                              <div className="flex flex-col gap-5">
                                    <input
                                          placeholder="Your Name..."
                                          type="text"
                                          name="name"
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                          className="py-3 outline-none w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    <input
                                          type="email"
                                          name="email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          placeholder="Enter Your Email..."
                                          className="py-3 outline-none w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    <input
                                          placeholder="Phone Number..."
                                          value={number}
                                          name="number"
                                          onChange={(e) => setNumber(e.target.value)}
                                          type="text"
                                          className="py-3 outline-none w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    <button className="bg-green-300 py-3 rounded-full text-xl text-gray-800  mt-2" type="submit">Add Todo</button>
                              </div>
                              <Link href={"/"}><h1 className="bg-orange-400 text-center mt-6 py-1 mx-48 text-white">Go To Home</h1></Link>
                        </form>
                  </div>
            </div>

      );
};

export default TodoFrom;