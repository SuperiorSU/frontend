import React from 'react';
import GrayContainer from '../global/GrayContainer';
import { contentData } from '../../utils/stats';


const InfoCard = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6">
            {contentData.map((item, index) => (
                <GrayContainer key={index}>
                    <div className=" mb-4 relative">
                       
                        <h3 className="text-3xl font-primaryBold mb-3">{item.title}</h3>
                        <p className="text-gray-700 font-primaryRegular">{item.description}</p>
                    </div>
                </GrayContainer>
            ))}
        </div>
    );
};

export default InfoCard;
