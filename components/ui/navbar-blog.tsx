import { Button } from "./button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link"



const Navbar = () => {
  return (
    <div className="md:flex justify-between z-50 text-center m-12">
        <div className="font-bold text-black text-3xl text-center animate-pulse p-2">
            <p className="text-transparent bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text">
                Bonke Sam
            </p>
        </div>        
        <div className="text-center p-2 md:hidden lg:flex">
            <ModeToggle/>
        </div>
        
    </div>
  )
}

export default Navbar;
