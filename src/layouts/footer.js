import Image from 'next/image'

export default function Footer() {
    return (       
          <footer className="bg-green-900 py-12">
            <div className="container grid grid-cols-2 md:grid-cols-5 gap-y-10">
                <div className="space-y-5 col-span-2 md:col-span-1 flex flex-col items-center md:items-start  ">
                    <div>
                        <img width={118} height={35} src="/assets/images/logo/logoWhite.png" alt="Ricive logo"/>
                    </div>
                    <div className="flex space-x-3">
                        <img width={24} height={24} src="/assets/svgs/instagram.svg" alt="Instagram"/>
                        <img width={24} height={24} src="/assets/svgs/twitter.svg" alt="Twitter"/>
                        <img width={24} height={24} src="/assets/svgs/linkedIn.svg" alt="LinkedIn"/>
                        <img width={24} height={24} src="/assets/svgs/facebook.svg" alt="Facebook"/>
                    </div>
                </div>

                <div className="space-y-5">
                    <p className="text-xl text-white"> Product </p>
                    <div className="space-y-3 text-base text-gray-200">
                        <p> Individuals </p>
                        <p> Patners </p>
                        <p> Business </p>
                    </div>
                </div>

                <div className="space-y-5">
                    <p className="text-xl text-white"> Pricing </p>
                    <div className="space-y-3 text-base text-gray-200">
                        <p> Laundry </p>
                        <p className="flex space-x-2"> <span>Groceries</span> <button className="rounded-full px-3 text-xs py-1.5 text-green-200 bg-white">Coming Soon</button> </p>
                    </div>
                </div>

                <div className="space-y-5">
                    <p className="text-xl text-white"> Company </p>
                    <div className="space-y-3 text-base text-gray-200">
                        <p> About </p>
                        <p> FAQs </p>
                        <p> Careers </p>
                    </div>
                </div>

                <div className="space-y-5">
                    <p className="text-xl text-white"> Contact us </p>
                    <div className="space-y-3">
                        <div className="flex space-x-3 items-start justify-start">
                          <img src="assets/svgs/mail.svg" alt="email"/>
                          <p className="text-sm text-gray-200"> Enter your email address here </p>
                        </div>
                        <div className="flex space-x-3 items-start justify-start">
                          <img src="/assets/svgs/Mobile.svg" alt="phone"/>
                          <a href="tel:+2347061172646" className="text-sm text-gray-200"> +2347061172646 </a>
                        </div>
                        <div className="flex space-x-3 items-start justify-start">
                          <img src="/assets/svgs/location-white.svg" className="mt-2" alt="location"/>
                          <p className="text-sm text-gray-200">
                            361 Herbert Macaulay Way, <br /> Yaba, 100001, Lagos.
                          </p>
                        </div>
                    </div>
                </div>




                 <div className="col-span-2 md:col-span-5 mt-12">
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
        </footer>
    )
}