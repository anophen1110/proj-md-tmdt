
import { FiChevronDown } from "react-icons/fi"


const TitleHead = () => {
    return (
        <div className='w-full h-[48px] bg-black text-white relative text-[14px]'>
            <div className='absolute gap-x-2  top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]'>
                <div className='leading-[21px] font-normal cursor-default'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <span className='font-semibold leading-6 underline ml-3 cursor-pointer'>ShopNow</span>
                </div>
            </div>
            <div className=' centerAll absolute right-32 top-[50%] -translate-y-[50%] gap-x-1'>
                English
                <div className="setIcon">
                    <FiChevronDown></FiChevronDown>
                </div>
            </div>
        </div>
    );
};

export default TitleHead;