import { useState } from "react";
import React  from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  RiContactsBookLine,
  RiDashboardHorizontalLine,
  RiFileWord2Line,
  RiHome3Line,
} from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={`bg-indigo-950 h-full  text-white fixed lg:static z-50 
      w-[70%] lg:w-[100%]     transition-all duration-300  ${showMenu ? "left-0" : "-left-full"} `}>
        {/*Profile*/}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src="../src/assets/img/Max.jpeg"
            alt="User"
            className="w-16 h-16 object-cover rounded-full ring-2 ring-white"
          />

          <h1 className="text-white text-1xl font-bold pt-2">Maximo Perea</h1>
          <p className="bg-indigo-500 px-3 mt-2 rounded-full py-1 text-white ">
            Pro Level
          </p>
        </div>

        <div className="bg-indigo-500 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8 ">
          {/*Navegar*/}
          <nav className="flex flex-col gap-5">

        <ul>
          <li>
            <Link
              to="/home"
              className=" flex items-center gap-4 text-white w-40 py-2 px-4 rounded-xl hover:bg-indigo-950 transition-colors hover:text-gray-400 "
              >
              <RiHome3Line /> Home
            </Link>
          </li>
        </ul>


            <a
              href="#"
              className=" flex items-center gap-4 text-white w-40 py-2 px-4 rounded-xl hover:bg-indigo-950 transition-colors hover:text-gray-400 "
            >
              <RiDashboardHorizontalLine /> Dashboard
            </a>
            <a
              href="#"
              className=" flex items-center gap-4 text-white w-40 py-2 px-4 rounded-xl hover:bg-indigo-950 transition-colors hover:text-gray-400 "
            >
              <RiFileWord2Line /> Works
            </a>
            <a
              href="#"
              className=" flex items-center gap-4 text-white w-40 py-2 px-4 rounded-xl hover:bg-indigo-950 transition-colors hover:text-gray-400 "
            >
              <RiContactsBookLine /> Components
            </a>
            <a
              href="#"
              className=" flex items-center gap-4 text-white w-40 py-2 px-4 rounded-xl hover:bg-indigo-950 transition-colors hover:text-gray-400 "
            >
              <TbReportSearch /> Reports
            </a>
          </nav>
          <div className="bg-indigo-950 text-white rounded-xl p-3">
            <p className="hover:text-gray-400">Having Troubles?</p>
            <p className="hover:text-gray-400">Contact us</p>
          </div>
        </div>
      </div>
      {/*Button Mobile */}
      <button onClick={() => setShowMenu(!showMenu) } className=" lg:hidden fixed right-2 bottom-4 text-2xl text-white p-2 bg-indigo-950 rounded-full z-50">
        
        {showMenu ? <IoClose />: <IoMenu />}
      </button>
    </>
  );
}
