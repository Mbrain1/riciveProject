/* eslint-disable @next/next/no-img-element */


const Pickup = (props) => {
  return (
    <>
     <section className="py-12 relative">
        <div className="md:px-24 px-8 relative py-10">
            <div className="space-y-5 md:px-10">
               <a className="font-medium flex space-x-5"><img src="/assets/svgs/arrow-back.svg" alt="Arrow back" /> <span>Back</span></a>


              <div className="md:px-28 space-y-14">

               <h1 className="text-2xl font-semibold text-center">Schedule a pickup</h1>


               <div className="space-y-5">
                     <h2 className="text-lg">Select a date</h2>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-5 items-center font-semibold md:overflow-hidden overflow-x-scroll py-5">
                        <button className="flex flex-col space-y-2 shadow-xl  rounded-lg py-5 px-5 items-center">
                            <span>17</span>
                            <span>MON</span>
                        </button>

                        <button className="flex flex-col space-y-2 shadow-xl  rounded-lg py-5 px-5 items-center">
                            <span>18</span>
                            <span>TUE</span>
                        </button>

                        <button className="flex flex-col space-y-2 shadow-xl bg-green-200 text-white rounded-lg py-5 px-5 items-center">
                            <span>19</span>
                            <span>WED</span>
                        </button>


                        <button className="flex flex-col space-y-2 shadow-xl  rounded-lg py-5 px-5 items-center">
                            <span>20</span>
                            <span>THU</span>
                        </button>


                        <button className="flex flex-col space-y-2 shadow-xl  rounded-lg py-5 px-5 items-center">
                            <span>21</span>
                            <span>FRI</span>
                        </button>


                        <button className="flex flex-col space-y-2 shadow-xl  rounded-lg py-5 px-5 items-center">
                            <span>22</span>
                            <span>SAT</span>
                        </button>


                        <button className="flex flex-col space-y-2 shadow-xl  rounded-lg py-5 px-5 items-center">
                            <span>23</span>
                            <span>SUN</span>
                        </button>
                    </div>


                      <div>
                         <button className="w-14 h-14 rounded-full bg-gray-300 text-green-200">
                           <i className="fas fa-chevron-right"></i>
                         </button>
                      </div>
                  

                    </div>
               </div>





                <div className="space-y-5">
                     <h2 className="text-lg">Which service would you like to use?</h2>

                    <div className="flex flex-wrap  items-start ">
                        <button className="rounded-lg mx-2 my-2 py-4 text-sm  px-10 text-green-100 border border-green-100">
                            Wash & Fold
                        </button>

                        <button className="rounded-lg mx-2 my-2 py-4 text-sm  px-10 bg-gray-300 opacity-70">
                            Wash & Iron
                        </button>

                        <button className="rounded-lg mx-2 my-2 py-4 text-sm  px-10 bg-gray-300 opacity-70">
                            Ironing only
                        </button>

                        <button className="rounded-lg mx-2 my-2 py-4 text-sm  px-10 bg-gray-300 opacity-70">
                            Drycleaning
                        </button>
                    </div>


               </div>



<form className="space-y-5">
 <h2>Please fill in your personal information correctly</h2>
<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input type="text"  className="rounded-lg placeholder-gray-100 text-base w-full border py-3 px-5 border-gray-100  focus:outline-0" placeholder="Your full name"  />
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input type="email"  className="rounded-lg  placeholder-gray-100 text-base w-full border py-3 px-8 md:px-24 border-gray-100  focus:outline-0" placeholder="Email address" />
        <img src="/assets/svgs/mail-dark.svg" alt="Dark Mail" className="absolute left-5 top-4" />
    </div>

    <div className="relative z-0 mb-6 w-full group">
        <input type="tel"  className="rounded-lg  placeholder-gray-100 text-base w-full border py-3 px-8 md:px-24 border-gray-100  focus:outline-0" placeholder="+2348162458925"  />
        <img src="/assets/svgs/mobile-dark.svg" alt="Mobile Dark" className="absolute left-5 top-4" />
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input type="text"  className="rounded-lg  placeholder-gray-100 text-base w-full border py-3 px-5 border-gray-100  focus:outline-0" placeholder="Pickup address" />
    </div>

  </div>

 <div className="form-group flex justify-end md:col-span-2">
                      <button className="btn">Schedule Pickup</button>
  </div>

</form>

            
            </div>
              
              


            </div>
        </div>
    </section>
    </>
  )
}

export default Pickup;