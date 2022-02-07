import React from 'react';

const page2 = (props) => {
  return (
    <>
          <div className="bg-green-01 relative py-12 overflow-hidden">
          
          <div className="container grid grid-cols-1 md:grid-cols-2  min-h-[80vh] py-12">
            
            <div className="space-y-10 flex flex-col justify-center">

            <h1 className="text-5xl font-black">Grow your laundry business.</h1>
            <p className="font-medium text-xl">Start accepting and fulfilling laundry request in minutes.</p>

            <div>
                <button className="btn">Get Early Access</button>
            </div>

            </div>

            <div className="hidden md:flex space-x-3 relative ">
               <img src="/assets/images/worker-3.png" className="relative z-50" />
            </div>

           
          
          </div>

          <img src="/assets/svgs/half-moon-right.svg" alt="Half Moon Right" className="hidden md:block absolute top-0 left-0 z-10" />
          <img src="/assets/svgs/half-moon-left.svg" alt="Half Moon Left" className="hidden md:block absolute -bottom-28 -right-28 z-10" />
          <img src="/assets/svgs/circle-tiny-blue.svg" alt="Tiny Blue Circle" className="hidden md:block absolute bottom-80 right-20 z-10" />
          <img src="/assets/svgs/circle-tiny-yellow.svg" alt="Tiny Yellow Circle" className="hidden md:block absolute bottom-60 right-5 z-10" />
          <img src="/assets/svgs/circle-md-blue.svg" alt="Medium Blue Circle" className="hidden md:block absolute -bottom-10 left-1/4 z-10" />
      </div>

    <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center space-y-10 order-2 md:px-10">
               <h1 className="text-5xl font-black">Access more customers</h1>

               <p className="font-medium text-xl">Fullfill laundry request everyday, reach more customers on your mobile. Spend less on marketing, focus on doing laundry.</p>

              
            <div>
                <button className="btn">Get Early Access</button>
            </div>
            </div>

            <div className="flex justify-center relative order-1">
              <img src="/assets/images/worker-4.png" className="z-40 relative" />
            </div>

            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-0 -left-10 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-5 -left-28 z-10" />
        </div>

    </section>



     <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center space-y-10 order-2 md:order-1 md:px-10">
               <h1 className="text-5xl font-black">Choose your open hours</h1>

               <p className="font-medium text-xl">Be in control. You are open for business only when you say you are.</p>

              <div>
                <button className="btn">Get Early Access</button>
            </div>
            </div>

            <div className="flex justify-center relative order-1 md:order-2">
              <img src="/assets/images/sales-person.png" className="z-40 relative" />
            </div>

            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-0 -right-10 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-5 -right-28 z-10" />
        </div>

    </section>



      <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center space-y-10 order-2 md:px-10">
               <h1 className="text-5xl font-black">Track earnings, fast payout.</h1>

               <p className="font-medium text-xl">Track your earnings and manage your orders. Receive payouts as early as the next business day.</p>

               <div>
                <button className="btn">Get Early Access</button>
            </div>
            </div>

            <div className="flex justify-center relative order-1">
              <img src="/assets/images/cash.png" className="z-40 relative" />
            </div>

            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-0 -left-10 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-5 -left-28 z-10" />
        </div>

        <img src="/assets/svgs/circle-md-green.svg" alt="Medium Blue Circle" className="absolute bottom-0 right-10 z-10" />
    </section>




      <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center space-y-10 order-2 md:order-1 md:px-10">
               <h1 className="text-5xl font-black">Focus on cleaning, we deliver</h1>

               <p className="font-medium text-xl">Offer delivery option to your existing walk-in customers. </p>

              <div>
                <button className="btn">Get Early Access</button>
            </div>
            </div>

            <div className="flex justify-center relative order-1 md:order-2">
              <img src="/assets/images/basket.png" className="z-40 relative" />
            </div>

            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-0 -right-10 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-5 -right-28 z-10" />
        </div>

    </section>


    <section className="py-12 relative pb-[200px] md:pb-[300px]">

        <img src="/assets/svgs/rectangle.svg" alt="dotted square 1" className="absolute top-0 left-0 z-10" />

        <img src="/assets/svgs/rectangle.svg" alt="dotted square 1" className="absolute bottom-0 right-0 z-10" />

        <div className="rounded-3xl shadow-2xl bg-white py-[100px] md:mx-12 space-y-12 my-12 relative z-50 px-5">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5  md:px-12 md:mx-12 ">
              <div className="space-y-5 md:col-span-2 md:order-1 order-2">
                <h2 className="text-4xl font-black text-green-400">Get started in minutes</h2>
                <p className="font-semibold text-lg">A step by step process on how it works.</p>
                
                <div className="py-10">
                  <div className="py-1 px-5 border-l-2 space-y-3 text-yellow-900 border-yellow-900">
                    <h3 className="font-semibold  text-2xl">Get the app</h3>
                    <p className="text-lg">Download the app on google playstore or App store for free.</p>
                  </div>
                  <div className="py-5 px-5 border-l-2 space-y-3 text-gray-100">
                    <h3 className="font-semibold  text-2xl">Add your details</h3>
                    <p className="text-lg">Create an account by adding your personal information, business details and settlement account.</p>
                  </div>
                  <div className="py-5 px-5 border-l-2 space-y-3 text-gray-100">
                    <h3 className="font-semibold  text-2xl">Go online</h3>
                    <p className="text-lg">Set up your open days and hours, type of laundry services you offer and switch your mode to online.</p>
                  </div>
                  <div className="py-5 px-5 border-l-2 space-y-3 text-gray-100">
                    <h3 className="font-semibold  text-2xl">Accept orders</h3>
                    <p className="text-lg">Accept your first set of orders, view details and pricing, fulfill and grow your business</p>
                  </div>
                </div>
                <div>
                   <button className="btn">Get Early Access</button>
                </div>
              </div>
              <div className="space-y-7 md:flex flex-col items-center md:col-span-1 md:order-2 order-1 hidden">
                  <img src="/assets/images/iPhoneX.png" className="z-40 relative" />
              </div>
            </div>


        </div>

    </section>




     
    </>
  )
}

export default page2;