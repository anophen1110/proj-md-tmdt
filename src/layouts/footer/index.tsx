import React from 'react';

const Footer = () => {
    return (
        <div className="footer relative h-[440px] w-full  bg-black mt-20">
            <div className="flex justify-around text-white translate-y-20">
                <div className="cursor-pointer">
                    <h2 className="text-[20px] font-semibold mb-6">Exclusive</h2>
                    <ul className="grid gap-y-3">
                        <li>Subscribe</li>
                        <li>Get 10% off your first order</li>
                        <li>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="bg-transparent border w-full border-white px-2 py-1 outline-none"
                                placeholder="Enter your email"
                            />
                        </li>
                    </ul>
                </div>
                <div className="cursor-pointer">
                    <h2 className="text-[20px] font-semibold mb-6">Support</h2>
                    <ul className="grid gap-y-3">
                        <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>
                <div className="cursor-pointer">
                    <h2 className="text-[20px] font-semibold mb-6">Account</h2>
                    <ul className="grid gap-y-3">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className="cursor-pointer">
                    <h2 className="text-[20px] font-semibold mb-6">Quick Link</h2>
                    <ul className="grid gap-y-3">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="cursor-pointer">
                    <h2 className="text-[20px] font-semibold mb-6">Download App</h2>
                    <ul className="grid gap-y-3">
                        <li>Save $3 with App New User Only</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className=" w-fullfooter end text-[#FFFFFF] opacity-50 flex bottom-2 left-[50%] -translate-x-[50%] absolute gap-x-2 pt-5">
                <div className="logo"></div>
                <div className="footer title -translate-y-[2px]">
                    <div>Copyright Rimel 2022. All right reserved</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;