import GroupInputHome from '@components/group-input-home';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';

const PageRegister = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<GroupInputHome></GroupInputHome>}</NavBar>
            this is register
        </>
    );
};

export default PageRegister;