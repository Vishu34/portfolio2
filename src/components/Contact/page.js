"use client";


import Image from "next/image";


const Contact = () => {
  return (
    <>
        <div className="px-5 md:mx-auto w-[100%] md:w-[80%] py-10 my-10 " id="contact">
        <div className="flex items-center space-x-2 justify-center">
          <Image
            src="/badge-line.svg"
            alt="image"
            width={10000}
            height={10000}
            className="w-10 h-20"
          />
          <p className="font-extrabold text-xl text-blue-500 py-3 head">
            Contact Me
          </p>
        </div>
    <form className="space-y-2 para font-bold"
    action="https://formspree.io/f/xeqyqvep"
  method="POST">
         <div className="sm:flex space-y-2 sm:space-y-0
          items-center justify-between gap-5">
            <input type="text" placeholder="First Name"  name="fname" className="w-[100%] rounded-md h-10 px-3 outline-none border-2 border-gray-300 hover:border-blue-200"/>
            <input type="text" placeholder="Last Name" name="lname" className="w-[100%] rounded-md h-10 px-3 outline-none border-2 border-gray-300 hover:border-blue-200"/>

         </div>
         <div className="sm:flex space-y-2 sm:space-y-0 items-center justify-between gap-5">
            <input type="email" placeholder="Email" name="email" className="w-[100%] rounded-md h-10 px-3 outline-none border-2 border-gray-300 hover:border-blue-200"/>
            <input type="number" placeholder="Phone No." name="phone" className="w-[100%] rounded-md h-10 px-3 outline-none border-2 border-gray-300 hover:border-blue-200"/>

         </div>
         <div>
            <textarea type="text" placeholder="messsage here" name="message" className="w-[100%] rounded-md h-24 px-3 outline-none border-2 border-gray-300 hover:border-blue-200" />
         </div>
         <button className=" font-bold hover:bg-blue-400 bg-blue-500 text-white text-xs capitalize px-5 py-2 mt-10 rounded-sm para">
              Send Message
            </button>
    </form>
      </div>
    </>
  );
};

export default Contact;
