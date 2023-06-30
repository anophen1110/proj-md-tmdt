import React from 'react';
import { FiDollarSign, FiHome, FiMap, FiShoppingBag } from 'react-icons/fi';


const LinkList: { id: number; icon: any, view: number, title: string }[] = [
    {
        id: 1,
        icon: <FiHome className='setIconAbout'></FiHome>,
        view: 10.5,
        title: "Sallers active our site"
    },
    {
        id: 2,
        icon: <FiMap className='setIconAbout'></FiMap>,
        view: 33,
        title: "Mopnthly Produduct Sale"
    },
    {
        id: 3,
        icon: <FiShoppingBag className='setIconAbout'></FiShoppingBag>,
        view: 45.5,
        title: "Customer active in our site"
    },
    {
        id: 4,
        icon: <FiDollarSign className='setIconAbout'></FiDollarSign>,
        view: 25,
        title: "Anual gross sale in our site"
    },
];
const InformationStore = () => {
    return (
        <div className='flex justify-evenly mt-10'>
            {LinkList.map((item: any, index: number) => (
                <div className='w-[270px] h-[230px] border mt-20' key={item.item}>
                    <div className='centerAll flex-col -translate-y-6 gap-y-2'>
                        <div className='inline-block centerAll mt-14 border rounded-full p-3 shadow-xl mb-2'>
                            {item.icon}
                        </div>
                        <h1 className='fontAcount text-[32px] font-bold'>{item.view}k</h1>
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InformationStore;