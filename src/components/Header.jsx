import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-4'>
            <img className='mt-8' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            
        </div>

    );
};

export default Header;