import InputSearch from '@components/input-search';
import React from 'react';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const GroupInputHome = () => {
    return (
        <div className='flex gap-x-5'>
            <div className='flex'>
                <div className='relative'>
                    <InputSearch></InputSearch>
                </div>
            </div>
            <div className='centerAll gap-x-5 setIcon'>
                <FiHeart></FiHeart>
                <FiShoppingCart></FiShoppingCart>
                <FiUser></FiUser>
            </div>
        </div>
    );
};

export default GroupInputHome;