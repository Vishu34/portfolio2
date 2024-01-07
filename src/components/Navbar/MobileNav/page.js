"use client";
import { Close, MoreVert } from "@mui/icons-material";
import { Button, p } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

const Mobilenavbar = () => {
  const [topnav, settopnav] = useState();
 
 

  const [nav, setnav] = useState();
  const navbar = () => {
    if (window.scrollY > 200) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbar);
  }, []);
 
 
 
  return (
    <>
      

      
      
      
     
      <section className="py-2 mobile cursor-pointer " >
        <div
          className={`w-[100%]   ${
            nav
              ? "fixed top-0 px-5 py-2   w-[100%]  z-50 bg-gray-100 drop-shadow-lg  duration-75 transition-transform translate-y-0 ease-in"
              : "static px-5 py-2  bg-gray-100 drop-shadow-lg"
          } `} style={{zIndex:"99999"}}
        >
          <div className="  flex justify-between items-center ">
          <p className="font-extrabold text-xl head"> Vishu Sahu</p>

            <ul>
              <li
                className=" p-2 rounded-sm"
                onClick={() => settopnav(true)}
              >
               
                  <MoreVert className="hover:text-blue-500 " />
               
              </li>
            </ul>
          </div>
        </div>

        {  topnav?  (
          <div className=" flex justify-between items-center transition-all ">
            <ul
              className="flex-col items-center fixed top-0 left-0 mobilelist  h-[100%] bg-gray-100 w-[100%] p-5 para font-bold" style={{zIndex:"99999"}}
            >
            <li  onClick={() => settopnav(false)} className="text-right"> 
            <Close className="hover:text-blue-500 " />
            </li>
              <li className="  
                "
                onClick={() => settopnav(false)}>
                <div
                  className=" navlist flex justify-between items-center  p-3  rounded-sm"
                  
                >
                <Link className="hover:text-blue-500" href="#home">Home</Link>
                  </div>
              </li>
              <li className="navlist p-3  rounded-sm"
              onClick={() => settopnav(false)}>
                <Link className="hover:text-blue-500" href="#about">About</Link>
              </li>
              <li className="navlist p-3  rounded-sm"
              onClick={() => settopnav(false)}>
                <Link className="hover:text-blue-500" href="#skill">Skills</Link>
              </li>
              <li className=" "
              onClick={() => settopnav(false)}>
                <div
                  className=" navlist flex justify-between items-center p-3  rounded-sm"
                 
                >
                 <Link className="hover:text-blue-500" href="#work">Works</Link>
                 
                </div>

                
              </li>
              <li className="navlist p-3  rounded-sm" 
              onClick={() => settopnav(false)}>
                <Link className="hover:text-blue-500" href="#contact">Contact</Link>
              </li>
              
              
              <li className="navlist p-3  rounded-sm">
              <button className=" font-bold hover:bg-blue-400 bg-blue-500 text-white text-xs capitalize px-5 py-2  rounded-sm para">
              Download Cv
            </button>
              </li>
            </ul>
          </div>
        
     ) : null }
         
          </section>  
  

     
    </>
  );
};

export default Mobilenavbar;
