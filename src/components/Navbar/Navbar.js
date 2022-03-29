import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", Link: "/home" },
    { id: 2, name: "Shop", Link: "/shop" },
    { id: 3, name: "Deals", Link: "/deals" },
    { id: 4, name: "Cupons", Link: "/cupons" },
    { id: 5, name: "Contact", Link: "/contact" },
  ];
  return (
    <nav className="bg-indigo-200">
      <div onClick={() => setOpen(!open)} className=" w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex justify-center bg-indigo-200 w-full absolute md:static duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
