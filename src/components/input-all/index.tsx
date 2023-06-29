import { IInputAll } from '@interface';
import React from 'react';

const InputAll = ({ type, id, placeholder }: IInputAll) => {
    return (
        <div className='flex flex-col gap-y-1 mb-10'>
            <input id={id} type={type} className="py-1 w-[300px] text border border-b-[#9CA3AF] border-transparent leading-6 outline-none" placeholder={placeholder} />
        </div>
    );
};

export default InputAll;