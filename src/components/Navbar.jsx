import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#050505] text-white">
        <div className="container flex flex-col md:flex-row justify-between">      
            
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
                    <ul className={`text-center md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <li><a href="#learn" className="block py-2 m-5 md:py-0 md:m-0">Learn</a></li>
                        <li><a href="#build" className="block py-2 m-5 md:py-0 md:m-0">Build</a></li>
                        <li><a href="#explore" className="block py-2 m-5 md:py-0 md:m-0">Explore</a></li>
                    </ul>
            </div>

            <div className="hidden md:block p-0">
                <a href="#getTemplate" className="py-2 m-0">Get Template</a>
            </div>

        </div>
    </nav>
  );
};

export default Navbar;
