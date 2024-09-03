import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-xl md:text-3xl font-bold">😉Godd mornig, <span className="text-indigo-500">Maximo</span> </h1>
      <form action="" className="w-full md:w-auto">
        <div className="relative">
          <IoSearchSharp className="absolute top-1/2 -translate-y-1/2 left-2"/>
          <input
            type="text"
            className="bg-indigo-500/20 outline-none rounded-full w-full py-1 pl-8 pr-4 md:w-auto"
            placeholder="Search for projects"
          />
        </div>
      </form>
    </header>
  );
}
