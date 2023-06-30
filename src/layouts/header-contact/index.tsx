import ContactHotline from '@layoutStore/contact-hottline';
import InPutConTact from '@layoutStore/input-contact';
import React from 'react';

const HeaderContact = () => {
    return (
        <div className='centerAll gap-x-24 mt-20'>
            <ContactHotline></ContactHotline>
            <InPutConTact></InPutConTact>
        </div>
    );
};

export default HeaderContact;