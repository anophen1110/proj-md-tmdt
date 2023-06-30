import i18n from "@i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown } from "react-icons/fi"


const TitleHead = () => {
    const { t } = useTranslation();
    const [on, setOn] = useState<Boolean>(false);
    const [select, setSelect] = useState<string>('English');
    const handleClick = () => {
        setOn(!on)
    }

    const changeLanguage = (lng: 'en' | 'vi') => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className='w-full h-[48px] bg-black text-white relative text-[14px]'>
            <div className='absolute gap-x-2  top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]'>
                <div className='leading-[21px] font-normal cursor-default'>{t('title')}
                    <span className='font-semibold leading-6 underline ml-3 cursor-pointer'>{t('shopnow')}</span>
                </div>
            </div>
            <div className=' centerAll absolute right-14 top-[50%] -translate-y-[50%] gap-x-1 transition-all cursor-pointer' onClick={handleClick}>
                <button className="mr-2" onClick={() => changeLanguage('en')}>English</button>
                <button className=" bg-black p-2 right-0  border border-t-transparent border-b-transparent border-r-transparent" onClick={() => changeLanguage('vi')}>{t('vi')}</button>
            </div>
        </div>
    );
};

export default TitleHead;