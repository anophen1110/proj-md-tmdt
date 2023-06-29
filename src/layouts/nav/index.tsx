
import Line from '@components/line';
import ListNav from '@components/list-nav';
import TitleLogo from '@components/title-logo';
import { FiHeart, FiSearch, FiShoppingCart } from 'react-icons/fi';

const NavBar = () => {
    return (
        <>
            <div className='flex justify-around mb-7 mt-16'>
                <TitleLogo></TitleLogo>
                <ListNav></ListNav>
                <div className='flex gap-x-5'>
                    <div className='flex'>
                        <div className='relative'>
                            <input type="text" className=' w-[243px] bg-[#F5F5F5] outline-none py-2 pr-[12px] pl-[20px] text-[12px]' placeholder='What are you looking for?' />
                            <div className='absolute top-[50%] right-2 -translate-y-[60%]'>
                                <FiSearch></FiSearch>
                            </div>
                        </div>
                    </div>
                    <div className='centerAll gap-x-5 setIcon'>
                        <FiHeart></FiHeart>
                        <FiShoppingCart></FiShoppingCart>
                    </div>
                </div>
            </div>
            <Line></Line>
        </>
    );
};

export default NavBar;