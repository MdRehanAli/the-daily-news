import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const AuthLayout = () => {
    return (
        <div>
            <header className='max-w-7xl mx-auto w-11/12 my-7'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-7xl mx-auto w-11/12 my-7'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;