import InformationStore from '@components/infomation-store';
import InputSearch from '@components/input-search';
import ListAuthor from '@components/list-author';
import ListHotlineAbout from '@components/list-hotline-about';
import HeaderAbout from '@layoutStore/header-about';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';


const PageAbout = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <HeaderAbout></HeaderAbout>
            <InformationStore></InformationStore>
            <ListAuthor></ListAuthor>
            <ListHotlineAbout></ListHotlineAbout>
            {/* this is about */}
        </>
    );
};

export default PageAbout;