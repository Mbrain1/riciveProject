import React from 'react';
import Testimonial from "/src/components/Testimonial";


const page2 = (props) => {
  return (
    <>
        <div className="py-12 relative">
          
           <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[80vh] gap-10 z-20 relative">
            
            <div className="order-1 space-y-10 flex flex-col justify-center">

              <div className="space-y-10">
                <h1 className="text-5xl font-black">Automate your <span className="text-green-200">laundry</span></h1>
                 <p className="text-lg font-medium">Cancel laundry day forever, resolve your laundry in minutes, on your mobile.</p>
              </div>

                <div className="flex space-x-3">
                   <img src="/assets/images/google.png" />
                   <img src="/assets/images/apple.png" />
                </div>


              <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Pricing calculator &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>

            </div>


             <div className="flex justify-center md:justify-end order-2  relative hidden md:block">
              <img src="/assets/images/joyce.png" />
            </div>



          </div>

          <div className="absolute -bottom-60 z-10">
          <img src="/assets/images/background.png"  />
          <div className="bg-green-900 py-14"></div>
          </div>
      </div>




     <section className="py-28 relative">

          
           <div className="md:ml-20 ml-auto shadow-lg rounded-3xl p-5 md:p-28 grid grid-cols-1 md:grid-cols-2 min-h-[80vh] gap-10 z-20 relative bg-white">
            
            <div className="order-1  flex flex-col ">

              <div className="space-y-10">
                <h1 className="text-5xl font-black">No chore is worth your time</h1>
                 <p className="text-lg font-medium">
                 Save 10+ hours, take control of your weekends. Let us worry about your chores, we pick up and deliver to your doorstep in 48 hours.
                 </p>
              </div>


            </div>


             <div className="flex justify-center md:justify-end order-2  relative hidden md:block">
              <img src="/assets/images/basket2.png" />
              {/*<img src="/assets/svgs/rectangle.svg" className="bottom-0 right-0" />*/}
            </div>



          </div>

      </section>


    <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10  order-2">
               <h1 className="text-4xl font-black">Individuals</h1>

               <div className="space-y-5">

               {["Order instant pickup or subscribe to a monthly plan","Outsource your laundry, relax on weekends","Save on your laundry bills, every time"].map((item, index) => (
                <div key={index} className="font-medium flex items-center space-x-3 text-xl">
                  <img src="/assets/svgs/check.svg"  /> 
                  <span>{item}</span>
                </div>)) 
              }

               </div>

               <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Explore &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>
            </div>

            <div className="flex justify-start  order-1">
              <img src="/assets/images/PhoneMockup3.png" className="z-40 relative" />

            </div>


            <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 right-0  opacity-90"></div>

            <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 right-0  opacity-90"></div>

        </div>
              <img src="/assets/svgs/big-green-circle.svg" className="absolute top-0 -left-10 z-10" />

    </section>





    <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10  md:order-1 order-2">
               <h1 className="text-4xl font-black">Merchants</h1>

               <div className="space-y-5">

               {["Grow your business, earn more.","Offer delivery options to walk-in customers."].map((item, index) => (
                <div className="font-medium flex items-center space-x-3 text-xl" key={index}>
                  <img src="/assets/svgs/check.svg"  /> 
                  <span>{item}</span>
                </div>)) 
              }

               </div>

               <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Explore &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end  md:order-2 order-1">
              <img src="/assets/images/PhoneMockup4.png" className="z-40 relative" />

            </div>


            <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 left-0  opacity-90"></div>

            <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 left-0  opacity-90"></div>

        </div>
              <img src="/assets/svgs/big-grey-circle.svg" className="absolute top-0 -right-10 z-10" />

    </section>




        <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10  order-2">
               <h1 className="text-4xl font-black">For business</h1>

               <div className="space-y-5">

               {["Improve your teams productivity.","Show your staff you care, beyond the work week."].map((item, index) => (
                <div className="font-medium flex items-center space-x-3 text-xl" key={index}>
                  <img src="/assets/svgs/check.svg"  /> 
                  <span>{item}</span>
                </div>)) 
              }

               </div>

               <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Explore &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>
            </div>

            <div className="flex justify-center md:justify-start  order-1">
              <img src="/assets/images/iPhoneX2.png" className="z-40 relative" />

            </div>


            <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 right-0  opacity-90"></div>

            <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 right-0  opacity-90"></div>

        </div>
              <img src="/assets/svgs/big-green-circle.svg" className="absolute top-0 -left-10 z-10" />

    </section>






    <section className="py-28 relative bg-gray-400">
        <div className="container">
           <div className="space-y-12 md:w-3/4 md:mx-auto">
                  <h2 className="text-4xl font-black text-center">Trusted by smart people working at amazing companies</h2>

                  <div className="space-y-2 space-x-10 flex flex-wrap justify-center items-center ">
                      {["cowrywiselogo.png","Kpmglogo.png","TotalLogo.png","Buycoinslogo.png","Monologo.png","EvolveCreditLogo.png"].map((item, index) => (<img src={`/assets/images/${item}`}  key={index} />))}
                  </div>

           </div>
        </div>
    </section>



      <div className="bg-green-01 py-28 overflow-hidden">
          
          <div className="container grid grid-cols-1 md:grid-cols-2">
            
            <div className="order-1 space-y-10 flex flex-col justify-end">

              <div className="space-y-5">
                <h1 className="text-5xl font-black text-green-900">Download the app</h1>
                 <p className="text-lg">Download the app to get started automating your laundry and living a stress free life.</p>
              </div>

              <div className="space-y-5">

              <h3 className="text-yellow-900 text-lg">Get the App</h3>
              <div className="flex space-x-3">
                 <img src="/assets/images/google.png" />
                 <img src="/assets/images/apple.png" />
              </div>

              </div>

            </div>


             <div className="flex justify-center order-2  relative hidden md:block">
              <img src="/assets/images/PhoneMockup2.png" className="z-40 absolute -top-60" />
            </div>



          </div>

      </div>


    </>
  )
}

export default page2;
