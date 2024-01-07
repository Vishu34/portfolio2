"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};


import {motion} from 'framer-motion'
const Skills = () => {
  return (
    <>
      <Box className="px-5 md:mx-auto w-[100%] md:w-[80%] py-10  my-10" id="skill">
        <Box className="flex items-center space-x-2 justify-center">
          <Image
            src="/badge-line.svg"
            alt="image"
            width={10000}
            height={10000}
            className="w-10 h-20"
          />
          <Typography className="font-extrabold text-xl text-blue-500 py-3">
            Skills
          </Typography>
        </Box>
        <Box className="md:flex items-center md:space-x-5 space-y-5 ">
          <motion.Box 
          initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
          className="w-[100%] cursor-pointer">
            <Tilt options={defaultOptions}>
              <Image
                src="/about-right.png"
                alt="image"
                width={10000}
                height={100000}
                className="w-[100%] h-[100%]"
              />
            </Tilt>
          </motion.Box>
          <motion.Box 
          initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
          className="w-[100%]">
            <Typography className="font-extrabold text-xl">
              
              Profesional Skills
            </Typography>

            <Typography>
              Resourceful professional with successful track record in
              developing innovative web designs and features. Possesses solid
              knowledge of HTML, CSS, JavaScript,React and Bootstrap , tailwind css , Nodejs , Nextjs , MongoDB , express with
              ability to quickly learn new technologies.
            </Typography>
            <Box className=" relative grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 items-center mt-5 gap-8 md:gap-5 process">
              <Box className=" space-y-5 border-t-4 border-blue-500 drop-shadow-xl rounded-md p-3">
                <Box className=" relative w-20 ">
                  <Image
                    src="/proces4.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="w-[100%] h-[100%]"
                  />
                  <Image
                    src="/download.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             w-10 h-10 rounded-full"
                  />
                </Box>
                <Typography className="font-bold ">Node js</Typography>
                <Typography className="text-xs">ability to quickly learn new technology</Typography>
              </Box>

              <Box className=" space-y-3 border-t-4 border-blue-500 drop-shadow-xl rounded-md p-3">
                <Box className=" relative w-20 ">
                  <Image
                    src="/proces1.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="w-[100%] h-[100%]"
                  />
                  <Image
                    src="/download1.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             w-10 h-10 rounded-full"
                  />
                </Box>
                <Typography className="font-bold ">MongoDB</Typography>
                <Typography className="text-xs">ability to quickly learn new technology</Typography>
              </Box>

              <Box className=" space-y-3 border-t-4 border-blue-500 drop-shadow-xl rounded-md p-3">
                <Box className=" relative w-20 ">
                  <Image
                    src="/proces2.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="w-[100%] h-[100%]"
                  />
                  <Image
                    src="/download2.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             w-10 h-10 rounded-full"
                  />
                </Box>
                <Typography className="font-bold ">Next js</Typography>
                <Typography className="text-xs">ability to quickly learn new technology</Typography>
              </Box>

              <Box className=" space-y-3 border-t-4 border-blue-500 drop-shadow-xl rounded-md p-3 ">
                <Box className=" relative w-20 ">
                  <Image
                    src="/proces3.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="w-[100%] h-[100%]"
                  />
                  <Image
                    src="/download3.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             w-10 h-10 rounded-full"
                  />
                </Box>
                <Typography className="font-bold ">React js</Typography>
                <Typography className="text-xs">ability to quickly learn new technology</Typography>
              </Box>
            </Box>
          </motion.Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
