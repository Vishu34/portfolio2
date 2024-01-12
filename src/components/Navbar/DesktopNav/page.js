"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Desktopnavbar = () => {
  const apiCallFunction = async () => {
    const response = await fetch("/home");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    apiCallFunction();
  });

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


  const [active ,setactive]=useState("Home")
  const handleclick=(event)=>{
    setactive(event)
  }

  return (
    <>  
      <section className=" desktop cursor-pointer text-black ">
        <div
          className={`   py-2 ${
            nav
              ? "fixed top-0 w-[100%] px-36 z-50 bg-gray-100 drop-shadow-lg   duration-75 transition-transform translate-y-0 ease-in"
              : "px-36 bg-gray-100 drop-shadow-lg static w-[100%] "
          } `}
          style={{ zIndex: "99999" }}
        >
          <div className="flex justify-between items-center">
          <p className="font-extrabold text-xl head"> Vishu Sahu</p>

            <ul className="flex items-center space-x-6 para font-bold">
              <li className="navlist p-3 rounded-sm homelist">
              <Link href="#" className={`hover:text-blue-500 ${active ==="Home" ? "text-blue-500 border-b-2 border-blue-500" : "text-black"}`} onClick={()=>handleclick("Home")}>Home</Link>
               
              </li>
              <li className="navlist p-3 rounded-sm">
              <Link href="#about" className={`hover:text-blue-500 ${active ==="About" ? "text-blue-500 border-b-2 border-blue-500" : "text-black"}`} onClick={()=>handleclick("About")}>About</Link>
              </li>
              <li className="navlist p-3 rounded-sm">
              <Link href="#skill" className={`hover:text-blue-500 ${active ==="Skills" ? "text-blue-500 border-b-2 border-blue-500" : "text-black"}`} onClick={()=>handleclick("Skills")}>Skills</Link>
              </li>
              <li className="navlist p-3 rounded-sm bloglist">
                <Link href="#work" className={`hover:text-blue-500 ${active ==="Worrks" ? "text-blue-500 border-b-2 border-blue-500" : "text-black"}`} onClick={()=>handleclick("Works")}>Works</Link>
                
              </li>
             
              
              <li className="navlist p-3 rounded-sm">
               <Link href="#contact" className={`hover:text-blue-500 ${active ==="Contact" ? "text-blue-500 border-b-2 border-blue-500" : "text-black"}`} onClick={()=>handleclick("Contact")}>Contact</Link>
              </li>
              <li className="navlist p-3 rounded-sm">
              <button className=" font-bold hover:bg-blue-400 bg-blue-500 text-white text-xs capitalize px-5 py-2  rounded-sm para">
              <Link download="cv" href="cv.pdf">Download Cv </Link>
              
            </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Desktopnavbar;
