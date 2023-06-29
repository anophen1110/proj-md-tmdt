import GroupInputHome from '@components/group-input-home';
import Line from '@components/line';
import ListNav from '@components/list-nav';
import TitleLogo from '@components/title-logo';


const NavBar = (props: any) => {
    return (
        <>
            <div className='flex w-full justify-around mb-7 mt-16'>
                <TitleLogo></TitleLogo>
                <ListNav></ListNav>
                <GroupInputHome></GroupInputHome>
            </div>
            <Line></Line>
        </>
    );
};

export default NavBar;