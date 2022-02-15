const ProductWrapper = ({isPartnerOpen,isBusinessOpen,setIsBusinessOpen,setIsPartnerOpen,isProductOpen}) => {
    return(
               <div className={`grid gap-10  absolute bg-white inset-x-[10px] md:inset-x-1/4 ${isPartnerOpen || isBusinessOpen ? 'md:w-3/4 grid-cols-2' : 'md:w-2/4 grid-cols-1'} top-20 z-50 px-7  ${isProductOpen ? 'z-50 opacity-100' : '-z-50 opacity-0'}`}>
                 <div className="space-y-10 py-7">
                     <div className="space-y-3">
                       <h3 className="font-semibold">Individuals</h3>
                       <p className="text-sm">Pick a laundry plan or order an instant pickup on your mobile.</p>
                     </div>

                    <div className="space-y-3">
                       <a className="font-semibold flex" href="#" onClick={() => setIsPartnerOpen()}>Partners &nbsp;&nbsp; <img src="/assets/svgs/arrow-right.svg" alt="Arrow Right"  /></a>
                       <p className="text-sm">Grow your business, reach more customers on the go.</p>
                    </div>

                    <div className="space-y-3">
                       <a className="font-semibold flex" href="#" onClick={() => setIsBusinessOpen()}>Business &nbsp;&nbsp; <img src="/assets/svgs/arrow-right.svg" alt="Arrow Right"  /></a>
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
    )
}


export default ProductWrapper;