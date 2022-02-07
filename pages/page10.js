import {useState} from 'react';
import Faq from "/src/components/Faq";


const page2 = (props) => {
  return (
    <>
          <div className="bg-green-01 relative  overflow-hidden">
          
          <div className="container grid grid-cols-1 text-center  min-h-[70vh] py-12">
            
            <div className="space-y-10 flex flex-col justify-center relative z-30">

            <h1 className="text-5xl font-black relative  z-30">Join us</h1>
            <p className="text-lg relative z-30 md:w-3/4 mx-auto">We are always looking for amazing talent to join our journey in saving tons of hours for African households & businesses.</p>

            </div>        
          
          </div>


          <div className="rounded-full w-20 h-20 bg-green-800 absolute top-28 -right-10 opacity-80"></div>

          <div className="rounded-full w-20 h-20 bg-white absolute top-28 -left-2 opacity-40"></div>

          <div className="rounded-full w-12 h-12 bg-green-800 absolute bottom-32 left-72 opacity-30"></div>
          

          <nav className="flex justify-center items-center text-xl overflow-x-auto md:overflow-hidden">
             <ul className="flex space-x-7">
                <li><a href="#" className=" py-4 px-5 inline-block font-medium opacity-50">Product</a></li>
                <li><a href="#" className="py-4 px-5 inline-block font-medium opacity-50">Software engineering</a></li>
                <li><a href="#" className="py-4 px-5 inline-block font-medium opacity-50">Marketing</a></li>
                <li><a href="#" className="py-4 px-5 inline-block font-medium opacity-50">Operations</a></li>
                <li><a href="#" className="py-4 px-5 inline-block font-medium text-green-100 border-b-8  border-green-100">View all</a></li>
             </ul>
          </nav>
      </div>

   

     <section className="py-12 relative">
        <div className="container grid grid-cols-1 gap-10 relative">

        <h1 className="text-2xl font-bold">Open Roles</h1>


        <div className="rounded border border-gray-200 px-12 py-9 space-y-5 text-lg">
          
            <h2 className="text-green-200">Design</h2>

            <div className="font-medium text-xl">UI/UX Designer</div>

            <div className="flex justify-between items-center">
              <div className="space-x-7 opacity-50 flex">
                <a href="#" className="flex items-cente"><img src="/assets/svgs/location.svg" /> &nbsp; Remote</a>
                <a href="#" className="flex items-cente"><img src="/assets/svgs/clock.svg" /> &nbsp; Full-time position</a>
              </div>

              <a href="#" className="text-green-100 flex space-x-3"><span>View job description</span>  <img src="/assets/svgs/arrow-right-up.svg" /></a>
            </div>
        </div>


         <div className="rounded border border-gray-200 px-12 py-9 space-y-5 text-lg">
          
            <h2 className="text-green-200">Software Engineering</h2>

            <div className="font-medium text-xl">Backend Developer</div>

            <div className="flex justify-between items-center">
              <div className="space-x-7 opacity-50 flex">
                <a href="#" className="flex items-cente"><img src="/assets/svgs/location.svg" /> &nbsp; Remote</a>
                <a href="#" className="flex items-cente"><img src="/assets/svgs/clock.svg" /> &nbsp; Contract</a>
              </div>

              <a href="#" className="text-green-100 flex space-x-3"><span>View job description</span>  <img src="/assets/svgs/arrow-right-up.svg" /></a>
            </div>
        </div>




         <div className="rounded border border-gray-200 px-12 py-9 space-y-5 text-lg">
          
            <h2 className="text-green-200">Marketing</h2>

            <div className="font-medium text-xl">Growth marketer</div>

            <div className="flex justify-between items-center">
              <div className="space-x-7 opacity-50 flex">
                <a href="#" className="flex items-cente"><img src="/assets/svgs/location.svg" /> &nbsp; Remote</a>
                <a href="#" className="flex items-cente"><img src="/assets/svgs/clock.svg" /> &nbsp; Full-time position</a>
              </div>

              <a href="#" className="text-green-100 flex space-x-3"><span>View job description</span>  <img src="/assets/svgs/arrow-right-up.svg" /></a>
            </div>
        </div>


         <div className="rounded border border-gray-200 px-12 py-9 space-y-5 text-lg">
          
            <h2 className="text-green-200">Design</h2>

            <div className="font-medium text-xl">UX Writer</div>

            <div className="flex justify-between items-center">
              <div className="space-x-7 opacity-50 flex">
                <a href="#" className="flex items-cente"><img src="/assets/svgs/location.svg" /> &nbsp; Remote</a>
                <a href="#" className="flex items-cente"><img src="/assets/svgs/clock.svg" /> &nbsp; Contract</a>
              </div>

              <a href="#" className="text-green-100 flex space-x-3"><span>View job description</span>  <img src="/assets/svgs/arrow-right-up.svg" /></a>
            </div>
        </div>


            
        </div>

    </section>

     
    </>
  )
}

export default page2;