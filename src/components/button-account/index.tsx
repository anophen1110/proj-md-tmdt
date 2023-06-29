import { IButton } from '@interface';
import React from 'react';

const ButtonAll = ({ nameButton, background, textColor, border, logo }: IButton) => {
    return (
        <div className='relative'>
            <div className='absolute top-[50%] -translate-y-[50%] left-10 setIcon'>
                {logo}
            </div>
            <button className={`py-[16px] px-[48px] w-[300px] ${background} ${textColor} ${border} font-normal leading-6 rounded-md`}>
                {nameButton}
            </button>
        </div>
    );
};
export default ButtonAll;