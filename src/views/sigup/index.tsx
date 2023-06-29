import InputSearch from '@components/input-search';
import FormSigup from '@layoutStore/form-sigup';
import NavBar from '@layoutStore/nav';
import TitleHead from '@layoutStore/title-head';
import React from 'react';

const PageSigUp = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<InputSearch></InputSearch>}</NavBar>
            <div>
                <FormSigup></FormSigup>
            </div>
        </>
    );
};

export default PageSigUp;