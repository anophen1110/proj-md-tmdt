import InputSearch from '@components/input-search';
import HeaderAbout from '@layoutStore/header-about';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';


const PageAbout = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <HeaderAbout></HeaderAbout>
            {/* this is about */}
        </>
    );
};

export default PageAbout;