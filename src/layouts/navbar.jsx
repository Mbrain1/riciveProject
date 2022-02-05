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

    <div>
        <nav className="bg-white shadow-xs fixed inset-x-0 z-10">
        <div className="max-w-7xl px-4 py-2  sm:px-24 lg-px:20">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  width={183}
                  height={54.83}
                  src={Logo}
                  alt="Logo"
                />
              </div>
            </div>


            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <div className="inline-flex items-center">

                        <a
                            href="#"
                            className=" text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
                        >
                            Product
                        </a>
                        <Image src={ArrowDown} alt="ArrowDown" width={14} height={8}/>
                    </div>

                    <a
                        href="#"
                        className=" text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
                    >
                        Pricing
                    </a>

                </div>
            </div>

            <div className="hidden md:block">
                <div className="flex items-baseline space-x-6">
                    <div>
                        <Image
                            width={135}
                            height={40}
                            src={ApplePlayIcon}
                            alt="Google Icon"
                            className="mx-4"
                        />
                    </div>
                    <div>
                        <Image
                            width={135}
                            height={40}
                            src={GooglePlayIcon}
                            alt="Apple icon"

                        />
                    </div>
                </div>
             </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
    )
}