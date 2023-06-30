import ContactHotline from '@components/contact-hottline';
import InputSearch from '@components/input-search';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';

const PageContact = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <ContactHotline></ContactHotline>
            this is contact
        </>
    );
};

export default PageContact;