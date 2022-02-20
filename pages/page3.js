import React from 'react';


const page2 = (props) => {
  return (
    <>
          <div className="bg-green-01 relative py-12">
          
          <div className="container grid grid-cols-1 lg:grid-cols-2  min-h-[80vh] py-12 gap-y-16 gap-10">
            
            <div className="space-y-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

            <h1 className="text-5xl font-black">Ricive for <span className="text-green-100">Business</span></h1>
            <p className="font-medium text-xl">A work benefit for great teams. Care for your team even when work ends, save them hours on weekends.</p>

            <div>
                <button className="btn">Get the App</button>
            </div>

            </div>

            <div className="flex justify-center relative ">
               <img src="/assets/images/group-workers-1.png" className="relative z-50" />

                <img src="/assets/svgs/dotted-square.svg" alt="dotted square 1" className="hidden sm:block absolute -top-10 -right-16 z-10" />
            </div>

           
          
          </div>

         
      </div>

    <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1 lg:order-2 sm:px-10">

               <h1 className="text-5xl font-black">Save your staff 10+ hours weekly</h1>

               <p className="font-medium text-xl">Any extra time to rest, binge some Netflix or hang out during the weekend = a happier face on Mondays.</p>

               <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Learn more &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>
            </div>

            <div className="flex justify-center relative order-2 lg:order-1">
              <img src="/assets/images/worker-1.png" className="z-40 relative" />

                 <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-10 -left-10 z-10" />
                 <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-5 -left-28 z-10" />
            </div>

        </div>


        <img src="/assets/svgs/Circle.svg" alt="circle 1" className="absolute -bottom-10 -left-20 z-10" />

    </section>



     <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-2 sm:order-1 sm:px-10">
               <h1 className="text-5xl font-black">Improve team productivity</h1>

               <p className="font-medium text-xl">Every hour you save per staff, contributes to one less burnout situation  (you can add emoji to make fun and light)</p>

               <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Learn more &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>
            </div>

            <div className="flex justify-center relative order-1 sm:order-2">
              <img src="/assets/images/group-workers-1.png" className="z-40 relative" />

              <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-10 -right-10 z-10" />
                 <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-5 -right-28 z-10" />
            </div>

        </div>

    </section>



      <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative py-12">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1 lg:order-2 sm:px-10">
               <h1 className="text-5xl font-black">Cancel anytime</h1>

               <p className="font-medium text-xl">Add and remove team mates on the your dashboard. Deactivate your business plan anytime.</p>

               <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Learn more &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>
            </div>

            <div className="flex justify-center relative order-2 lg:order-1">
              <img src="/assets/images/worker-2.png" className="z-40 relative" />

               <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-10 -right-10 z-10" />
                 <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute -top-5 -right-28 z-10" />

            </div>
        </div>

        <img src="/assets/svgs/Circle.svg" alt="circle 1" className="absolute -bottom-10 -right-10 z-10" />
    </section>



    <section className="py-12 relative pb-[200px] sm:pb-[300px]">

        <img src="/assets/svgs/rectangle.svg" alt="dotted square 1" className="absolute top-0 left-0 z-10" />

        <img src="/assets/svgs/rectangle.svg" alt="dotted square 1" className="absolute bottom-0 right-0 z-10" />

        <div className="rounded-3xl shadow-2xl bg-white py-[100px] sm:mx-12 space-y-12 my-12 relative z-50 px-5">
            <div className="flex flex-col justify-center items-center space-y-5 order-2 sm:px-10">
               <h1 className="text-5xl font-black">Business plans</h1>

               <p className="font-medium text-xl text-center sm:w-3/4">
                 A work benefit for great teams. Care for your team even when work week ends, save them hours on weekends.
               </p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-[100px] sm:px-12 sm:mx-12 ">
              <div className="shadow-xl space-y-7 rounded-lg px-7 py-12 mt-12">
                <h2 className="text-2xl font-bold text-green-400">Business Basic</h2>
                <p>Get a customised discounted plan for your team at no cost to business. Let your team get laundry on a discount.</p>
                 <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Learn more &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>
              </div>
              <div className="shadow-xl space-y-7 rounded-lg px-7 py-12 mt-12">
                <h2 className="text-2xl font-bold text-yellow-900">Business Pro</h2>
                <p>Delight your team, fully cover their laundry plans. Pay a discounted price for being a thoughtful manager.</p>
                 <div>
                <a className="text-green-100 flex items-center font-semibold text-xl">Learn more &nbsp; <img src="/assets/svgs/arrow-to.svg" /></a>
              </div>
              </div>
            </div>


        </div>

    </section>




     
    </>
  )
}

export default page2;