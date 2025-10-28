import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-4 '>
            <p className='text-base-100 bg-secondary px-6 py-3'>Latest</p>
            <Marquee pauseOnHover speed={60}>
                <p className='font-bold'>Match Highlights: Argentina vs Brazil — as it happened! </p>
                <p className='font-bold  px-8'>Match Highlights: Germany vs Spain — as it happened! </p>
                <p className='font-bold pr-8'>Match Highlights: Germany vs Spain — as it happened! </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;