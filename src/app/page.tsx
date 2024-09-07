import Link from "next/link";

export default function Home() {
  return (
    <main className="p-20 max-w-screen-xl mx-auto flex flex-col gap-5">
      <p>Noor Mohammad</p>
      <p>Changes from test</p>
      <p>Another Changes from test</p>
      <p>yeasin</p>
      <Link
        href={"https://todo-form-ten.vercel.app/"}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
      >
        Yeasin Ahmed Click Me
      </Link>

      <p>frontend developer</p>
      <h1 className="text-2xl font-bold font-titleFont">
        Lorem ipsum dolor sit amet.
      </h1>
      <h2 className="text-xl font-semibold font-bodyFont">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        assumenda labore et culpa, pariatur animi!
      </h2>
      <h3 className="text-lg font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit hic quam
        cumque ut. Iure minus itaque reiciendis earum praesentium officia iusto
        aspernatur voluptatibus quibusdam blanditiis?
      </h3>
      <p className="text-base font-normal">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nostrum
        earum minus perferendis ad repellendus ex minima fugit, est iste
        molestias, porro doloribus. Magni, deleniti ratione soluta autem nobis
        temporibus vel deserunt. Optio neque qui dolores consequatur nobis earum
        voluptatem recusandae, velit voluptates, iure, deleniti repellat
        blanditiis officia? Commodi, dignissimos!
      </p>
    </main>
  );
}
