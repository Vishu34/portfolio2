"use client";

import { GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";

import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

const Home1 = () => {
  return (
    <>
      <div className="px-5 md:mx-auto w-[100%] md:w-[80%] py-10 " id="home">
        <div className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0">
          <div className=" w-[100%] md:w-[50%] ">
            <div className="space-y-3">
              <p className="text-5xl font-extrabold head">Hi,</p>
              <p className=" text-3xl sm:text-5xl font-extrabold head">
                I am
                <span className="text-blue-500 head"> Vishu Sahu</span>
              </p>
              <p className=" text-3xl sm:text-5xl  head">
              <Typewriter
            words={['React.Js Developer', 'Next.Js Developer', 'Mern Stack Developer']}
            loop="infinity"
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
              </p>
            </div>
           
           <div className="mt-10 space-y-3">
           <button className=" font-bold hover:bg-blue-400 bg-blue-500 text-white text-xs capitalize px-8 py-2 mt-10 rounded-sm para">
             Contact
            </button>

            <div className="flex items-center space-x-3">
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
           </div>
          </div>
        
          <div className="w-[100%] md:w-[50%] relative cursor-pointer"> 
          <Tilt options={defaultOptions}>
         
          <div className="mx-auto w-[100%] md:w-[80%] h-[100%] md:h-[80%]">
      <Image src="/about-shape1.png" alt="image" width={100000} height={100000} className=" mx-auto circle2"/>
    </div>
           
           <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-72 h-72">
           <Image
              src="/blog-1.jpg"
              alt="image"
              width={10000}
              height={100000}
              className="w-[100%] h-[100%] border-2 p-5 rounded-full mx-auto"
            />
           </div>
           </Tilt>
          </div>
         
        </div>
       
      </div>
    </>
  );
};

export default Home1;
