import {useState} from 'react';

const faqs = [
{question:"What happens when I have more than 30 items?",answer:"Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly."},
{question:"Do you pick up and deliver?",answer:"Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly."},
{question:"How long would it take for my items to be returned?",answer:"Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly."}];



const Faq = (props) => {

  const [selected,setSelected] = useState(0);

  const toggle = (i) => selected == i ? setSelected(null) : setSelected(i);


  return (
    <>
     <section className="py-12 relative">
        <div className="container py-12">
                <div className="space-y-12">
                  <h2 className="md:text-2xl font-bold text-green-100 text-center">Frequently Asked Questions (FAQs)</h2>

                  <div className="md:ml-10 border rounded-2xl ">

                  {faqs.map( (item,index) => 
                      <div className={`p-5 py-8 ${index < 2 ? 'border-b' : null}`} key={index}>
                        <h3 className="flex justify-between items-center cursor-pointer space-x-2" onClick={() => toggle(index)}>
                          <span className={`${selected === index  && 'text-green-100'} font-medium md:text-xl`}>{item.question}</span> 

                          <i className={`fas ${selected === index ? 'fa-chevron-up text-gray-100' : 'fa-chevron-down'}`}></i>
                        </h3>
                        
                        <p className={`${selected === index ? "py-1" : 'h-0 overflow-hidden'} transition-all duration-300`}>
                          Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly.
                        </p>
                      </div>
                  )}


                  </div>
                </div>
        </div>


    </section>


     
    </>
  )
}

export default Faq;