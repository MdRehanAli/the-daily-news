import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-4'>
            <img className='mt-8' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, ")}<span className='text-accent'>{format(new Date(), "MMMM MM, yyyy")}</span></p>
        </div>

    );
};

export default Header;