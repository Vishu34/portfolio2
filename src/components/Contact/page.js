"use client";

import { Box, Button, TextareaAutosize, Typography } from "@mui/material";
import Image from "next/image";


const Contact = () => {
  return (
    <>
        <Box className="px-5 md:mx-auto w-[100%] md:w-[80%] py-10 my-10 " id="contact">
        <Box className="flex items-center space-x-2 justify-center">
          <Image
            src="/badge-line.svg"
            alt="image"
            width={10000}
            height={10000}
            className="w-10 h-20"
          />
          <Typography className="font-extrabold text-xl text-blue-500 py-3">
            Contact Me
          </Typography>
        </Box>
    <form className="space-y-2"
    action="https://formspree.io/f/xeqyqvep"
  method="POST">
         <Box className="sm:flex space-y-2 sm:space-y-0
          items-center justify-between gap-5">
            <input type="text" placeholder="First Name"  name="fname" className="w-[100%] rounded-md h-10 px-3 outline-none border-2 border-gray-300 hover:border-blue-200"/>
            <input type="text" placeholder="Last Name" name="lname" className="w-[100%] rounded-md h-10 px-3 outline-none border-2 border-gray-300 hover:border-blue-200"/>

         </Box>
         <Box className="sm:flex space-y-2 sm:space-y-0 items-center justify-between gap-5">
            <input type="email" placeholder="Email" name="email" className="w-[100%] rounded-md h-10 px-3 outline-none border-2 border-gray-300 hover:border-blue-200"/>
            <input type="number" placeholder="Phone No." name="phone" className="w-[100%] rounded-md h-10 px-3 outline-none border-2 border-gray-300 hover:border-blue-200"/>

         </Box>
         <Box>
            <textarea type="text" placeholder="messsage here" name="message" className="w-[100%] rounded-md h-24 px-3 outline-none border-2 border-gray-300 hover:border-blue-200" />
         </Box>
         <Button type="submit" className=" font-bold hover:bg-blue-400 bg-blue-500 text-white text-xs capitalize px-5 mt-10">
              Send Message
            </Button>
    </form>
      </Box>
    </>
  );
};

export default Contact;
