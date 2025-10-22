import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-4 '>
            <p className='text-base-100 bg-secondary px-6 py-3'>Latest</p>
            <Marquee pauseOnHover speed={60}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nostrum.</p>
                <p className='font-bold  px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nostrum.</p>
                <p className='font-bold pr-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nostrum.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;