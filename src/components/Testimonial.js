
import {useState,useEffect} from 'react';




const comments = [
{
name:"Kuyekemi Ubi",
title:"Software Engineer, Freelancer",
comment:"I had a great and seamless experience using Ricive to satisfy my laundry needs. Saying goodbye to doing my laundry myself.",
image:"person1.png"
},

{
name:"Oluwatobi Adelua",
title:"Payroll & Benefit Support Specialist, OysterHR.",
comment:"Ricive is just a chat away from making my life easy in terms of laundry. Got introduced to them by a colleague of mine because getting a convenient and reliable laundry service has always been a concern to me. Now, I never have to worry about laundry anymore",
image:"person3.png"
},

{
name:"Seyi Babalola",
title:"Business Analyst, CribMD.",
comment:"You have a loyal customer in me. i received my clothes and all i have to say is i was impressed. Keep it up and don’t relent.",
image:"person2.png"
}
];
const Testimonial = (props) => {

  const [selected,setSelected] = useState(0);


  const handleSelected = (selected) => {


    if(selected > 2) return setSelected(0);

    if(selected < 0) return setSelected(2);
    
    setSelected(selected)

  }


   useEffect(() => {

    const autoTestimonial = setInterval(() => handleSelected(++selected), 5000);

    return () => clearInterval(autoTestimonial);

  },[])





  return (
    <>
     <section className="py-12 relative px-5 sm:px-10">
         <img src="/assets/svgs/dotted.svg" alt="dotted alt" className="absolute top-0 left-0 z-10" />
         <img src="/assets/svgs/dotted.svg" alt="dotted alt" className="absolute bottom-0 right-0 z-10" />


        <div className="bg-gray-300 rounded-3xl py-12 space-y-16 sm:space-y-20 relative z-50">

            <header className="text-center space-y-10 px-5">
              <h1 className="text-4xl sm:text-5xl font-black">Switch to Ricive - your clothes will thank you.</h1>
              <p className="font-medium text-xl">Join a community of Africans saving valuable time.</p>
            </header>
             <div className="testimonial-wrapper relative w-full sm:w-3/5 mx-auto text-center text-lg px-5 sm:px-0">
               
               {comments.map((item,index) => 
                 <div key={index} className={`transition-all duration-500 bg-white rounded-3xl  space-y-0  p-4 px-12 mt-10 left-0 ${selected == index ? 'relative z-20' : index == 1 && selected == 2 ? 'testimonial-2' :  index == 1 || index == 0 ? 'testimonial-1' :  'testimonial-2' }`}>
              
               <div className={`${selected !== index && 'invisible' }`}>
                <p className="mt-10 font-medium h-60 sm:h-40 overflow-hidden flex items-center sm:items-start"><span>“{item.comment}“</span></p>


                <footer className={`space-y-3`}>
                  <h3 className="font-semibold">{item.name}</h3>
                  <div>{item.title}</div>
                </footer>

               </div>

                <img alt="alt" src={`/assets/images/testimonial/${item.image}`} className="rounded-full  absolute -top-14 -left-8 sm:-left-16" />

               </div>
               )}
          </div>

             <div className="flex sm:justify-between justify-center space-x-5 sm:absolute items-center sm:inset-x-10 md:inset-x-20 sm:top-[45%] opacity-80">
                 {['left','right'].map((item,index) => <button onClick={() => handleSelected(item == 'right' ? ++selected : --selected)} key={index} className="w-16 h-16 rounded-full bg-gray-400 text-green-100"><i className={`fas text-xl fa-chevron-${item}`}></i></button>)}
             </div>



             <div className="flex justify-center items-center space-x-2">
                {[0,1,2].map((item,index) => <button onClick={() => handleSelected(item)} key={index} className={`w-2 h-2 rounded-full ${selected === index ? 'bg-green-800' : 'bg-white'}`}></button>)}
             </div>
        </div>
    </section>
    </>
  )
}

export default Testimonial;