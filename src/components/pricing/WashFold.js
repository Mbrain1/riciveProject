const WashFold = (props) => {


  return (
    <>
        <div className="space-y-10 md:px-10">
               <h1 className="text-3xl font-bold">How much would it cost to...</h1>

              <form className="grid grid-cols-1 gap-5">
                  <div className="form-group flex flex-col space-y-2 text-gray-100 text-lg relative">
                      <label>Select clothing item</label>
                      <select className="bg-white rounded w-100 border py-3 px-5 border-gray-200  focus:outline-0 appearance-none">
                        <option value="shirt">Shirt</option>
                        <option value="throwser">Throwser</option>
                      </select>

                       <i className="fas fa-chevron-down z-40 absolute right-5 top-[50px]"></i>
                  </div>

                  <div className="form-group flex flex-col space-y-2 text-gray-100 text-lg">
                      <label>Number of items</label>
                      <input type="text" placeholder="" className="bg-white rounded w-100 border py-3 px-5 border-gray-200  focus:outline-0" defaultValue="3" />
                  </div>

              </form>


              <p className="font-medium text-sm"><span>Pricing applies to wearable clothing items only. Please refer to <span className="text-green-200">price list</span> for non-wearable items.</span></p>
            </div>

            <div className="flex justify-center relative shadow-2xl rounded p-10 flex flex-col items-center space-y-12">
            
                <div className="text-gray-100 text-lg">Total price</div>

                <div className="text-3xl text-yellow-900 font-bold border-b px-8 pb-3">NGN 1 ,000</div>

                <p className="text-gray-100 text-lg">Great pricing right? make the switch.</p>

               <div>
                <button className="btn">Schedule a Pickup</button>
              </div>

              <p><span>Interested in a laundry plan instead?</span>  <a href='#' className="text-green-100 font-medium">Download the app</a></p>

              </div>
    </>
  )
}

export default WashFold;