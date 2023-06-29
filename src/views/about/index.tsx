import InputSearch from '@components/input-search';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';

const PageAbout = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            this is about
        </>
    );
};

export default PageAbout;