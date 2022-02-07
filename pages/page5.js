import {useState} from 'react';
import Faq from "/src/components/Faq";


const page2 = (props) => {
  return (
    <>
          <div className="bg-green-900 relative  overflow-hidden">
          
          <div className="container grid grid-cols-1 text-center text-white min-h-[70vh] py-12">
            
            <div className="space-y-10 flex flex-col justify-center relative z-30">

            <h1 className="text-5xl font-black relative  z-30">Choose zero laundry days</h1>
            <p className="text-lg relative z-30">Try out our laundry pricing calculator and schedule a pickup today</p>

            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-0 right-5 md:right-28 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-16 right-10 md:right-40 z-10" />
            </div>        
          
          </div>


          <div className="rounded-full w-40 h-40 opacity-5 bg-green-300 absolute top-0 left-0"></div>
          <div className="rounded-full w-20 h-20 opacity-5 bg-green-300 absolute top-44 left-24"></div>


          <div className="rounded-full w-40 h-40 opacity-5 bg-green-300 absolute -bottom-10 right-0"></div>
          <div className="rounded-full w-20 h-20 opacity-5 bg-green-300 absolute bottom-28 -right-10"></div>
          

          <nav className="flex justify-center items-center text-white text-xl overflow-x-auto md:overflow-hidden">
             <ul className="flex space-x-7">
                <li><a href="#" className="text-green-100 border-b-8 rouded  border-green-100 py-4 px-5 inline-block font-medium">Wash & Fold</a></li>
                <li><a href="#" className="py-4 px-5 inline-block font-medium">Wash & Iron</a></li>
                <li><a href="#" className="py-4 px-5 inline-block font-medium">Ironing only</a></li>
                <li><a href="#" className="py-4 px-5 inline-block font-medium">Drycleaning</a></li>
             </ul>
          </nav>
      </div>

   

     <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 grid-cols-1 gap-5 relative py-12">
            <div className="space-y-10 md:px-10">
               <h1 className="text-3xl font-bold">How much would it cost to...</h1>

              <form className="grid grid-cols-1 gap-5">
                  <div className="form-group flex flex-col space-y-2 text-gray-100 text-lg relative">
                      <label>Select clothing item</label>
                      <select className="rounded w-100 border py-3 px-5 border-gray-200  focus:outline-0 appearance-none">
                        <option value="shirt">Shirt</option>
                        <option value="throwser">Throwser</option>
                      </select>

                       <i className="fas fa-chevron-down z-40 absolute right-5 top-[50px]"></i>
                  </div>

                  <div className="form-group flex flex-col space-y-2 text-gray-100 text-lg">
                      <label>Number of items</label>
                      <input type="text" placeholder="" className="rounded w-100 border py-3 px-5 border-gray-200  focus:outline-0" defaultValue="3" />
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
            
        </div>

    </section>



    <section className="py-12 relative">

        <div className="container">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Download the app</h2>

                  <div className="flex space-x-3 ">
                    <img src="/assets/images/google.png" />
                    <img src="/assets/images/apple.png" />
                  </div>
                </div>
        </div>


    </section>



     <Faq />


     
    </>
  )
}

export default page2;