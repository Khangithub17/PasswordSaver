import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="myconatainer flex justify-between items-center px-4 py-5 h-10 mycontainer">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-700"> &lt;</span>
          Pass <span className="text-green-700"> Saver</span>
          <span className="text-green-700"> /&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a href="#" className="hover:font-bold">
              Home
            </a>
            <a href="#" className="hover:font-bold">
              About
            </a>
            <a href="#" className="hover:font-bold">
              Contact
            </a>
          </li>
        </ul>
       <a href="https://github.com/Khangithub17" target="_blank"> <button  className="text-white bg-green-500 my-5 rounded-md flex  justify-between items-center">
          <img className="invert w-10 p-1" src="/public/github.png" alt="github logo"  />
          <span className="font-bold px-4"> Github</span>
         
        </button></a>
        
      </div>
    </nav>
  );
};

export default Navbar;
