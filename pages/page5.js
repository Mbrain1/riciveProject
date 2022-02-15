import {useState,useRef,useEffect} from 'react';
import Faq from "/src/components/Faq";
import AppStore from "/src/components/AppStore";
import WashFold from "/src/components/pricing/WashFold";


const page2 = (props) => {

  const nav = useRef();
  const [selected,setSelected] = useState(0);

  useEffect(() => {
    
    nav.current.scrollLeft = (selected * 100);

  },[selected])



  return (
    <>
      <div className="bg-green-900 relative  overflow-hidden">
          
            <div className="container grid grid-cols-1 text-center text-white min-h-[70vh] py-12">
              
              <div className="space-y-10 flex flex-col justify-center relative z-30">

              <h1 className="text-5xl font-black relative  z-30">Choose zero laundry days</h1>
              <p className="text-lg relative z-30">Try out our laundry pricing calculator and schedule a pickup today</p>

              <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-0 right-5 md:right-28 z-10" />
              <img src="/assets/svgs/dotted.svg" alt="dotted square 1" className="absolute top-16 right-10 md:right-40 z-10" />
              </div>        
            
            </div>


            <div className="rounded-full w-40 h-40 opacity-5 bg-green-300 absolute top-0 left-0"></div>
            <div className="rounded-full w-20 h-20 opacity-5 bg-green-300 absolute top-44 left-24"></div>


            <div className="rounded-full w-40 h-40 opacity-5 bg-green-300 absolute -bottom-10 right-0"></div>
            <div className="rounded-full w-20 h-20 opacity-5 bg-green-300 absolute bottom-28 -right-10"></div>


             <nav className="md:flex md:justify-center md:items-center text-xl text-white overflow-x-auto md:overflow-hidden scroll-smooth snap-mandatory snap-x" ref={nav}>
             <div className="flex space-x-7">
             {["Wash & Fold","Wash & Iron","Ironing only","Drycleaning"].map((item,index) => 
                <button key={index} onClick={() => setSelected(index)} className={`snap-center py-4 px-5 inline-block font-medium whitespace-nowrap  ${index == selected && 'text-green-100 border-b-8  border-green-100' }`}>{item}</button>
              )}
             </div>
          </nav>


      </div>

   

     <section className="py-12 relative">
        <div className="container grid md:grid-cols-2 grid-cols-1 gap-5 relative py-12">
            
             {selected === 0 ?  <WashFold /> : selected === 1 ? <WashFold /> : selected === 2 ? <WashFold /> : <WashFold />}
            
        </div>

    </section>



    <section className="py-12 relative">

        <div className="container">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Download the app</h2>

                  <AppStore type="sm" />
                </div>
        </div>


    </section>



     <Faq />


     
    </>
  )
}

export default page2;