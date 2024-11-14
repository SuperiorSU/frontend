import React from "react";
import cbox from '../assests/backgroundPng/cbox.png'
import cross from '../assests/backgroundPng/cross.png'
const Background = () =>{
   return (
    <div className="fixed h-screen top-0 left-0 z-[-1] w-screen" >
        <div className="absolute max-h-max max-w-max top-[50%] left-[-1%] transform rotate-180 translate-y-[-50%] opacity-50">
            <img src={cbox} className="h-[9vw]" alt=""  />
        </div>
        <div className="absolute max-h-max max-w-max bottom-[50px] right-[5%]">
            <img src={cross} className="h-[11vw] opacity-30" alt=""  />
        </div>
      
    </div>
   );
}

export default Background;