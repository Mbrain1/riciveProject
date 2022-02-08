import {useState} from 'react';

const Faq = (props) => {

  const [pages,setPages] = useState({first:false,second:false,third:false});


  return (
    <>
     <section className="py-12 relative">

        <div className="container py-12">
                <div className="space-y-12">
                  <h2 className="text-2xl font-medium text-green-100 text-center">Frequently Asked Questions (FAQs)</h2>

                  <div className="md:ml-10 border rounded-lg">
                      <div className="p-5 border-b">
                        
                        <h3 className="flex justify-between items-center">
                          <span className={`${pages.first && 'text-green-100'} font-medium text-xl`}>What happens when I have more than 30 items?</span> 

                          <button onClick={() => setPages({third:false,second:false,first: !pages.first})}><i className={`fas ${pages.first ? 'fa-chevron-up text-gray-100' : 'fa-chevron-down'}`}></i></button></h3>
                        
                        <p className={`py-2 ${pages.first === false ? 'hidden' : 'block'}`}>Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly.
                        </p>
                      </div>


                      <div className="p-5 border-b">
                        <h3 className="flex justify-between items-center"><span className={`${pages.second && 'text-green-100'} font-medium text-xl`}>Do you pick up and deliver?</span> <button onClick={() => setPages({first:false,third:false,second: !pages.second})}><i className={`fas ${pages.second ? 'fa-chevron-up text-gray-100' : 'fa-chevron-down'}`}></i></button></h3>
                       
                        <p className={`py-2 ${pages.second === false ? 'hidden' : 'block'}`}>Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly.
                        </p>
                      </div>

                      <div className="p-5">
                        <h3 className="flex justify-between items-center">
                          <span className={`${pages.third && 'text-green-100'} font-medium text-xl`}>How long would it take for my items to be returned?
                          </span> 
                          <button onClick={() => setPages({first:false,second:false,third: !pages.third})}><i className={`fas ${pages.third ? 'fa-chevron-up text-gray-100' : 'fa-chevron-down'}`}></i></button>
                       </h3>
                       
                        <p className={`py-2 ${pages.third === false ? 'hidden' : 'block'}`}>Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly.
                        </p>
                      </div>


                  </div>
                </div>
        </div>


    </section>


     
    </>
  )
}

export default Faq;