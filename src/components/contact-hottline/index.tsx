import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const ContactHotline = () => {
    return (
        <div className="p-16 shadow-2xl inline-block">
            <div className=" inline-block call mb-10 pb-10 border border-b-black border-r-transparent border-l-transparent border-t-transparent">
                <div className="flex gap-x-4">
                    <FiPhoneCall></FiPhoneCall>
                    <div className="title font-medium mt-3">Call To Us</div>
                </div>
                <div className="mt-10 mb-3">We are available 24/7, 7 days a week.</div>
                <div>Phone: +8801611112222</div>
            </div>
            <div className="write">
                <div className="call flex flex-col gap-y-5">
                    <div className="flex gap-x-4">
                        <FiMail></FiMail>
                        <div className="title font-medium mt-3">Write To US</div>
                    </div>
                    <div className="w-[340px]">
                        Fill out our form and we will contact you within 24 hours.
                    </div>
                    <div>Emails: customer@exclusive.com</div>
                    <div>Emails: support@exclusive.com</div>
                </div>
            </div>
        </div>
    );
};

export default ContactHotline;