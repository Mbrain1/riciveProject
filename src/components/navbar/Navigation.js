export const PCView  = ({setIsProductOpen,setIsPricingOpen,isProductOpen,setIsOpen}) => {
    return(
         <nav className="flex justify-between items-center container ">
            <img src="/assets/images/logo/logobig.png" />

            <ul className="space-x-5 text-xl hidden sm:flex">
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

            <div className="hidden sm:flex space-x-3">
                <img src="/assets/images/app-store/google.png" />
                <img src="/assets/images/app-store/apple.png" />
            </div>



             <button className="block sm:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200 group" onClick={() => setIsOpen()}>
                <div className="w-5 h-1 bg-black mb-1"></div>
                <div className="w-5 h-1 bg-black mb-1"></div>
                <div className="w-5 h-1 bg-black"></div>
             </button>

        </nav>
    )
}




export const MobileView  = ({setIsProductOpen,setIsPricingOpen,isProductOpen,setIsOpen,isOpen}) => {
    return(
            <nav className={`z-50 fixed top-0 py-10 h-screen w-8/12 bg-white border  ${isOpen ? 'left-0 opacity-100' : '-left-full opacity-0'} transition-all duration-300`}>
                    <ul className="flex flex-col items-center w-full text-base cursor-pointer">


                       <li className="hover:bg-gray-200 py-4 px-6 w-full text-left">
                        <a className="flex"  onClick={() => setIsProductOpen()}>
                          <span>Product</span> &nbsp;
                          <img src={`/assets/svgs/arrow-down.svg`} alt="ArrowDown"  />
                        </a>
                      </li>


                      <li className="hover:bg-gray-200 py-4 px-6 w-full text-left">
                        <a className="flex"  onClick={() => setIsPricingOpen()}>
                          <span>Pricing</span> &nbsp;
                          <img src={`/assets/svgs/arrow-down.svg`} alt="ArrowDown"  />
                        </a>
                      </li>
                     

                       <div className="flex  space-x-3 justify-center absolute bottom-10">
                          <img src="/assets/images/app-store/google.png" />
                          <img src="/assets/images/app-store/apple.png" />
                      </div>

                    </ul>
              </nav>
    )
}

