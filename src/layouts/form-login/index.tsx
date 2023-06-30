import ButtonAll from '@components/button-account';
import InputAll from '@components/input-all';



const FormLogin = () => {
    return (
        <div>
            <div className='flex flex-col gap-y-7 mb-10'>
                <p className='text-[34px] font-medium fontAcount leading-6'>Log in to Exclusive</p>
                <p className='font-normal leading-4'>Enter your details below</p>
            </div>
            <div>
                <InputAll type={"email | phone"} id={"address"} placeholder={"Email or Phone Number"}></InputAll>
                <InputAll type={"password"} id={"pass"} placeholder={"Password"}></InputAll>
            </div>
            <div className='flex'>
                <ButtonAll textColor='text-white' nameButton='Log In' background='bg-[#DB4444]'></ButtonAll>
                <ButtonAll textColor='text-[#DB4444]' nameButton='Forget Password?' background='bg-white'></ButtonAll>
            </div>
        </div>
    );
};

export default FormLogin;