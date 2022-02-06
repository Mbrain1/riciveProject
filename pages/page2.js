import React from 'react';
import ArrowDown from '/public/assets/svgs/arrow-down.svg';
import CurvedPath from '/public/assets/svgs/Path.svg';
import GooglePlayIcon from '/public/assets/images/google.png';
import ApplePlayIcon from '/public/assets/images/apple.png';
import LogoWhite from '/public/assets/images/logoWhite.png'
import IG from '/public/assets/svgs/instagram.svg';
import LI from '/public/assets/svgs/linkedIn.svg';
import FB from '/public/assets/svgs/facebook.svg';
import TW from '/public/assets/svgs/twitter.svg';
import Location from '/public/assets/svgs/Location.svg';
import Message from '/public/assets/svgs/message.svg';
import Mobile from '/public/assets/svgs/Mobile.svg';
import { Navigation, Pagination, Scrollbar, A11y,EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


const page2 = (props) => {
  return (
    <>
          <div className="bg-green-01  text-center">
          
          <div className="container flex flex-col justify-center items-center space-y-7 relative min-h-[80vh]">
            
            <h1 className="text-5xl font-black">Never run out of clean clothes</h1>
            <p className="font-semibold text-xl">Choose free time over stress. Select a laundry plan that suits <br /> your lifestyle and budget.</p>

            <div className="flex space-x-3">
               <img src="/assets/images/googleBig.png" />
               <img src="/assets/images/appleBig.png" />
            </div>

           <img src="/assets/svgs/Path-1.svg" alt="path 1" className="absolute md:bottom-[100px] bottom-[30px] left-[5%]" />
           <img src="/assets/svgs/times.svg" alt="path times" className="absolute md:top-[100px] md:right-[200px] top-10 right-10" />
           <img src="/assets/svgs/Path-4.svg" alt="path 4" className="absolute md:top-[70px] md:left-[100px] top-10 left-10" />
           <img src="/assets/svgs/Path-5.svg" alt="path 5" className="absolute top-[60px] left-[90px]" />
           <img src="/assets/svgs/Path-6.svg" alt="path 6" className="absolute top-[50px] left-2/4" />

          </div>

      </div>

    <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10 md:order-1 order-2">
               <h1 className="text-4xl font-black">Instant Pickup</h1>

               <p className="font-medium text-xl">In a rush? Get your laundry picked up in under 30 minutes. No delays or disruption to your day.</p>

               <div>
                <button className="btn">Get the App</button>
              </div>
            </div>

            <div className="flex justify-center relative md:order-2 order-1">
              <img src="/assets/images/UpComingorders.png" className="z-40 relative" />

              <img src="/assets/svgs/ellipse-1.svg" className="absolute top-[20%] z-10" />

            </div>


            <div className="rounded-full bg-yellow-900 absolute w-32 h-32 bottom-5 -left-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 -bottom-12  opacity-20"></div>
        </div>

         <div className="rounded flex bg-white absolute z-50 bottom-1/2 md:bottom-1/4 right-0 shadow-sm w-3/4 sm:w-1/2 md:w-3/12 space-x-5 p-3">
                <img src="/assets/svgs/motorcycle.svg" alt="path 6" className="" />
                <aside className="space-y-2">
                   <h1 className="font-bold">Your rider is on his way</h1>
                   <div className="text-sm">Dear customer, your rider  will arrive soon please be on stand-by.</div>
                </aside>
          </div>
    </section>



     <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10 order-2">
               <h1 className="text-4xl font-black">Laundry subscriptions</h1>

               <p className="font-medium text-xl">Save up to 20% when you subscribe one of <br />our laundry plans. Pick a plan, set your<br /> preferences and pay monthly.</p>

               <div>
                <button className="btn">Get the App</button>
              </div>
            </div>

            <div className="flex justify-center relative order-1">
              <img src="/assets/images/PhoneMockup.png" className="z-40 relative" />

              <img src="/assets/svgs/ellipse-2.svg" className="absolute top-[20%] z-10" />
            </div>


            <div className="rounded-full bg-yellow-900 absolute w-32 h-32 bottom-5 -right-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 -bottom-12  -right-20  opacity-20"></div>
        </div>

         <div className="rounded flex bg-white absolute z-50 bottom-2/4 left-0 shadow-sm w-3/4 sm:w-1/2 md:w-3/12 space-x-5 p-3">
                <img src="/assets/svgs/checked.svg" alt="Checked alt" className="" />
                <aside className="space-y-2">
                   <h1 className="font-bold">Payment successful</h1>
                   <div className="text-sm">Your subscription to Basic plan is successful.</div>
                </aside>
              </div>
    </section>


      <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10 md:order-1 order-2">
               <h1 className="text-4xl font-black">Real time tracking</h1>

               <p className="font-medium text-xl">
               Track your laundry order progress from pickup, through cleaning to delivery, get real-time updates and notifications.<br />
               Be sure of when to expect your delivery.</p>
               <div>
                <button className="btn">Get the App</button>
              </div>
            </div>

            <div className="flex justify-center relative md:order-2 order-1">
              <img src="/assets/images/realTimeTrackin.png" className="z-40 relative" />

              <img src="/assets/svgs/ellipse-3.svg" className="absolute top-[20%] z-10" />
            </div>


            <div className="rounded-full bg-yellow-900 absolute w-32 h-32 bottom-5 -left-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 -bottom-12  -left-20  opacity-20"></div>
        </div>

         <div className="rounded flex bg-white absolute z-50 bottom-2/4 right-0 shadow-sm w-3/4 sm:w-1/2 md:w-3/12 space-x-5 p-3">
                <img src="/assets/svgs/checked.svg" alt="Checked alt" className="" />
                <aside className="space-y-2">
                   <h1 className="font-bold">Laundry Pick up</h1>
                   <div className="text-sm">Your laundry pick up has been scheduled successfully.</div>
                </aside>
              </div>
    </section>



     <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center space-y-10 order-2">
               <h1 className="text-4xl font-black">In-app chat</h1>

               <p className="font-medium text-xl">Send request, additional preferences or share feedback to our support team in-app. Receive instant personalised responses and support every time. 
              </p>
               <div>
                <button className="btn">Get the App</button>
              </div>
            </div>

            <div className="flex justify-center relative order-1">
              <img src="/assets/images/Inappchat.png" className="z-40 relative" />

              <img src="/assets/svgs/ellipse-4.svg" className="absolute top-[20%] z-10" />
            </div>


           {/* <div className="rounded-full bg-yellow-900 absolute w-32 h-32 bottom-5 -left-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 -bottom-12  -left-20  opacity-20"></div>*/}
        </div>

         <div className="rounded flex bg-white absolute z-50 bottom-2/4 left-0 shadow-sm w-3/4 sm:w-1/2 md:w-3/12 space-x-5 p-3">
                <img src="/assets/svgs/message.svg" alt="message alt" className="" />
                <aside className="space-y-2">
                   <h1 className="font-bold">How can i help?</h1>
                   <div className="text-sm">Our support team are always on stand-by to get your needs sorted out. </div>
                </aside>
          </div>
    </section>



    <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="space-y-5 md:order-1 order-2">

              <button className="rounded-full px-5 py-2 text-green-200 bg-green-300">Coming Soon</button>
               <h1 className="text-4xl font-black">Community</h1>

               <p className="font-medium text-xl">
              Create or join team, add your friends and neighbours to pay less on every laundry order. More teammates, more discount. 
              </p> 
              </div>

          
            <div className="rounded-full bg-yellow-900 absolute w-32 h-32 -top-10 -right-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 top-28  right-0  opacity-20"></div>
        </div>
    </section>




     <section className="py-12 relative px-10">
         <img src="/assets/svgs/dotted.svg" alt="dotted alt" className="absolute top-0 left-0 z-10" />
         <img src="/assets/svgs/dotted.svg" alt="dotted alt" className="absolute bottom-0 right-0 z-10" />
        <div className="bg-gray-300 rounded-3xl py-12 space-y-20 relative z-50">

            <header className="text-center space-y-10">
              <h1 className="text-5xl font-black">Switch to Ricive - your clothes will thank you.</h1>
              <p className="font-medium text-xl">Join a community of Africans saving valuable time.</p>
            </header>


            <Swiper
        effect={"cards"}
        grabCursor={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCards,Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
            <div className="bg-white rounded-3xl text-center space-y-20 w-3/5 mx-auto p-4 px-12 mt-10 text-lg relative">
                
                <p className="mt-10 font-medium">“ I had a great and seamless experience using Ricive to satisfy my laundry needs. Saying goodbye to doing my laundry myself. “</p>

                <footer className="space-y-3">
                  <h3 className="font-semibold">Kuyekemi Ubi</h3>
                  <div>Software Engineer, Freelancer</div>
                </footer>

                <img src="/assets/images/testimonial/person1.png" className="rounded-full absolute -top-32 -left-16" />

            </div>

        </SwiperSlide>
        <SwiperSlide>
          
            <div className="bg-white rounded-3xl text-center space-y-20 w-3/5 mx-auto p-4 px-12 mt-10 text-lg relative">
                
                <p className="mt-10 font-medium">“ I had a great and seamless experience using Ricive to satisfy my laundry needs. Saying goodbye to doing my laundry myself. “</p>

                <footer className="space-y-3">
                  <h3 className="font-semibold">Kuyekemi Ubi</h3>
                  <div>Software Engineer, Freelancer</div>
                </footer>

                <img src="/assets/images/testimonial/person1.png" className="rounded-full absolute -top-32 -left-16" />

            </div>

        </SwiperSlide>
        <SwiperSlide>
          
            <div className="bg-white rounded-3xl text-center space-y-20 w-3/5 mx-auto p-4 px-12 mt-10 text-lg relative">
                
                <p className="mt-10 font-medium">“ I had a great and seamless experience using Ricive to satisfy my laundry needs. Saying goodbye to doing my laundry myself. “</p>

                <footer className="space-y-3">
                  <h3 className="font-semibold">Kuyekemi Ubi</h3>
                  <div>Software Engineer, Freelancer</div>
                </footer>

                <img src="/assets/images/testimonial/person1.png" className="rounded-full absolute -top-32 -left-16" />

            </div>
        </SwiperSlide>
      </Swiper>




        </div>
    </section>



     <section className="pt-12 relative">

     <img src="/assets/images/background.png" className="absolute bottom-0 h-fit" />

        <div className="container grid md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center order-2 md:order-1 space-y-10">
               <div className="space-y-3">
                <h1 className="text-5xl font-black text-green-900">Download the app</h1>
                <p className="text-xl">Get a free laundry bag on your first in-app order.</p>
               </div>


               
                <div className="space-y-3">
                  <h2 className="text-yellow-900">Get the App</h2>

                  <div className="flex space-x-3 ">
                    <img src="/assets/images/googleBig.png" />
                    <img src="/assets/images/appleBig.png" />
                  </div>
                </div>
            </div>

            <div className="flex justify-center items-end relative order-1 md:order-2">
              <img src="/assets/images/PhoneMockup2.png" className="z-40 relative top-62" />

            </div>

        </div>


    </section>





     <div className="bg-green-900 py-12">

    </div>
    </>
  )
}

export default page2;