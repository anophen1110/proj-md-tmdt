import InputAll from '@components/input-all';
import React from 'react';

const FormSigup = () => {
    return (
        <div className='mb-10'>
            <InputAll type={"text"} id={"name"} placeholder={"Name"}></InputAll>
            <InputAll type={"email | phone"} id={"address"} placeholder={"Email or Phone Number"}></InputAll>
            <InputAll type={"password"} id={"pass"} placeholder={"Password"}></InputAll>
        </div>
    );
};

export default FormSigup;