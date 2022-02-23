import { useState,useEffect } from 'react'
import PricingWrapper from "/src/components/navbar/PricingWrapper";
import ProductWrapper from "/src/components/navbar/ProductWrapper";
import {PCView,MobileView} from "/src/components/navbar/Navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isPricingOpen, setIsPricingOpen] = useState(false);
    const [isPartnerOpen, setIsPartnerOpen] = useState(false);
    const [isBusinessOpen, setIsBusinessOpen] = useState(false);


    const closeAllModal = () => {
      setIsProductOpen(false)
      setIsPricingOpen(false)
    }


    useEffect(() => {
      if(isOpen == false){
          setIsPricingOpen(false);
          setIsProductOpen(false);
      }
    },[isOpen])

    useEffect(() => {
      if(isBusinessOpen){
        setIsPartnerOpen(false);
      }
    },[isBusinessOpen])

     useEffect(() => {

      if(isPartnerOpen){
        setIsBusinessOpen(false);
      }
      
    },[isPartnerOpen])


    return(
    <header className="shadow py-3">
         
              <PCView 
                setIsPricingOpen={() => setIsPricingOpen(!isPricingOpen)}
                setIsProductOpen={() => setIsProductOpen(!isProductOpen)}
                isPricingOpen={isPricingOpen}
                isProductOpen={isProductOpen}
                setIsOpen={() => setIsOpen(!isOpen)}

              />

              <MobileView 
                setIsPricingOpen={() => setIsPricingOpen(!isPricingOpen)}
                setIsProductOpen={() => setIsProductOpen(!isProductOpen)}
                setIsPartnerOpen={() => setIsPartnerOpen(!isPartnerOpen)}
                setIsBusinessOpen={() => setIsBusinessOpen(!isBusinessOpen)}
                isPartnerOpen={isPartnerOpen}
                isBusinessOpen={isBusinessOpen}
                isPricingOpen={isPricingOpen}
                isProductOpen={isProductOpen}
                setIsOpen={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
              />


              <div 
                className={`overlay opacity-20 bg-black z-40 fixed w-full left-0 top-0 h-full ${(isPricingOpen || isProductOpen) && isOpen == false ? 'block' : 'hidden'}`} 
                onClick={() => closeAllModal()}>
                  
              </div>

              <PricingWrapper 
                isPricingOpen={isPricingOpen}
                isProductOpen={isProductOpen}
                isOpen={isOpen}
               />
        

              <ProductWrapper 
                setIsPartnerOpen={() => setIsPartnerOpen(!isPartnerOpen)}
                setIsBusinessOpen={() => setIsBusinessOpen(!isBusinessOpen)}
                isPartnerOpen={isPartnerOpen}
                isBusinessOpen={isBusinessOpen}
                isProductOpen={isProductOpen}
                isOpen={isOpen}
              />
              

      </header>

    )
}