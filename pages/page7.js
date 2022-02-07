import {useState} from 'react';
import Faq from "/src/components/Faq";


const page2 = (props) => {
  return (
    <>
          <div className="relative grid grid-cols-2 min-h-[90vh]">
          
            <div className="space-y-10 flex flex-col justify-center items-start relative z-30">

          
            </div>   


            <div className="space-y-10 flex flex-col justify-center items-center relative z-30 bg-green-900 text-white p-28">

                <h1 className="text-4xl font-bold relative leading-normal z-30">Fueled by our passion to solve for time</h1>

                <p className="text-lg font-light leading-relaxed">
                  We are building for the next generation of African professionals who understand the value of time and benefit of outsourcing non rewarding chores.<br />
                  First people who experienced the same problem too many times ourselves. We are on a mission to help millions of residents in Africa,repurpose their limited time to things they care about. Join us
                </p>

                <div>
                    <button className="text-lg">Join us</button>
                </div>


                <div className="rounded-full w-16 h-16 opacity-20 bg-green-800 absolute top-28 right-10"></div>

                <div className="rounded-full w-16 h-16 opacity-20 bg-green-800 absolute bottom-48 left-5"></div>

                <div className="rounded-full w-14 h-14 opacity-10 bg-green-800 absolute bottom-20 right-52"></div>

            </div>   

      


          
          

      </div>   
    </>
  )
}

export default page2;