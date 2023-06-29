import ButtonAll from '@components/button-account';
import InputAll from '@components/input-all';
import { FcGoogle } from 'react-icons/fc'


const FormSigup = () => {
    return (
        <div>
            <div className='flex flex-col gap-y-7 mb-10'>
                <p className='text-[34px] font-medium fontAcount leading-6'>Create an account</p>
                <p className='font-normal leading-4'>Enter your details below</p>
            </div>
            <div>
                <InputAll type={"text"} id={"name"} placeholder={"Name"}></InputAll>
                <InputAll type={"email | phone"} id={"address"} placeholder={"Email or Phone Number"}></InputAll>
                <InputAll type={"password"} id={"pass"} placeholder={"Password"}></InputAll>
            </div>
            <div className='flex flex-col gap-y-5'>
                <ButtonAll textColor='text-white' nameButton='Create Account' background='bg-[#DB4444]'></ButtonAll>
                <ButtonAll logo={<FcGoogle></FcGoogle>} textColor='text-black' border='border border-[#9CA3AF]' nameButton='Sign up with Google' background='bg-white'></ButtonAll>
            </div>
            <div className='flex gap-x-4 left-6 ml-5 mt-7 opacity-50'>
                <p>Already have account?</p>
                <a href='#a'>Log in</a>
            </div>
        </div>
    );
};

export default FormSigup;