import { Button } from "./button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link"



const Navbar = () => {
  return (
    <div className="md:flex justify-between z-50 text-center m-12">
        <div className="font-bold text-black text-3xl text-center animate-pulse p-2">
            <p className="text-transparent bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text">Bonke Sam</p>
        </div>

        <div className="flex justify-between bg-[#eef0f0]  border-none text-black text-center rounded-full cursor-pointer m-2 p-2">
            
            <div className="bg-transparent  rounded-full hover:bg-[#232b37] hover:text-white  transition duration-500 ">
                <p className="text-center pl-3 pr-3">All</p>
            </div>
            <div className="bg-transparent  rounded-full hover:bg-[#232b37] hover:text-white transition">
                <p className="text-center pl-3 pr-3">About</p>
            </div>
            <div className="bg-transparent rounded-full hover:bg-[#232b37] hover:text-white  transition">
                <Link href="https://github.com/Bonkesam"><p className="text-center ml-3 mr-3">Projects</p></Link>
            </div>
            <div className="bg-transparent rounded-full hover:bg-[#232b37] hover:text-white  transition">
                <Link href="https://tally.so/r/nWE6EQ"><p className="text-center ml-3 mr-3">Hire Me</p></Link>
            </div>
            <div className="bg-transparent rounded-full hover:bg-[#232b37] hover:text-white transition">
                <Link href="https://calendly.com/bonkesam9"className="text-center ml-3 mr-3">Call</Link>
            
            </div>
            
                  
        </div>
        <div className="text-center p-2 md:hidden lg:flex">
            <ModeToggle/>
        </div>

        
    </div>
  )
}

export default Navbar;
