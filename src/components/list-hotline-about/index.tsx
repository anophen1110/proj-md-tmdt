import React from 'react';
import { FiCheckSquare, FiPhoneCall, FiTruck } from 'react-icons/fi';
const LinkList: { id: number; icon: any, des: string, title: string }[] = [
    {
        id: 1,
        icon: <FiTruck className='setIconAboutHotline'></FiTruck>,
        des: 'Free delivery for all orders over $140',
        title: "FREE AND FAST DELIVERY"
    },
    {
        id: 2,
        icon: <FiPhoneCall className='setIconAboutHotline'></FiPhoneCall>,
        des: 'Friendly 24/7 customer support',
        title: "24/7 CUSTOMER SERVICE"
    },
    {
        id: 3,
        icon: <FiCheckSquare className='setIconAboutHotline'></FiCheckSquare>,
        des: 'We reurn money within 30 days',
        title: "MONEY BACK GUARANTEE"
    },
];

const ListHotlineAbout = () => {
    return (
        <div className='centerAll gap-x-72 mt-24'>
            {LinkList.map((item: any, index: number) => (
                <div className='flex flex-col'>
                    <div className='w-[80px] h-[80px] bg-black rounded-full centerAll translate-x-20 mb-7' key={item.index}>{item.icon}</div>
                    <div className='text-center'>
                        <p className='text-[20px] font-semibold'>{item.title}</p>
                        <p className='text-[14px] font-normal mt-5'>{item.des}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListHotlineAbout;