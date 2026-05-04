import React, { useState } from "react";
import { LOGO } from "../Utility/constant";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";
import { useSelector } from "react-redux";

function Header() {
  const [login, setLogin] = useState("LOGIN");
  const status = useOnline();
  const itemLength = useSelector((data) => data.cart.items)
  console.log("itemssss", itemLength);

  function OnPress() {
    setLogin(login === "LOGIN" ? "LOGOUT" : "LOGIN");
  }

  return (
    <header className="flex bg-white/90 fixed w-full z-1000 justify-between items-center px-10 py-3 bg-card text-text border-b border-border shadow-sm">

      {/* Logo */}
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          src={LOGO}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Menu */}
      <nav>
        <ul className="flex gap-8 font-semibold items-center">

          <li className="hover:text-primary transition">
            <Link to="/">STATUS: {status ? "🟢" : "🔴"}</Link>
          </li>

          <li className="hover:text-primary transition">
            <Link to="/">HOME</Link>
          </li>

          <li className="hover:text-primary transition">
            <Link to="/grocery">GROCERY</Link>
          </li>

          <li className="hover:text-primary transition">
            <Link to="/about">ABOUT</Link>
          </li>

          <li className="hover:text-primary transition">
            <Link to="/contact">CONTACT</Link>
          </li>

          <li className="hover:text-primary transition">
            <Link
              to="/cart"
              className="relative flex items-center gap-1"
            >
              <span>CART</span>
              <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full top-0">
                {itemLength.length}
              </span>
            </Link>          </li>

          <li>
            <button
              onClick={OnPress}
              className="px-3 py-1 border border-border rounded-md hover:bg-primary hover:text-black transition"
            >
              {login}
            </button>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;