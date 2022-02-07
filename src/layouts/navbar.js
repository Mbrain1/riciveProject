import Image from 'next/image'
import { useState,useEffect } from 'react'
import { Transition } from "@headlessui/react";
import Logo from 'public/assets/images/logobig.png'
import ApplePlayIcon from 'public/assets/images/google.png'
import GooglePlayIcon from 'public/assets/images/apple.png'
import ArrowDown from 'public/assets/svgs/arrow-down.svg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isPricingOpen, setIsPricingOpen] = useState(false);
    const [isPartnerOpen, setIsPartnerOpen] = useState(false);
    const [isBusinessOpen, setIsBusinessOpen] = useState(false);


    const closeAllModal = () => {
      setIsProductOpen(false)
      setIsPricingOpen(false)
    }


    useEffect(() => {
      if(isProductOpen || isPricingOpen){
          setIsOpen(false);
      }
    },[isProductOpen,isPricingOpen])

    useEffect(() => {
      if(isBusinessOpen){
        setIsPartnerOpen(false);
      }
    },[isBusinessOpen])

     useEffect(() => {

      if(isPartnerOpen){
        setIsBusinessOpen(false);
      }
      
    },[isPartnerOpen])


    return(
    <header className="shadow py-3">
          <nav className="flex justify-between items-center container ">
            <img src="/assets/images/logobig.png" />

            <ul className="space-x-5 text-xl hidden md:flex">
              <li className="">
              <a className="flex" href='#' onClick={() => setIsProductOpen(!isProductOpen)}>
                <span>Product</span> &nbsp;
                <img src={`/assets/svgs/arrow-${isProductOpen ? 'down' : 'down'}.svg`} alt="ArrowDown"  />
              </a>

              </li>
              

              <li className="">
              <a className="flex" href='#' onClick={() => setIsPricingOpen(!isPricingOpen)}>
                <span>Pricing</span> &nbsp;
                <img src={`/assets/svgs/arrow-down.svg`} alt="ArrowDown"  />
              </a>
              </li>
            </ul>

            <div className="hidden md:flex space-x-3">
                <img src="/assets/images/google.png" />
                <img src="/assets/images/apple.png" />
            </div>



             <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200 group" onClick={() => setIsOpen(!isOpen)}>
                <div class="w-5 h-1 bg-black mb-1"></div>
                <div class="w-5 h-1 bg-black mb-1"></div>
                <div class="w-5 h-1 bg-black"></div>
             </button>

        </nav>





                <div class={`z-50 fixed top-0 py-10 h-screen w-8/12 bg-white border  ${isOpen ? 'left-0 opacity-100' : '-left-full opacity-0'} transition-all duration-300`}>
                    <ul class="flex flex-col items-center w-full text-base cursor-pointer">


                       <li class="hover:bg-gray-200 py-4 px-6 w-full text-left">
                        <a className="flex"  onClick={() => setIsProductOpen(!isProductOpen)}>
                          <span>Product</span> &nbsp;
                          <img src={`/assets/svgs/arrow-down.svg`} alt="ArrowDown"  />
                        </a>
                      </li>


                      <li class="hover:bg-gray-200 py-4 px-6 w-full text-left">
                        <a className="flex"  onClick={() => setIsPricingOpen(!isPricingOpen)}>
                          <span>Pricing</span> &nbsp;
                          <img src={`/assets/svgs/arrow-down.svg`} alt="ArrowDown"  />
                        </a>
                      </li>
                     

                       <div className="flex  space-x-3 justify-center absolute bottom-10">
                          <img src="/assets/images/google.png" />
                          <img src="/assets/images/apple.png" />
                      </div>

                    </ul>
              </div>


              <div className={`grid gap-10  absolute bg-white inset-x-[10px] md:inset-x-1/4 ${isPartnerOpen || isBusinessOpen ? 'md:w-3/4 grid-cols-2' : 'md:w-2/4 grid-cols-1'} top-20 z-50 px-7  transition-all duration-300 ${isProductOpen ? 'z-50 opacity-100' : '-z-50 opacity-0'}`}>
                 <div className="space-y-10 py-7">
                     <div className="space-y-3">
                       <h3 className="font-semibold">Individuals</h3>
                       <p className="text-sm">Pick a laundry plan or order an instant pickup on your mobile.</p>
                     </div>

                    <div className="space-y-3">
                       <a className="font-semibold flex" href="#" onClick={() => setIsPartnerOpen(!isPartnerOpen)}>Partners &nbsp;&nbsp; <img src="/assets/svgs/arrow-right.svg" alt="Arrow Right"  /></a>
                       <p className="text-sm">Grow your business, reach more customers on the go.</p>
                    </div>

                    <div className="space-y-3">
                       <a className="font-semibold flex" href="#" onClick={() => setIsBusinessOpen(!isBusinessOpen)}>Business &nbsp;&nbsp; <img src="/assets/svgs/arrow-right.svg" alt="Arrow Right"  /></a>
                       <p className="text-sm">Improve productivity and staff retention. Find a business plan for your team.</p>
                    </div>
                </div>

                 <div className={`space-y-10 py-7 border-l pl-5 ${isPartnerOpen ? 'block' : 'hidden'}`}>
                     <div className="space-y-3">
                       <h3 className="font-semibold">Merchant partners</h3>
                       <p className="text-sm">Get your team discount and let your staff cover the rest, at zero cost to business.</p>
                     </div>

                    <div className="space-y-3">
                       <h3 className="font-semibold flex"><span>Delivery partners</span> &nbsp;
                        <button className="rounded-full px-3 py-2 text-green-200 bg-green-300 text-sm">Coming Soon</button>
                      </h3>
                       <p className="text-sm">Cover your team laundry bill monthly at a discount. Delight to your staff, with open weekends.</p>
                    </div>
                </div>

                <div className={`space-y-10 py-7 border-l pl-5 ${isBusinessOpen ? 'block' : 'hidden'}`}>
                     <div className="space-y-3">
                       <h3 className="font-semibold text-green-800">Business Basic</h3>
                       <p className="text-sm">Get your team discount and let your staff cover the rest, at zero cost to business.</p>
                     </div>

                    <div className="space-y-3">
                       <h3 className="font-semibold flex text-yellow-900">Business Pro</h3>
                       <p className="text-sm">Cover your team laundry bill monthly at a discount. Delight to your staff, with open weekends.</p>
                    </div>
                </div>


              </div>




              <div className={`overlay opacity-20 bg-black z-40 fixed w-full left-0 top-0 h-full bg-green-100 ${isPricingOpen || isProductOpen ? 'block' : 'hidden'}`} onClick={() => closeAllModal()}></div>

              <div className={`absolute bg-white inset-x-[10px] md:inset-x-1/4  md:w-2/4 top-20 z-50 p-7 space-y-10 transition-all duration-300 ${isPricingOpen ? 'z-50 opacity-100' : '-z-50 opacity-0'}`}>
                  <div className="space-y-3">
                     <h3 className="font-semibold">Laundry</h3>
                     <p className="text-sm">Resolve your laundry in minutes, find a plan that matches your pocket.</p>
                  </div>

                  <div className="space-y-3">
                     <h3 className="font-semibold flex items-center">
                       Groceries &nbsp; 
                       <button className="rounded-full px-3 py-2 text-green-200 bg-green-300 text-sm">Coming Soon</button>
                     </h3>
                     <p className="text-sm">Order your groceries, receive your deliveries in minutes. Zero commute, no delays.</p>
                  </div>

              </div>


      </header>

    )
}