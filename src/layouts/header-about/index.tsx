import TitleAbout from '@components/title-about';
import url from '@assets/image/BackgroundAbout.png'
import React from 'react';

const HeaderAbout = () => {
    return (
        <div className='flex justify-around translate-x-32 mt-16'>
            <div className='flex flex-col justify-center'>
                <TitleAbout></TitleAbout>
            </div>
            <div>
                <img src={url} alt="" />
            </div>
        </div>
    );
};

export default HeaderAbout;