import { Link } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky z-[100] lg:top-4 md:top-4 top-0">
      <nav className="bg-gray-100 lg:w-3/4 md:w-3/4 sm:w-full w-full lg:my-4 md:my-4 sm:mb-3 mb-3  lg:top-4 md:top-4 top-0 p-4 lg:rounded-full md:rounded-full z-50 mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <img loading="lazy"
            src="https://utfs.io/f/Fp16c7Wd5HTuJrW7KPVH70dwr3DbxJGnUXPBskq8yI9zSOo5"
            alt="DevFest Logo"
            className="h-6"
          />
          
          <span className="inline-block px-2 py-1 text-xs font-primaryMedium border rounded-full border-black bg-white">Chandigarh</span>
        </div>
        
        
        <div className="lg:flex hidden space-x-4 ">
          <Link to="/" className="text-gray-700 text-xs font-primaryRegular inline-block hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Home</Link>
          <Link to="" className="text-gray-700 font-primaryRegular text-xs inline-block hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Speakers</Link>
          <Link to="/badge" className="text-gray-700 font-primaryRegular text-xs inline-block hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Badge</Link>
          <Link to="" className="text-gray-700 font-primaryRegular text-xs inline-block hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Sponsors</Link>
          <Link to="" className="text-gray-700 font-primaryRegular text-xs inline-block hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Team</Link>
          <Link to="/faq" className="text-gray-700 font-primaryRegular text-xs inline-block hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">FAQ</Link>
        </div>
        <div className="lg:hidden block">
          <button className="p-2 rounded-full hover:bg-slate-200 duration-100" onClick={handleToggle}>
              {isOpen?<RiCloseLargeFill className="text-2xl text-gray-700"/>:<HiMiniBars3BottomRight className="text-2xl text-gray-700" />}
          </button>
        </div>
        <div className="lg:block hidden w-max">
          <Link target="_blank" to="https://gdg.community.dev/gdg-chandigarh/" className="bg-yellow-400 font-primaryMedium text-black border font-medium py-2 px-4 rounded-full border-black hover:bg-yellow-500">
            Register Now
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-5 absolute lg:w-3/4 md:w-3/4 sm:w-full w-full z-[50000000] top-[72px] bg-gray-100 md:left-24 md:right-24 md:rounded-t-2xl p-4 shadow-md">
          <Link onClick={()=>setIsOpen(false)} to="/" className="block text-gray-700 font-primaryRegular text-xs hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Home</Link>
          <Link onClick={()=>setIsOpen(false)} to="" className="block text-gray-700 font-primaryRegular text-xs hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Speakers</Link>
          <Link onClick={()=>setIsOpen(false)} to="/badge" className="block text-gray-700 font-primaryRegular text-xs hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Badge</Link>
          <Link onClick={()=>setIsOpen(false)} to="" className="block text-gray-700 font-primaryRegular text-xs hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Sponsors</Link>
          <Link onClick={()=>setIsOpen(false)} to="" className="block text-gray-700 font-primaryRegular text-xs hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">Team</Link>
          <Link onClick={()=>setIsOpen(false)} to="/faq" className="block text-gray-700 font-primaryRegular text-xs hover:bg-gray-300 rounded-full duration-100 px-[10px] py-1 hover:text-gray-900">FAQ</Link>
          <Link onClick={()=>setIsOpen(false)} target="_blank" to="https://gdg.community.dev/gdg-chandigarh/" className="block bg-yellow-400 text-black border font-medium py-2 px-4 rounded-full border-black hover:bg-yellow-500">
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
