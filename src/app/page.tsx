import TodoApp from "@/ui/TodoApp";

export default function Home() {
  return (
    <main className="p-20 min-h-screen-xl mx-auto flex flex-col items-center py-5 px-2 md:p-5">
      <div className=" w-full max-w-screen-md bg-green-900 p-4 md:p-20 lg:p-10 flex flex-col rounded-md gap-10">
        <TodoApp/>
      </div>
    </main>
  );
}
