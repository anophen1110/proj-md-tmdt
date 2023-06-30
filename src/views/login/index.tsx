import GroupInputHome from '@components/group-input-home';
import FormLogin from '@layoutStore/form-login';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import url from '@assets/image/SliceAccount.png';

const PageLogin = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<GroupInputHome></GroupInputHome>}</NavBar>
            <div className='flex mt-20'>
                <div>
                    <img src={url} alt="" />
                </div>
                <div className='centerAll translate-x-[85%]'>
                    <FormLogin></FormLogin>
                </div>
            </div>

        </>
    );
};

export default PageLogin;