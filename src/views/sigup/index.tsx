import InputSearch from '@components/input-search';
import FormSigup from '@layoutStore/form-sigup';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import url from '@assets/image/SliceAccount.png'

const PageSigUp = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <div className='flex mt-20'>
                <div>
                    <img src={url} alt="" />
                </div>
                <div className='centerAll translate-x-[85%]'>
                    <FormSigup></FormSigup>
                </div>
            </div>
        </>
    );
};

export default PageSigUp;