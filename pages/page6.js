import {useState} from 'react';
import Faq from "/src/components/Faq";


const page2 = (props) => {
  return (
    <>
          <div className="relative">
          
          <div className="container grid grid-cols-1 min-h-[70vh] py-12 ">
            
            <div className="space-y-10 flex flex-col justify-center text-center sm:text-left items-center sm:items-start relative z-30">

            <h1 className="text-2xl font-semibold relative  z-30 text-yellow-900">FAQs</h1>
            <h1 className="text-4xl font-black relative  z-30">Got questions? we have answers</h1>

            <div>
                <button className="btn">Ask a question</button>
            </div>

            </div>        
          
          </div>


          <div className="rounded-full w-40 h-40 opacity-30 bg-green-200 absolute top-0 -left-20"></div>
          <div className="rounded-full w-20 h-20 opacity-5 bg-green-100 absolute top-20 left-24"></div>


          <div className="rounded-full w-40 h-40 opacity-5 bg-green-100 absolute -bottom-20 right-10"></div>
          <div className="rounded-full w-20 h-20 opacity-20 bg-yellow-900 absolute bottom-28 right-10"></div>
          

      </div>

   

     <section className="py-12 relative ">
        <div className="container border-t py-12">
            <div className="space-y-12">
               <h1 className="text-3xl font-bold text-center">Frequently asked questions</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">

                 
                 <div className="space-y-3">
                   <h3 className="font-semibold text-xl">Do you pick up and deliver?</h3>
                   <p>Yes, we do. Our pickup and delivery rates differ depending on your location. For Yaba, Ikeja and Island, deliveryrates are 500, 1000 & 1500 naira respectively. <br /> Subscribers need not worry about this cost as it is already included and discounted in your monthly subscription.</p>
                 </div>


                 <div className="space-y-3">
                   <h3 className="font-semibold text-xl">Do What happens when I have more than 30 items?</h3>
                   <p>If you have more than 30 or 60 items at the end of the month as a subscriber, the extra items would be calculated and an invoice would be sent to cover the extra cost or we deduct the extra item on your next wash, depending on your preference.
                   </p>
                 </div>


                 <div className="space-y-3">
                   <h3 className="font-semibold text-xl">Can I subscribe to the wash only plans and have some clothing items ironed?</h3>
                   <p>Yes you can, but note you would be charged #200 per item instead of #150 charges on our wash and iron plans. <br /> 2 pickups and deliveries per month.</p>
                 </div>


                 <div className="space-y-3">
                   <h3 className="font-semibold text-xl">How long would it take for my items to be returned?</h3>
                   <p>Our service is within 48 hours excluding Sundays, except for ironing/dry cleaning and special stains which may take up to 72 hours.</p>
                 </div>


                 <div className="space-y-3">
                   <h3 className="font-semibold text-xl">Can I add towels and bedsheets to my clothes to make a bag of wash?</h3>
                   <p>Yes you can, please count a bedsheet as 5 items and a towel as 3 items while doing so.</p>
                 </div>



                 <div className="space-y-3">
                   <h3 className="font-semibold text-xl">How do I make payment?</h3>
                   <p>Subscription customers are auto-charged monthly depending on the chosen plan and regular wash customers receive their invoice alongside their order descriptions at every wash. 
                   </p>
                 </div>

              </div>


              <div className="flex lg:justify-center text-2xl text-green-100 font-semibold space-x-3">
                 <a href="#">See more</a> <img src="/assets/svgs/arrow-to.svg" alt="Arrow right" />
              </div>

            </div>

            
        </div>

    </section>




     
    </>
  )
}

export default page2;