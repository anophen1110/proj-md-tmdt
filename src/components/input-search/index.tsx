import React from 'react';
import { FiSearch } from 'react-icons/fi';

const InputSearch = () => {
    return (
        <div className='relative'>
            <input type="text" className=' w-[243px] bg-[#F5F5F5] outline-none py-2 pr-[12px] pl-[20px] text-[12px]' placeholder='What are you looking for?' />
            <div className='absolute top-[50%] right-2 -translate-y-[60%]'>
                <FiSearch></FiSearch>
            </div>
        </div>
    );
};

export default InputSearch;