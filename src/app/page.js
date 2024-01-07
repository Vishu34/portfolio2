import About from "@/components/About/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer/page";
import Home1 from "@/components/Home/page";
import Desktopnavbar from "@/components/Navbar/DesktopNav/page";
import Mobilenavbar from "@/components/Navbar/MobileNav/page";
import Skills from "@/components/Skills/page";
import Work from "@/components/Work/page";




export default function Home() {
  return (
    <>
     <Desktopnavbar/>
     <Mobilenavbar/>
     <Home1/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
   
    
    </>
  )
}
