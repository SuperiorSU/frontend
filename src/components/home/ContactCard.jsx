import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 py-10 justify-between p-6 bg-[#e5f5fa] rounded-2xl border border-black">
      <div className="lg:col-span-1 md:col-span-1 col-span-1">
        <h2 className="text-3xl font-primaryBold text-gray-900">
          Keep in touch with GDG Chandigarh for the latest announcements
        </h2>
        <p className="text-gray-700 font-primaryRegular py-2">Stake out #GDGChandigarh for the latest updates and news.</p>
        <div className="flex space-x-4 mt-4">
          {/* <a href=""> */}
          <FaEnvelope className="text-gray-800 hover:text-blue-600" size={24} />
          {/* </a> */}
          <a href="https://www.linkedin.com/company/gdg-chandigarh/posts/?feedView=all">
          <FaLinkedin className="text-gray-800 hover:text-blue-600" size={24} />
          </a>
          <a href="https://www.instagram.com/gdgchandigarh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <FaInstagram className="text-gray-800 hover:text-pink-600" size={24} />
          </a>
          <a href="https://www.youtube.com/@gdgchandigarh1203">
          <FaYoutube className="text-gray-800 hover:text-red-600" size={24} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-1 lg:block hidden">

      </div>
      <div className="lg:col-span-1 md:col-span-1 col-span-1">
        <img loading="lazy"
          src="https://utfs.io/f/Fp16c7Wd5HTuqU7SW5or58tdiVSQXY7GjlhafC3KTsm4cqwg"
          alt="Google Developer Groups Logo"
          className="w-full h-full object-center object-contain"
        />
        
      </div>
    </div>
  );
};

export default ContactCard;
