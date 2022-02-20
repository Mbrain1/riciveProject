import Faq from "/src/components/Faq2";
import AppStore from "/src/components/AppStore";

const page2 = (props) => {
  return (
    <>
        <div className="py-12 relative">
          
           <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] gap-10 z-20 relative">
            
            <div className="order-1 space-y-10 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">

              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl font-black flex flex-wrap items-center space-x-3 justify-center lg:justify-start"><span>Automate</span> <span>your</span> 
                <span className="flex">
                  <span className="text-green-200 text_1">laundry</span>
                  <span className="text-green-200 text_2">groceries</span>
                  <span className="text-green-200 text_3">chores</span>
                </span></h1>
                 <p className="text-lg font-medium">Cancel laundry day forever, resolve your laundry in minutes, on your mobile.</p>
              </div>

                 <AppStore type="sm" />


              <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Pricing calculator &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>

            </div>


             <div className="flex justify-center order-2  relative ">
              <img src="/assets/images/joyce.png" />


              <div className="absolute -bottom-20 p-10 text-sm mx-auto rounded-3xl space-y-5 bg-white w-11/12 sm:w-2/3 lg:w-3/4 inset-x-auto">
                  <img src="/assets/svgs/quote.svg" className="relative -left-2" />
                  <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra,</p>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Subomi Falogun</h3>
                    <div className="font-medium">Creative design director</div>
                  </div>
              </div>

            </div>



          </div>

          <div className="absolute -bottom-96 lg:-bottom-60 z-10">
          <img src="/assets/images/background.png"  />
          <div className="bg-green-900 py-96 lg:py-14"></div>
          </div>
      </div>




     <section className="py-28 relative top-28">

          
           <div className="ml-12 lg:ml-20 ml-auto shadow-2xl rounded-3xl px-5 py-28 lg:p-28 grid grid-cols-1 lg:grid-cols-2  gap-10 z-20 relative bg-white text-center lg:text-left">
            
            <div className="order-1 flex flex-col relative z-30 ">

              <div className="space-y-10">
                <h1 className="text-4xl lg:text-5xl font-black">No chore is worth your time</h1>
                 <p className="text-lg font-medium">
                 Save 10+ hours, take control of your weekends. Let us worry about your chores, we pick up and deliver to your doorstep in 48 hours.
                 </p>
              </div>


            </div>


             <div className="flex justify-center  order-2 relative ">
              <img src="/assets/images/basket2.png" className="relative z-30" />
              <img src="/assets/svgs/green-square.svg" className="absolute -bottom-10 -right-5 sm:right-0 lg:-right-10 z-10" />
            </div>



          </div>

      </section>


    <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative">

            <div className="flex flex-col justify-center space-y-10  order-1 lg:order-2">
               <h1 className="text-4xl lg:text-5xl font-black">Individuals</h1>

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

            <div className="flex justify-center  order-2 lg:order-1 relative">
              <img src="/assets/images/mockup/PhoneMockup3.png" className="z-40 relative" />


            <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 right-0  lg:hidden opacity-90"></div>

            <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 right-0  lg:hidden opacity-90"></div>

             <img src="/assets/svgs/big-green-circle.svg" className="absolute top-0 -left-50 z-10" />

            </div>

             <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 right-0  hidden lg:block opacity-90"></div>

            <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 right-0  hidden lg:block opacity-90"></div>



        </div>
         

    </section>





    <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10  order-1 lg:order-2">
               <h1 className="text-4xl lg:text-5xl font-black">Merchants</h1>

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

            <div className="flex justify-center justify-center  order-2 lg:order-1 relative">
              <img src="/assets/images/mockup/PhoneMockup4.png" className="z-40 relative" />


              <img src="/assets/svgs/big-grey-circle.svg" className="absolute top-0 -left-50 lg:-right-10 z-10" />

               <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 right-0 lg:hidden  opacity-90 z-20"></div>

              <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 right-0  lg:hidden opacity-90 z-20"></div>

            </div>


            <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 left-0 hidden lg:block  opacity-90 z-20"></div>

              <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 left-0  hidden lg:block opacity-90 z-20"></div>


           

        </div>
              

    </section>




        <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10  order-1 lg:order-2">
               <h1 className="text-4xl lg:text-5xl font-black">For business</h1>

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

            <div className="flex justify-center justify-center  order-2 lg:order-1 relative">
              <img src="/assets/images/mockup/iPhoneX2.png" className="z-40 relative" />

              <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 right-0 lg:hidden  opacity-90"></div>

               <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 right-0  lg:hidden opacity-90"></div>

                <img src="/assets/svgs/big-green-circle2.svg" className="absolute top-0 -left-50 z-10" />

            </div>


             <div className="rounded-full bg-green-800 absolute w-20 h-20 -bottom-12 right-0 hidden lg:block  opacity-90"></div>

               <div className="rounded-full bg-yellow-900 absolute w-20 h-20 top-12 right-0  hidden lg:block opacity-90"></div>


            

        </div>
          

    </section>






    <section className="py-28 relative bg-gray-400">
        <div className="container">
           <div className="space-y-12 sm:w-5/6 lg:w-3/4 sm:mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-black text-center">Trusted by smart people working at amazing companies</h2>

                  <div className="space-y-2 space-x-5 sm:space-x-10 flex flex-wrap justify-center items-center ">
                      {["Paystacklogo.png","cowrywiselogo.png","Kpmglogo.png","TotalLogo.png","Buycoinslogo.png","Monologo.png","EvolveCreditLogo.png"].map((item, index) => (<img src={`/assets/images/logo/${item}`} className="inline-block w-1/4" key={index} />))}
                  </div>

           </div>
        </div>
    </section>



    <Faq />

      <div className="bg-green-01 pt-12 lg:py-28 overflow-hidden">
          
          <div className="container grid grid-cols-1 lg:grid-cols-2">
            
            <div className="order-1 space-y-10 flex flex-col justify-end items-start sm:items-center lg:items-start  text-left sm:text-center lg:text-left">

              <div className="space-y-5">
                <h1 className="text-lg sm:text-5xl font-bold sm:font-black text-green-900">Download the app</h1>
                 <p className="sm:text-lg">Download the app to get started automating your laundry and living a stress free life.</p>
              </div>

              <div className="space-y-5">

              <h3 className="text-yellow-900 text-lg">Get the App</h3>
               <AppStore type="sm" />

              </div>

            </div>


             <div className="flex justify-center items-end order-2  relative">
              <img src="/assets/images/mockup/PhoneMockup2.png" className="z-40 relative top-28 lg:absolute lg:-top-60" />
            </div>



          </div>

      </div>


    </>
  )
}

export default page2;
