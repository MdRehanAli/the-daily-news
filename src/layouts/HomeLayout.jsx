import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='max-w-7xl mx-auto w-11/12 my-7'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='max-w-7xl mx-auto w-11/12 my-7'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;