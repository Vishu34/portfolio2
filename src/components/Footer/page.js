"use client";

import { GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <>
      <Box className=" bg-sky-900 text-white   py-10 ">
      <Box className="px-5 md:mx-auto w-[100%] md:w-[80%]  ">
    <Typography className="font-bold text-xl text-center"> Vishu sahu</Typography>
    <Box className="flex items-center  justify-center gap-5">
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
    </Box>
   
    <Typography className=" text-md text-center"> © vishu sahu. All rigths reserved</Typography>
</Box>
      </Box>
    </>
  );
};

export default Footer;
