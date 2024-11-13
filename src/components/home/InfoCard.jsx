import React from 'react';
import GrayContainer from '../global/GrayContainer';

const contentData = [
    {
        title: 'Technical content',
        description: 'Worldwide events hosted by the Google Developer Groups community, featuring leading experts on technologies in areas like Android, Firebase, Flutter, Machine Learning, AI, Cloud and so much more!',
        icon: '🟣🔺🔺', // replace with actual icons or SVG elements if needed
    },
    {
        title: 'Panel Discussions',
        description: 'Full-day panel-discussions, all centered on your favorite Google technologies.',
        icon: '🔷🔷', // replace with actual icons or SVG elements if needed
    },
    {
        title: 'Networking',
        description: 'Meet and connect with other developers in your community.',
        icon: '🟢🟢🟢', // replace with actual icons or SVG elements if needed
    },
];

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
