import {useState,useRef,useEffect} from 'react';
import Faq from "/src/components/Faq";
import Product from "/src/components/services/Product";


const page2 = (props) => {

  const nav = useRef();
  const [selected,setSelected] = useState(4);

  useEffect(() => {
    
    nav.current.scrollLeft = (selected * 100);

  },[selected])


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
          

          <nav className="md:flex md:justify-center md:items-center text-xl overflow-x-auto md:overflow-hidden scroll-smooth snap-mandatory snap-x" ref={nav}>
             <div className="flex space-x-7">
             {["Product","Software engineering","Marketing","Operations","View all"].map((item,index) => 
                <button key={index} onClick={() => setSelected(index)} className={`snap-center py-4 px-5 inline-block whitespace-nowrap font-medium ${index == selected ? 'text-green-100 border-b-8  border-green-100' : 'opacity-50'}`}>{item}</button>
              )}
             </div>
          </nav>
      </div>




   

     <section className="py-12 relative">
        <div className="container grid grid-cols-1 gap-10 relative">

        <h1 className="text-2xl font-bold">Open Roles</h1>



        {selected === 0 ?  <Product /> : selected === 1 ? <Product /> : selected === 2 ? <Product /> : selected === 3 ? <Product /> : <Product />}
        

            
        </div>

    </section>

     
    </>
  )
}

export default page2;