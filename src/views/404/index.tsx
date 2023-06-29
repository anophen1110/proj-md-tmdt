import ButtonAll from '@components/button-account';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar></NavBar>
            <div className='centerAll flex-col gap-y-5 mt-[150px]'>
                <div className='text-[110px] fontAcount'>404 Not Found</div>
                <div className=''>Your visited page not found. You may go home page.</div>
                <NavLink to="/" className='mt-20'>
                    <ButtonAll textColor='text-white' nameButton='Back to home page' background='bg-[#DB4444]'></ButtonAll>
                </NavLink>
            </div>

        </>
    );
};

export default Page404;