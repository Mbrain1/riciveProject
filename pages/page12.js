import {useState} from 'react';
import Faq from "/src/components/Faq";


const page2 = (props) => {
  return (
    <>
         
     <section className="py-12 bg-green-900">
        <div className="container text-white space-y-2">
           <h1 className="text-2xl font-bold">Pricing list</h1>
           <p className="text-xl">For non-wearable items</p>
            
        </div>
    </section>

     <section className="py-12">
        <div className="container">
            
            <table className="min-w-full">
              <tbody>
                <tr>
                  <td className="p-2">Duvet</td>
                  <td>1 ,500</td>
                </tr>

                <tr>
                  <td className="p-2">Duvet cover</td>
                  <td>500</td>
                </tr>

                <tr>
                  <td className="p-2">Towels</td>
                  <td>300</td>
                </tr>


                <tr>
                  <td className="p-2">Bedsheets</td>
                  <td>500</td>
                </tr>

                <tr>
                  <td className="p-2">Suits</td>
                  <td>2 ,000</td>
                </tr>


                <tr>
                  <td className="p-2">Curtains</td>
                  <td>1 ,500</td>
                </tr>


                <tr>
                  <td className="p-2">Blanket</td>
                  <td>500</td>
                </tr>


                <tr>
                  <td className="p-2">Bathrobe</td>
                  <td>500</td>
                </tr>

                <tr>
                  <td className="p-2">Briefs</td>
                  <td>100</td>
                </tr>


                <tr>
                  <td className="p-2">Bag</td>
                  <td>300</td>
                </tr>


                <tr>
                  <td className="p-2">Cap</td>
                  <td>100</td>
                </tr>

                <tr>
                  <td className="p-2">Socks (2 pairs)</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
            
        </div>

    </section>




     
    </>
  )
}

export default page2;