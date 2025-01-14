import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#050505] text-white px-16 pt-16">
        <div className="flex flex-col md:flex-row justify-between">      
            
            <div className="flex justify-between">
                <a href="#">
                CRONOS
                </a>

                <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? (
                    <RiCloseLine className="h-6 w-6 text-white" />
                    ) : (
                    <GiHamburgerMenu className="h-6 w-6 text-white" />
                    )}
                </button>
                </div>
            </div>

            <div>
                <ul className={`text-center md:flex md:items-center  ${isOpen ? 'block' : 'hidden'} md:block md:gap-10`}>
                    <li><a href="#learn" className="block py-2 m-5 md:py-0 md:m-0">Learn</a></li>
                    <li><a href="#build" className="block py-2 m-5 md:py-0 md:m-0">Build</a></li>
                    <li><a href="#explore" className="block py-2 m-5 md:py-0 md:m-0">Explore</a></li>
                </ul>
            </div>

            <div className={`text-center p-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <a href="#getTemplate" className="flex gap-2 justify-center">Get CRONOS <span className=" flex justify-center items-center"><IoIosArrowForward className="text-white"/></span></a>
            </div>

        </div>
    </nav>
  );
};

export default Navbar;
