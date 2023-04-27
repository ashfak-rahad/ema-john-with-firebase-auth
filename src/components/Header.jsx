import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLoading,
} from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-primary text-white z-50 sticky top-0">
      <section className="headerContainer">
        <Link to="/">
          <img src="{logo}" alt="" />
        </Link>
        {!toggle ? (
          <AiOutlineMenu
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineClose
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-2xl md:hidden block"
          />
        )}

        <h2 className="hidden md:block">
          {AiOutlineLoading ? (
            ""
          ) : user === null ? (
            <div>
              <NavLink onClick={() => setToggle(!toggle)} to="/login">
                Login
              </NavLink>{" "}
              <span> / </span>
              <NavLink onClick={() => setToggle(!toggle)} to="/sign-up">
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span>{user.email}</span>
              <AiOutlineLogin
                onClick={logOut}
                className="text-xl cursor-pointer"
              />
            </div>
          )}
        </h2>
      </section>
      <div>
        <div className="navbar bg-base-100 text-white z-50 sticky top-0">
          <div className="flex-1">
            
          </div>
          <div className="flex-none">
            {/* <ul className="menu menu-horizontal px-1"> */}
            <ul className="hidden md:flex gap-5">
              <NavLink onClick={() => setToggle(!toggle)} to="/">
                Home
              </NavLink>
              <NavLink onClick={() => setToggle(!toggle)} to="/shop">
                Shop
              </NavLink>
              <NavLink onClick={() => setToggle(!toggle)} to="/review">
                OrderReview
              </NavLink>
              <NavLink onClick={() => setToggle(!toggle)} to="/inventory">
                Manage Inventory
              </NavLink>
              <NavLink onClick={() => setToggle(!toggle)} to="/sign">
                Sign in
              </NavLink>

              <NavLink onClick={() => setToggle(!toggle)} to="/login">
                Login
              </NavLink>
              
            </ul>
            <ul
              className={`flex flex-col duration-300 md:hidden gap-5 fixed top-[68px] z-50 ${
                !toggle ? "left-[-100%]" : "left-0"
              } bg-black w-full h-screen`}
            >
                
              <NavLink onClick={() => setToggle(!toggle)} to="/">
                Home
              </NavLink>
              <NavLink onClick={() => setToggle(!toggle)} to="/shop">
                Shop
              </NavLink>
              <NavLink onClick={() => setToggle(!toggle)} to="/review">
                OrderReview
              </NavLink>
              <NavLink onClick={() => setToggle(!toggle)} to="/inventory">
                Manage Inventory
              </NavLink>
              <NavLink onClick={() => setToggle(!toggle)} to="/sign">
                Sign in
              </NavLink>

              <NavLink onClick={() => setToggle(!toggle)} to="/login">
                Login
              </NavLink>
             
              
              
            </ul>
            <h2 className="hidden md:block">
          {AiOutlineLoading ? (
            ""
          ) : user === null ? (
            <div>
              <NavLink onClick={() => setToggle(!toggle)} to="/login">
                Login
              </NavLink>{" "}
              <span> / </span>
              <NavLink onClick={() => setToggle(!toggle)} to="/sign-up">
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span>{user.email}</span>
              <AiOutlineLogin
                onClick={logOut}
                className="text-xl cursor-pointer"
              />
            </div>
          )}
        </h2>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
