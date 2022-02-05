import LogoWhite from '../../public/assets/images/logoWhite.png'
import IG from '../../public/assets/svgs/instagram.svg';
import LI from '../../public/assets/svgs/linkedIn.svg';
import FB from '../../public/assets/svgs/facebook.svg';
import TW from '../../public/assets/svgs/twitter.svg';
import Location from '../../public/assets/svgs/Location.svg';
import Message from '../../public/assets/svgs/Message.svg';
import Mobile from '../../public/assets/svgs/Mobile.svg';

import Image from 'next/image'

export default function Footer() {
    return (       
        <div className="bg-green-900 md:h-116">
            <div className="grid md:grid-cols-5 md:px-20 pt-6 md:pt-24">
                <div>
                    <div className="w-100 ml-3">
                        <Image width={118} height={35} src={LogoWhite} alt="Ricive logo"/>
                    </div>
                    <div className="grid md:grid-cols-5 my-6">
                        <Image width={24} height={24} src={IG} alt="Instagram"/>
                        <Image width={24} height={24} src={TW} alt="Twitter"/>
                        <Image width={24} height={24} src={LI} alt="LinkedIn"/>
                        <Image width={24} height={24} src={FB} alt="Facebook"/>
                    </div>
                </div>

                <div>
                    <p className="text-xl text-white"> Product </p>
                    <div className="grid md:grid-rows-3 my-8 gap-6">
                        <p className="text-base text-gray-200"> Individuals </p>
                        <p className="text-base text-gray-200"> Patners </p>
                        <p className="text-base text-gray-200"> Business </p>
                    </div>
                </div>

                <div>
                    <p className="text-xl text-white"> Pricing </p>
                    <div className="grid md:grid-rows-3 my-8 gap-6">
                        <p className="text-sm text-gray-200"> Laundry </p>
                        <p className="text-sm text-gray-200"> Groceries </p>
                    </div>
                </div>

                <div>
                    <p className="text-xl text-white"> Company </p>
                    <div className="grid md:grid-rows-3 my-8 gap-6">
                        <p className="text-sm text-gray-200"> About </p>
                        <p className="text-sm text-gray-200"> FAQs </p>
                        <p className="text-sm text-gray-200"> Careers </p>
                    </div>
                </div>

                <div>
                    <p className="text-xl text-white"> Contact us </p>
                    <div className="grid md:grid-rows-3 my-8 gap-6">
                        <div className=" inline-flex items-center gap-2">
                          <Image src={Message} alt="email"/>
                          <p className="text-sm text-gray-200"> Enter your email address here </p>
                        </div>
                        <div className=" inline-flex items-center gap-2">
                          <Image src={Mobile} alt="phone"/>
                          <a href="tel:+2347061172646" className="text-sm text-gray-200"> +2347061172646 </a>
                        </div>
                        <div className=" inline-flex items-baseline gap-2">
                          <Image src={Location} className="mt-2" alt="location"/>
                          <p className="text-sm text-gray-200">
                            361 Herbert Macaulay Way, <br /> Yaba, 100001, Lagos.
                          </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="md:px-24 pt-6">
                <hr />
                <footer className="flex justify-between">
                    <div className="mt-8">
                        <p className="text-sm text-gray-200">&#169; {new Date().getFullYear()} Ricive. All rights reserved</p>
                    </div>

                    <div className="mt-8">
                    <p className="text-sm text-gray-200">Terms & Conditions | Privacy Policy </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}