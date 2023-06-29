
import InputSearch from '@components/input-search';
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
                            <InputSearch></InputSearch>
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