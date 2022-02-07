import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y,EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Testimonial = (props) => {
  return (
    <>
        

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
    </>
  )
}

export default Testimonial;