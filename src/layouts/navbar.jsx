import Image from 'next/image'
import { useState } from 'react'
import { Transition } from "@headlessui/react";
import Logo from 'public/assets/images/logobig.png'
import ApplePlayIcon from 'public/assets/images/google.png'
import GooglePlayIcon from 'public/assets/images/apple.png'
import ArrowDown from 'public/assets/svgs/arrow-down.svg'
// import styles from './navbar.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
    <header className="shadow py-3">
          <nav className="flex justify-between items-center container ">
            <img src="/assets/images/logobig.png" />

            <div className="space-x-5 text-xl font-medium hidden md:flex">
              <a className="flex">
                <span>Product</span> &nbsp;
                <img src="/assets/svgs/arrow-down.svg" alt="ArrowDown" width={14} height={8} />
              </a>
              <a>Pricing</a>
            </div>

            <div className="hidden md:flex space-x-3">
                <img src="/assets/images/google.png" />
                <img src="/assets/images/apple.png" />
            </div>
        </nav>
      </header>

    )
}