"use client";

import { GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";


import Link from "next/link";


const Footer = () => {
  return (
    <>
      <div className=" bg-sky-900 text-white   py-10 ">
      <div className="px-5 md:mx-auto w-[100%] md:w-[80%]  space-y-2">
    <p className="font-bold text-xl text-center head"> Vishu sahu</p>
    <div className="flex items-center  justify-center gap-5">
    <Link href="#"> <Instagram sx={{
        fontSize:"medium"
     }}/>  </Link>
     <Link href="https://wa.me/9644111432"> <WhatsApp sx={{
        fontSize:"medium"
     }}/>  </Link>
     <Link href="https://www.linkedin.com/in/vishu-sahu-307850265/"> <LinkedIn sx={{
        fontSize:"medium"
     }}/>  </Link>
     <Link href="https://github.com/Vishu34/"> <GitHub sx={{
        fontSize:"medium"
     }}/>  </Link>
    </div>
   
    <p className=" text-md text-center para"> © vishu sahu. All rigths reserved</p>
</div>
      </div>
    </>
  );
};

export default Footer;
