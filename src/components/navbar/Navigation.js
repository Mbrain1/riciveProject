
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
export const PCView  = ({setIsProductOpen,setIsPricingOpen,isProductOpen,setIsOpen}) => {
    return(
         <nav className="flex justify-between items-center container ">
           <Link href="/" passHref>
              <a> <img alt="" src="/assets/images/logobig.png" /></a>
            </Link>

            <ul className="space-x-5 text-xl hidden md:flex">

              <li className="">
              <a className="flex" href='#' onClick={() => setIsProductOpen()}>
                <span>Product</span> &nbsp;
                <img src={`/assets/svgs/arrow-${isProductOpen ? 'down' : 'down'}.svg`} alt="ArrowDown"  />
              </a>

              </li>
              

              <li className="">
              <a className="flex" href='#' onClick={() => setIsPricingOpen()}>
                <span>Pricing</span> &nbsp;
                <img src={`/assets/svgs/arrow-down.svg`} alt="ArrowDown"  />
              </a>
              </li>
            </ul>

            <div className="hidden md:flex space-x-3">
                <img alt="alt" src="/assets/images/app-store/google.png" />
                <img alt="alt" src="/assets/images/app-store/apple.png" />
            </div>



             <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200 group" onClick={() => setIsOpen()}>
                <div className="w-5 h-1 bg-black mb-1"></div>
                <div className="w-5 h-1 bg-black mb-1"></div>
                <div className="w-5 h-1 bg-black"></div>
             </button>

        </nav>
    )
}





export const MobileView  = ({setIsPartnerOpen,setIsBusinessOpen,isPartnerOpen,isBusinessOpen,setIsProductOpen,setIsPricingOpen,isProductOpen,isPricingOpen,setIsOpen,isOpen}) => {
    return(
            <nav className={`z-[3000] fixed top-0 py-10 h-screen w-full bg-green-900 text-white  ${isOpen ? 'left-0 opacity-100' : '-left-full opacity-0'} transition-all duration-300 space-y-5 overflow-y-auto`}>
                    <header className="flex justify-between items-center px-5 sm:px-10">
                        <img src="/assets/images/logo/logoWhite.png" />

                        <button onClick={() => setIsOpen()}><i className="fas fa-times"></i></button>
                    </header>
                    <ul className="w-full text-base cursor-pointer">


                  {/*Product Section*/}
                   <li className={`py-3  w-full space-y-2 px-5 sm:px-10 ${isProductOpen && 'bg-green-700'}`}>
                        <a className={`flex inline-block flex justify-between items-center ${isProductOpen && 'border-b border-gray-100 py-3'}`} href="#" onClick={() => setIsProductOpen()}>
                          <span>Products</span> 
                          <i className={`fas fa-chevron-${isProductOpen ? 'up' : 'down'}`}></i>
                        </a>


                    <ul className={`${isProductOpen ? 'block' : 'hidden'}`}>


                       <li className="py-3  w-full space-y-3">
                        <a className="flex inline-block flex justify-between items-center font-bold"  onClick={() => setIsProductOpen()}>
                          <span>Individuals</span> 
                        </a>
                       <p className="text-sm text-gray-200">Pick a laundry plan or order an instant pickup on your mobile.</p>
                      </li>


                      <li className="py-3  w-full space-y-3">
                        <a className="flex inline-block flex justify-between items-center font-bold"  onClick={() => setIsPartnerOpen()}>
                          <span>Partners</span> 

                           <i className={`fas fa-chevron-${isPartnerOpen ? 'up' : 'down'}`}></i>
                        </a>
                       <p className="text-sm text-gray-200">Grow your business, reach more customers on the go.</p>


                       <ul className={`${isPartnerOpen ? 'ml-3 block' : 'hidden'}`}>


                         <li className="py-3  w-full space-y-3">
                          <a className="flex inline-block flex justify-between items-center" >
                            <span>Merchant partners</span> 
                          </a>
                        </li>


                        <li className="py-3  w-full space-y-3">
                          <a className="flex inline-block flex justify-start space-x-3 items-center" >
                            <span>Delivery partners</span> 
                             <button className="rounded-full px-3 py-2 text-green-200 bg-green-300 text-sm">Coming Soon</button>
                          </a>
                        </li>

                      </ul>

                      </li>


                       <li className="py-3  w-full space-y-3">
                        <a className="flex inline-block flex justify-between items-center font-bold"  onClick={() => setIsBusinessOpen()}>
                          <span>Business</span> 

                          <i className={`fas fa-chevron-${isBusinessOpen ? 'up' : 'down'}`}></i>
                        </a>
                       <p className="text-sm text-gray-200">Improve productivity and staff retention. Find a business plan for your team.</p>


                      <ul className={`${isBusinessOpen ? 'ml-3 block' : 'hidden'}`}>


                         <li className="py-3  w-full space-y-3">
                          <a className="flex inline-block flex justify-between items-center text-green-800" >
                            <span>Business Basic</span> 
                          </a>
                        </li>


                        <li className="py-3  w-full space-y-3">
                          <a className="flex inline-block flex justify-start space-x-3 items-center  text-yellow-900" >
                            <span>Business Pro</span> 
                          </a>
                        </li>

                      </ul>

                      </li>
                     
                    </ul>

                    </li>


                  

                  {/*Pricing Section*/}

                  <li className={`py-3  w-full space-y-2 px-5 sm:px-10 ${isPricingOpen && 'bg-green-700'}`}>
                        <a className={`flex inline-block flex justify-between items-center ${isPricingOpen && 'border-b border-gray-100 py-3'}`} href="#" onClick={() => setIsPricingOpen()}>
                          <span>Pricing</span> 
                          <i className={`fas fa-chevron-${isPricingOpen ? 'up' : 'down'}`}></i>
                        </a>


                    <ul className={`${isPricingOpen ? 'block' : 'hidden'}`}>


                       <li className="py-3  w-full space-y-3">
                        <a className="flex inline-block flex justify-between items-center font-bold"  onClick={() => setIsPricingOpen()}>
                          <span>Laundry</span> 
                        </a>
                       <p className="text-sm text-gray-200">Resolve your laundry in minutes, find a plan that matches your pocket.</p>
                      </li>


                      <li className="py-3  w-full space-y-3">
                        <a className="flex inline-block flex justify-start space-x-3 items-center font-bold"  onClick={() => setIsPricingOpen()}>
                          <span>Groceries</span> 
                           <button className="rounded-full px-3 py-2 text-green-200 bg-green-300 text-sm">Coming Soon</button>
                        </a>
                       <p className="text-sm text-gray-200">Order your groceries, receive your deliveries in minutes. Zero commute, no delays.</p>
                      </li>

                    </ul>

                    </li>

                     
                    </ul>


                      <div className="space-y-3 px-5 sm:px-10">
                        <h2 className="font-bold">Download the app</h2>
                         <div className="flex  space-x-3 ">
                            <img alt="alt" src="/assets/images/app-store/google.png" />
                            <img alt="alt" src="/assets/images/app-store/apple.png" />
                        </div>
                      </div>
              </nav>
    )
}

