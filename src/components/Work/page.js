"use client";

import { GitHub } from "@mui/icons-material";

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
      <div className="px-5 md:mx-auto w-[100%] md:w-[80%] py-10 my-10" id="work">
        <div className="flex items-center space-x-2 justify-center">
          <Image
             
            src="/badge-line.svg"
            alt="image"
            width={10000}
            height={10000}
            className="w-10 h-20"
          />
          <p className="font-extrabold text-xl text-blue-500 py-3 head">
            Works
          </p>
        </div>

        <div className="space-y-14">
          <div className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.div 
             initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className=" w-[100%] md:w-[50%] space-y-2">
              <div className="space-y-2">
                <p className="font-extrabold text-xl head">
                  Blog Clone-website 
                </p>

               
               
               <div className="p-2 para">
               <p>✅	Developed a blog website using Next.js, Node.js, and MongoDB, focusing on full CRUD operations. </p>
 <p>✅	Integrated React-Dropzone for file uploads and React-Share-Social for social media sharing. </p>
 <p>✅	Utilized Nodemailer for email functionality, JWT authentication, and Bcrypt.js for password hashing. </p>
<p>✅	Implemented real-time comments using Socket.io, allowing any user to comment in real time. </p>
 <p>✅	Integrated a notification system to notify users about new comments and interactions.
</p>
               </div>
              
              </div>
              <p className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs para">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </p>
            </motion.div>
            <motion.div
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
            </motion.div>
          </div>

          <div className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.div 
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
            </motion.div>
            <motion.div 
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className=" w-[100%] md:w-[50%] space-y-2">
              <div className="space-y-2">
                <p className="font-extrabold text-xl head">
                  E-commerce shopping clone
                </p>

                
                <div>
                <p className="para">✅	Developed an e-commerce website using MERN stack .


</p>
<p className="para">✅	Integrated Multer for file uploads and utilized Nodemailer for email functionality. </p>
<p className="para">✅	Implemented JWT authentication and Bcrypt.js for password hashing.</p>
                </div>
              </div>
              <p className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs para">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </p>
            </motion.div>
          </div>
          <div className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.div 
             initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="w-[100%] md:w-[50%] space-y-2">
              <div className="space-y-2">
                <p className="font-extrabold text-xl head">
                  Meesho clone
                </p>

               
               <div className="p-2 para">
               <p>✅	Developed a Meesho landing page using React.js and Tailwind CSS. 

</p>
<p> ✅	Integrated login and signup validation.</p>
               </div>
              </div>
              <p className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs para">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </p>
            </motion.div>
            <motion.div 
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
            </motion.div>
          </div>
          <div className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.div 
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
            </motion.div>
            <motion.div 
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="w-[100%] md:w-[50%] space-y-2">
              <div className="space-y-2">
                <p className="font-extrabold text-xl head">
                  Astrology landing page
                </p>

                
                <div>
                <p className="para">✅ Technology Stack: I utilized Next.js for building the astrology landing page, which allowed for server-side rendering and seamless page transitions. Framer Motion was employed to add smooth animations and transitions, enhancing the overall user experience.</p>
<p className="para">✅ Design: Tailwind CSS was used to style the landing page, providing a clean and modern aesthetic. The utility-first approach of Tailwind CSS enabled rapid prototyping and easy customization, resulting in a visually appealing and responsive design.</p>

<p className="para"> ✅ Features: The landing page includes interactive elements and engaging animations powered by Framer Motion, creating an immersive experience for visitors. The use of Next.js facilitated efficient routing and ensured fast loading times, contributing to a seamless browsing experience.</p>
                </div>
              </div>
              <p className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs para">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </p>
            </motion.div>
          </div>
          <div className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 ">
            <motion.div 
             initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className=" w-[100%] md:w-[50%] space-y-2">
              <div className="space-y-2">
                <p className="font-extrabold text-xl head">
                  jupiter landing page
                </p>

                <div>
                <p className="para">
              ✅  Technology Stack: Developed the Jupiter landing page using React.js for efficient component-based UI development. Leveraged Tailwind CSS for rapid styling and responsive design, enabling quick iteration and customization.


                </p>
                <p className="para">✅ Responsive Design: Employed Tailwind CSS to ensure a mobile-first approach, enabling seamless responsiveness across various devices and screen sizes. Tailwind&apos;s utility classes facilitated the creation of a visually appealing and adaptable layout.</p>
                <p className="para">✅ Animations: Integrated Framer Motion to incorporate engaging animations and transitions, enhancing the visual appeal and interactivity of the landing page. Utilized Framer Motion&apos;s capabilities to create smooth and dynamic motion effects for a captivating user experience.</p>
                </div>
              </div>
              <p className="flex items-center space-x-2 cursor-pointer text-blue-500 font-bold text-xs para">
                
                Code
                <GitHub
                  sx={{
                    fontSize: "medium",
                  }}
                />
              </p>
            </motion.div>
            <motion.div 
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
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
