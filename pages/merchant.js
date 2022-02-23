import {useState,useEffect} from "react";
import Faq from "/src/components/Faq2";
import AppStore from "/src/components/AppStore";
import Aos from "aos";


const Merchant = (props) => {

   const [selected,setSelected] = useState(0);

   useEffect(() => {
    Aos.init({duration: 2000});
  },[])


   useEffect(() => {
    
    const autoSelect = setInterval(() => {

      selected > 3 ? setSelected(0) :  setSelected(selected);

      ++selected;

    },2000);


    return () => clearInterval(autoSelect);

  })


  return (
    <>
          <div className="bg-green-01 relative py-12 overflow-hidden">
          
          <div className="container grid grid-cols-1 lg:grid-cols-2  min-h-[80vh] py-12 gap-y-16 gap-10">
            
            <div className="space-y-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

            <h1 className="text-5xl font-black">Grow your laundry business.</h1>
            <p className="font-medium text-xl">Start accepting and fulfilling laundry request in minutes.</p>

            <div>
                <button className="btn">Get Early Access</button>
            </div>

            </div>

            <div className="flex justify-center space-x-3 relative ">
               <img alt="alt" src="/assets/images/worker-3.png" className="relative z-50" />

              <img src="/assets/svgs/circle-tiny-blue.svg" alt="Tiny Blue Circle" className="hidden sm:block absolute -top-20  right-20 lg:top-20 lg:-right-5 z-10" />
              <img src="/assets/svgs/circle-tiny-yellow.svg" alt="Tiny Yellow Circle" className="hidden sm:block absolute -top-10  right-16 lg:top-40 lg:-right-16 z-10" />
            </div>

           
          
          </div>

          <img src="/assets/svgs/half-moon-right.svg" alt="Half Moon Right" className="hidden sm:block absolute top-0 left-0 z-10" />
          <img src="/assets/svgs/half-moon-left.svg" alt="Half Moon Left" className="hidden sm:block absolute -bottom-28 -right-28 z-10" />

  
          <img src="/assets/svgs/circle-md-blue.svg" alt="Medium Blue Circle" className="hidden sm:block absolute -bottom-10 left-1/4 z-10" />
      </div>

    <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative py-12">

            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1 lg:order-2 sm:px-10">
               <h1 className="text-5xl font-black">Access more customers</h1>

               <p className="font-medium text-xl">Fullfill laundry request everyday, reach more customers on your mobile. Spend less on marketing, focus on doing laundry.</p>

              
            <div>
                <button className="btn">Get Early Access</button>
            </div>
            </div>

            <div className="flex justify-center relative order-2 lg:order-1">
              <img alt="alt" src="/assets/images/worker-4.png" className="z-40 relative" />

               <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-10 -left-10 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-5 -left-28 z-10" />
            </div>

           
        </div>

    </section>



     <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-10 relative py-12">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1  sm:px-10">
               <h1 className="text-5xl font-black">Choose your open hours</h1>

               <p className="font-medium text-xl">Be in control. You are open for business only when you say you are.</p>

              <div>
                <button className="btn">Get Early Access</button>
            </div>
            </div>

            <div className="flex justify-center relative order-2">
              <img alt="alt" src="/assets/images/sales-person.png" className="z-40 relative" />

                <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-10 -right-10 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-5 -right-28 z-10" />
            </div>

           
        </div>

    </section>



      <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1 lg:order-2 sm:px-10">
               <h1 className="text-5xl font-black">Track earnings, fast payout.</h1>

               <p className="font-medium text-xl">Track your earnings and manage your orders. Receive payouts as early as the next business day.</p>

               <div>
                <button className="btn">Get Early Access</button>
            </div>
            </div>

            <div className="flex justify-center relative order-2 lg:order-1">
              <img alt="alt" src="/assets/images/cash.png" className="z-40 relative" />

               <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-10 -left-10 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-5 -left-28 z-10" />
            </div>

        </div>

        <img src="/assets/svgs/circle-md-green.svg" alt="Medium Blue Circle" className="absolute bottom-0 right-10 z-10" />
    </section>




      <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1 sm:px-10">
               <h1 className="text-5xl font-black">Focus on cleaning, we deliver</h1>

               <p className="font-medium text-xl">Offer delivery option to your existing walk-in customers. </p>

              <div>
                <button className="btn">Get Early Access</button>
            </div>
            </div>

            <div className="flex justify-center relative order-2">
              <img alt="alt" src="/assets/images/basket.png" className="z-40 relative" />

               <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-10 -right-10 z-10" />
            <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-5 -right-28 z-10" />
            </div>
        </div>

    </section>


    <section className="py-12 relative pb-[200px] sm:pb-[300px]">

        <img src="/assets/svgs/rectangle.svg" alt="dotted square 1" className="absolute top-0 left-0 z-10"  data-aos="zoom-in-up" />

        <img src="/assets/svgs/rectangle.svg" alt="dotted square 1" className="absolute bottom-0 right-0 z-10" data-aos="zoom-in-up"  />

        <div className="rounded-3xl shadow-2xl bg-white py-[100px] sm:mx-6 lg:mx-12 space-y-12 my-12 relative z-50 px-5">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  px-5 lg:px-12 sm:mx-6 lg:mx-12 ">
              <div className="space-y-5 lg:col-span-2 lg:order-1 order-2">

                <h2 className="text-4xl font-black text-green-400 text-center lg:text-left">Get started in minutes</h2>
                <p className="font-semibold text-lg text-center lg:text-left">A step by step process on how it works.</p>
                
                <div className="py-10">

                {[
                {title: "Get the app",description:"Download the app on google playstore or App store for free."},
                {title: "Add your details",description:"Create an account by adding your personal information, business details and settlement account."},
                {title: "Go online",description:"Set up your open days and hours, type of laundry services you offer and switch your mode to online."},
                {title: "Accept orders",description:"Accept your first set of orders, view details and pricing, fulfill and grow your business"},
                ].map((item,index) => 
                <div key={index} className={`transition-all duration-[2000ms] py-4 px-5 border-l-2 space-y-3 ${selected === index ? 'text-yellow-900 border-yellow-900' : 'text-gray-100'}`}>
                      <h3 className="font-semibold  text-2xl">{item.title}</h3>
                      <p className="text-lg">{item.description}</p>
                  </div>
                  )}
                </div>
                <div>
                   <button className="btn">Get Early Access</button>
                </div>
              </div>
              <div className="space-y-7 sm:flex flex-col items-center sm:col-span-1 lg:order-2 order-1 hidden">
                  <img alt="alt" src="/assets/images/mockup/iPhoneX.png" className="z-40 relative" />
              </div>
            </div>

        </div>

    </section>
    </>
  )
}

export default Merchant;