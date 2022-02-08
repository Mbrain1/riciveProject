import {useState,useEffect} from 'react';

const Testimonial = (props) => {

  const [currentStatus,setCurrentStatus] = useState(0);


  useEffect(() => {

    if(currentStatus > 2){
       setCurrentStatus(0)
    }

    if(currentStatus < 0){
       setCurrentStatus(2)
    }

  },[currentStatus])

  return (
    <>
     <section className="py-12 relative md:px-10 px-5">
         <img src="/assets/svgs/dotted.svg" alt="dotted alt" className="absolute top-0 left-0 z-10" />
         <img src="/assets/svgs/dotted.svg" alt="dotted alt" className="absolute bottom-0 right-0 z-10" />
        <div className="bg-gray-300 rounded-3xl py-12 space-y-20 relative z-50">

            <header className="text-center space-y-10">
              <h1 className="text-5xl font-black">Switch to Ricive - your clothes will thank you.</h1>
              <p className="font-medium text-xl">Join a community of Africans saving valuable time.</p>
            </header>




             <div className="testimonial-wrapper relative w-full md:w-3/5 mx-auto text-center text-lg">
               
                <div className={`transition-all duration-500 bg-white rounded-3xl  space-y-0   p-4 px-12 mt-10 left-0 ${currentStatus == 0 ? 'relative z-10' : currentStatus == 1 ? 'absolute opacity-60 mx-8 overflow-hidden z-[5] -top-5' : 'absolute opacity-40 mx-12 overflow-hidden z-[1] top-0'}`}>
                
                <p className="mt-10 font-medium h-40">“ I had a great and seamless experience using Ricive to satisfy my laundry needs. Saying goodbye to doing my laundry myself. “</p>

                <footer className={`space-y-3 ${currentStatus != 0 && 'invisible' }`}>
                  <h3 className="font-semibold">Kuyekemi Ubi</h3>
                  <div>Software Engineer, Freelancer</div>
                </footer>

                <img src="/assets/images/testimonial/person1.png" className="rounded-full  absolute -top-14 -left-0 md:-left-16" />

               </div>

              <div className={`transition-all duration-500 bg-white rounded-3xl  space-y-0   p-4 px-12 mt-10 left-0 ${currentStatus == 1 ? 'relative z-10' : currentStatus == 2 ? 'absolute opacity-60 mx-8 overflow-hidden z-[5] -top-5' : 'absolute opacity-40 mx-12 overflow-hidden z-[1] top-0'}`}>
                
                <p className="mt-10 font-medium h-40">“Ricive is just a chat away from making my life easy in terms of laundry. Got introduced to them by a colleague of mine because getting a convenient and reliable laundry service has always been a concern to me. Now, I never have to worry about laundry anymore “</p>

                <footer className={`space-y-3 ${currentStatus != 1 && 'invisible' }`}>
                  <h3 className="font-semibold">Oluwatobi Adelua</h3>
                  <div>Payroll & Benefit Support Specialist, OysterHR.</div>
                </footer>

                <img src="/assets/images/testimonial/person3.png" className="rounded-full  absolute -top-14 -left-0 md:-left-16" />

               </div>


               <div className={`transition-all duration-500 bg-white rounded-3xl  space-y-0   p-4 px-12 mt-10 left-0 ${currentStatus == 2 ? 'relative z-10' : currentStatus == 0 ? 'absolute opacity-60 mx-8 overflow-hidden z-[5] -top-5' : 'absolute opacity-40 mx-12 overflow-hidden z-[1] top-0'}`}>
                
                <p className="mt-10 font-medium h-40">“You have a loyal customer in me. i received my clothes and all i have to say is i was impressed. Keep it up and don’t relent. “</p>

                <footer className={`space-y-3 ${currentStatus != 2 && 'invisible' }`}>
                  <h3 className="font-semibold">Seyi Babalola</h3>
                  <div>Business Analyst, CribMD.</div>
                </footer>

                <img src="/assets/images/testimonial/person2.png" className="rounded-full  absolute -top-14 -left-0 md:-left-16" />

               </div>

             </div>

             <div className="flex justify-center items-center space-x-2">
                {[0,1,2].map((item,index) => <button onClick={() => setCurrentStatus(item)} key={index} className={`w-2 h-2 rounded-full ${currentStatus == item ? 'bg-green-800' : 'bg-white'}`}></button>)}
             </div>

             <div className="hidden md:flex justify-between absolute items-center top-0 inset-x-32 top-[45%] opacity-80">
                 {['left','right'].map((item,index) => <button onClick={() => setCurrentStatus(item == 'right' ? ++currentStatus : --currentStatus)} key={index} className="w-16 h-16 rounded-full bg-gray-400 text-green-100"><i className={`fas text-xl fa-chevron-${item}`}></i></button>)}
             </div>



        
        </div>
    </section>
    </>
  )
}

export default Testimonial;