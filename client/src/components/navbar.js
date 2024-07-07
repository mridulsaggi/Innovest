import React from "react";
import { Link } from "react-router-dom";
import {gsap} from "gsap"
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  
  useGSAP(()=>{
    gsap.from(".navbar , .iskeandar li , .loginkaro",{
      y:-100,
      opacity:0,
      stagger:0.2,
      duration: 1,
      delay:1
  })

    
})
  return (
    <div className="navbar bg-base-100 fixed top-0 w-full z-50 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={"/marketplace"}>MarketPlace</Link>
            </li>
            <li>
              <Link to={"/sharktank"}>SharkTank</Link>
            </li>
            <li>
              <Link to={"/evaluate"}>Evaluate Idea</Link>
            </li>
            <li>
              <Link to={"/bizzgpt"}>BizzGPT</Link>
            </li>
            <li>
              <Link to={"/showcase"}>Idea Showcase</Link>
            </li>
            <li>
              <Link to={"/news"}>News</Link>
            </li>
          </ul>
        </div>
        <Link to={"/home"} className="btn btn-ghost text-xl">
          InnoVest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 iskeandar">
          <li>
            <Link to={"/marketplace"} className="m-1">MarketPlace</Link>
          </li>
          <li>
            <Link to={"/sharktank"} className="m-1">SharkTank</Link>
          </li>
          <li>
            <Link to={"/evaluate"} className="m-1">Evaluate Idea</Link>
          </li>
          <li>
            <Link to={"/bizzgpt"} className="m-1">BizzGPT</Link>
          </li>
          {/* <li>
            <Link to={"/showcase"} className="m-1">Idea Showcase</Link>
          </li> */}
          <li>
            <Link to={"/news"} className="m-1">News</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end loginkro">
        <Link className="btn" to="/login">
          LOGIN/SIGNUP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
