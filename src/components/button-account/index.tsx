import { IButton } from '@interface';
import React from 'react';

const ButtonAll = ({ size, nameButton, background, textColor, border, logo }: IButton) => {
    return (
        <div className='relative'>
            <div className='absolute top-[50%] -translate-y-[50%] left-16 setIcon border rounded-full'>
                {logo}
            </div>
            <button className={`py-[16px] px-[48px] ${size} ${background} ${textColor} ${border} font-normal leading-6 rounded-md`}>
                {nameButton}
            </button>
        </div>
    );
};
export default ButtonAll;