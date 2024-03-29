"use client";


import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const About = () => {
  return (
    <>
      <div className="px-5 md:mx-auto w-[100%] md:w-[80%] py-10 my-10 " id="about">
        <div className="flex items-center space-x-2 justify-center">
          <Image
            src="/badge-line.svg"
            alt="image"
            width={10000}
            height={10000}
            className="w-10 h-20"
          />
          <p className="font-extrabold text-xl text-blue-500 py-3 head">
            About Me
          </p>
        </div>

        <div className="md:flex justify-around items-center md:space-x-5 space-y-5 md:space-y-0 w-[100%]">
          <div className="relative w-[100%] md:w-[50%] cursor-pointer">
            <Tilt options={defaultOptions}>
              <Image
                src="/experince-shape2.png"
                alt="image"
                width={10000}
                height={100000}
                className="w-[100%] md:w-[80%] h-[100%] md:h-[80%]  circle2"
              />
              <div className="absolute top-1/2 md:-right-24 md:pr-20 left-1/2   transform -translate-x-1/2 -translate-y-1/2 w-[70%]">
                <Image
                  src="/vishu.jpeg"
                  alt="image"
                  width={10000}
                  height={100000}
                  className="w-[100%] h-[100%] border-2 p-5 rounded-full "
                />
              </div>
            </Tilt>
          </div>
          <div className="w-[100%] md:w-[50%] ">
            <p className="font-extrabold text-xl head">
              I am Vishu Sahu
            </p>
            <p className="para ">
              I am a dedicated Front-end & Backend web developer with a strong proficiency
              in HTML5, CSS, JavaScript, React.js, Redux Toolkit, Node.js , MongoDB , express.js. I am
              passionate about creating visually appealing and interactive user
              interfaces and excel in writing clean code and optimizing
              performance. My expertise lies in collaborating within team
              environments and leveraging frameworks like React.js to build
              dynamic web applications. My strong communication and
              teamwork skills, along with my proven ability to quickly learn new
              technologies and tools, make me a valuable asset to any
              development team. I hold certifications in Python Bootcamp (2019)
              and Node.js and MongoDB (2020) from Udemy.
            </p>


            <button className=" font-bold hover:bg-blue-400 bg-blue-500 text-white text-xs capitalize px-5 py-2 mt-10 rounded-sm para">
              <Link download="cv" href="cv.pdf">Download Cv </Link>
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
