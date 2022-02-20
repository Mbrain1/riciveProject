 const PricingWrapper = ({isPricingOpen}) => {
    return(
              <div className={`absolute bg-white inset-x-[10px] sm:inset-x-1/4  sm:w-2/4 top-20 z-50 p-7 space-y-10 transition-all duration-300 ${isPricingOpen ? 'z-[1000] opacity-100' : '-z-50 opacity-0'}`}>
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
            
    )
}


export default PricingWrapper;