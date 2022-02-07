import {useState} from 'react';

const Faq = (props) => {

  const [pages,setPages] = useState({first:true,second:false,third:false});


  return (
    <>
     <section className="py-12 relative">

        <div className="container py-12">
                <div className="space-y-12">
                  <h2 className="text-2xl font-medium text-yellow-900">Frequently Asked Questions (FAQs)</h2>

                  <div className="md:ml-10 space-y-10">
                      <div className="space-y-3">
                        <h3 className="flex justify-between items-center"><span className={`${pages.first && 'text-green-100'} font-medium text-xl`}>Do I have to pay before pickup?</span> <button onClick={() => setPages({third:false,second:false,first: !pages.first})}><i className={`fas ${pages.first ? 'fa-chevron-up text-gray-100' : 'fa-chevron-down'}`}></i></button></h3>
                        <p className={`${pages.first === false ? 'invisible h-1 overflow-hidden' : null} transition-all duration-300`}>Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly.
                        </p>
                      </div>


                      <div className="space-y-3">
                        <h3 className="flex justify-between items-center"><span className={`${pages.second && 'text-green-100'} font-medium text-xl`}>What happens if my clothes go missing or damaged?</span> <button onClick={() => setPages({first:false,third:false,second: !pages.second})}><i className={`fas ${pages.second ? 'fa-chevron-up text-gray-100' : 'fa-chevron-down'}`}></i></button></h3>
                        <p className={`${pages.second === false ? 'invisible h-1 overflow-hidden' : null} transition-all duration-300`}>Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="flex justify-between items-center"><span className={`${pages.third && 'text-green-100'} font-medium text-xl`}>Can I add towels and bedsheets to my clothes to make a bag of wash?
                      </span> <button onClick={() => setPages({first:false,second:false,third: !pages.third})}><i className={`fas ${pages.third ? 'fa-chevron-up text-gray-100' : 'fa-chevron-down'}`}></i></button></h3>
                        <p className={`${pages.third === false ? 'invisible h-1 overflow-hidden' : null} transition-all duration-300`}>Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly.
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