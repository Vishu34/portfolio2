"use client";

import { GitHub } from "@mui/icons-material";
import { Box, List, ListItem, Typography } from "@mui/material";
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


import {motion} from "framer-motion"
const Work = () => {
  return (
    <>
      <Box className="px-5 md:mx-auto w-[100%] md:w-[80%] py-10 my-10" id="work">
        <Box className="flex items-center space-x-2 justify-center">
          <Image
             
            src="/badge-line.svg"
            alt="image"
            width={10000}
            height={10000}
            className="w-10 h-20"
          />
          <Typography className="font-extrabold text-xl text-blue-500 py-3">
            Works
          </Typography>
        </Box>

        <Box className="space-y-14">
          <Box className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.Box 
             initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className=" w-[100%] md:w-[50%] space-y-2">
              <div className="space-y-2">
                <Typography className="font-extrabold text-xl">
                  Blog Clone-website 
                </Typography>

               
               
               <Box className="p-2">
               <Typography>✅	Developed a blog website using Next.js, Node.js, and MongoDB, focusing on full CRUD operations. </Typography>
 <Typography>✅	Integrated React-Dropzone for file uploads and React-Share-Social for social media sharing. </Typography>
 <Typography>✅	Utilized Nodemailer for email functionality, JWT authentication, and Bcrypt.js for password hashing. </Typography>
<Typography>✅	Implemented real-time comments using Socket.io, allowing any user to comment in real time. </Typography>
 <Typography>✅	Integrated a notification system to notify users about new comments and interactions.
</Typography>
               </Box>
              
              </div>
              <Typography className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </Typography>
            </motion.Box>
            <motion.Box
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
             className="w-[100%] md:w-[50%]  cursor-pointer">
              <Tilt options={defaultOptions}>
                
                <Link href="https://github.com/Vishu34/blogwebsite">
                <Image
                   alt="image"
                  src="/blog.png"
                  width={10000}
                  height={100000}
                  className="w-[100%] h-[100%] rounded-xl border-2 border-blue-500"
                /></Link>
              </Tilt>
            </motion.Box>
          </Box>

          <Box className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.Box 
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="w-[100%] md:w-[50%]  cursor-pointer">
              <Tilt options={defaultOptions}>
              <Link href="https://ecommerce-vishu34.vercel.app/"> <Image
                   alt="image"
                  src="/eccom.png"
                  width={10000}
                  height={100000}
                  className="w-[100%] h-[100%] rounded-xl border-2 border-blue-500"
                />
                </Link>
              </Tilt>
            </motion.Box>
            <motion.Box 
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className=" w-[100%] md:w-[50%] space-y-2">
              <Box className="space-y-2">
                <Typography className="font-extrabold text-xl">
                  E-commerce shopping clone
                </Typography>

                
                <Box>
                <Typography>✅	Developed an e-commerce website using MERN stack .


</Typography>
<Typography>✅	Integrated Multer for file uploads and utilized Nodemailer for email functionality. </Typography>
<Typography>✅	Implemented JWT authentication and Bcrypt.js for password hashing.</Typography>
                </Box>
              </Box>
              <Typography className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </Typography>
            </motion.Box>
          </Box>
          <Box className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.Box 
             initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="w-[100%] md:w-[50%] space-y-2">
              <Box className="space-y-2">
                <Typography className="font-extrabold text-xl">
                  Meesho clone
                </Typography>

               
               <Box className="p-2">
               <Typography>✅	Developed a Meesho landing page using React.js and Tailwind CSS. 

</Typography>
<Typography> ✅	Integrated login and signup validation.</Typography>
               </Box>
              </Box>
              <Typography className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </Typography>
            </motion.Box>
            <motion.Box 
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="w-[100%] md:w-[50%]  cursor-pointer">
              <Tilt options={defaultOptions}>
              <Link href="https://meeshosupplier.vercel.app/">
                <Image
                   alt="image"
                  src="/meesho.png"
                  width={10000}
                  height={100000}
                  className="w-[100%] h-[100%] rounded-xl border-2 border-blue-500"
                />
                </Link>
              </Tilt>
            </motion.Box>
          </Box>
          <Box className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.Box 
             initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="w-[100%] md:w-[50%]  cursor-pointer">
              <Tilt options={defaultOptions}>
              <Link href="https://nextproject1-gold.vercel.app/">
                <Image
                   alt="image"
                  src="/astrology.png"
                  width={10000}
                  height={100000}
                  className="w-[100%] h-[100%] rounded-xl border-2 border-blue-500"
                />
                </Link>
              </Tilt>
            </motion.Box>
            <motion.Box 
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="w-[100%] md:w-[50%] space-y-2">
              <Box className="space-y-2">
                <Typography className="font-extrabold text-xl">
                  Astrology landing page
                </Typography>

                
                <Box>
                <Typography>✅ Technology Stack: I utilized Next.js for building the astrology landing page, which allowed for server-side rendering and seamless page transitions. Framer Motion was employed to add smooth animations and transitions, enhancing the overall user experience.</Typography>
<Typography>✅ Design: Tailwind CSS was used to style the landing page, providing a clean and modern aesthetic. The utility-first approach of Tailwind CSS enabled rapid prototyping and easy customization, resulting in a visually appealing and responsive design.</Typography>

<Typography> ✅ Features: The landing page includes interactive elements and engaging animations powered by Framer Motion, creating an immersive experience for visitors. The use of Next.js facilitated efficient routing and ensured fast loading times, contributing to a seamless browsing experience.</Typography>
                </Box>
              </Box>
              <Typography className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </Typography>
            </motion.Box>
          </Box>
          <Box className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.Box 
             initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className=" w-[100%] md:w-[50%] space-y-2">
              <Box className="space-y-2">
                <Typography className="font-extrabold text-xl">
                  jupiter landing page
                </Typography>

                <Box>
                <Typography>
              ✅  Technology Stack: Developed the Jupiter landing page using React.js for efficient component-based UI development. Leveraged Tailwind CSS for rapid styling and responsive design, enabling quick iteration and customization.


                </Typography>
                <Typography>✅ Responsive Design: Employed Tailwind CSS to ensure a mobile-first approach, enabling seamless responsiveness across various devices and screen sizes. Tailwind&apos;s utility classes facilitated the creation of a visually appealing and adaptable layout.</Typography>
                <Typography>✅ Animations: Integrated Framer Motion to incorporate engaging animations and transitions, enhancing the visual appeal and interactivity of the landing page. Utilized Framer Motion&apos;s capabilities to create smooth and dynamic motion effects for a captivating user experience.</Typography>
                </Box>
              </Box>
              <Typography className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </Typography>
            </motion.Box>
            <motion.Box 
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="w-[100%] md:w-[50%]  cursor-pointer">
              <Tilt options={defaultOptions}>
              <Link href="https://jupiterweb.vercel.app/">
                <Image
                   alt="image"
                  src="/jupiter.png"
                  width={10000}
                  height={100000}
                  className="w-[100%] h-[100%] rounded-xl border-2 border-blue-500"
                />
                </Link>
              </Tilt>
            </motion.Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Work;
