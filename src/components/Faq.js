import {useEffect, useState,useRef} from "react";

const faqs = [
{question:"Do I have to pay before pickup?",answer:"Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly."},
{question:"What happens if my clothes go missing or damaged?",answer:"Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly."},
{question:"Can I add towels and bedsheets to my clothes to make a bag of wash?",answer:"Subscription customers pay using our payment link shared, before or after the first time order is picked up, after which payment is automated to monthly. Regular wash customers make payment after wash order descriptions have been shared with them post pickup. And an invoice and payment link is sent accordingly."}];



const Faq = (props) => {

  const [selected,setSelected] = useState(0);

  const toggle = (i) => selected == i ? setSelected(null) : setSelected(i);


  return (
    <>
     <section className="py-12 relative">
        <div className="container py-12">
                <div className="space-y-12">
                  <h2 className="text-2xl font-medium text-yellow-900">Frequently Asked Questions (FAQs)</h2>

                  <div className="md:ml-10 space-y-10">



                   {faqs.map( (item,index) => 
                      <div className="space-y-3" key={index}>
                        <h3 className="flex justify-between items-center cursor-pointer" onClick={() => toggle(index)}>
                          <span className={`${selected === index  && 'text-green-100'} font-medium text-xl`}>{item.question}</span> 

                          <i className={`fas ${selected === index ? 'fa-chevron-up text-gray-100' : 'fa-chevron-down'}`}></i>
                       
                        </h3>
                        <p className={`${selected === index ? "py-1" : 'h-0 overflow-hidden'} transition-all duration-300`}>
                          {item.answer}
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