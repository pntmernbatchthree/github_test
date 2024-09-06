import { Metadata } from "next";
import TodoForm from "./ui/TodoForm";
export const metadata: Metadata = {
  title: "Home ! todo app",
  description: "Generated by redux toolkit",
};
export default function Homepage() {
  return (
   <div>
      <TodoForm/>
   </div>
  );
}
