import InputSearch from '@components/input-search';
import Footer from '@layoutStore/footer';
import HeaderContact from '@layoutStore/header-contact';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';

const PageContact = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <HeaderContact></HeaderContact>
            <Footer></Footer>
        </>
    );
};

export default PageContact;