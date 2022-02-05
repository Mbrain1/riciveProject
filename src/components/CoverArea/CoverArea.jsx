import { useState, useEffect } from 'react';
import Image from 'next/image'
import ApplePlayIcon from 'public/assets/images/google.png'
import GooglePlayIcon from 'public/assets/images/apple.png'
import ArrowAction from 'public/assets/svgs/arrow-to.svg'
import CoverImg from 'public/assets/images/joyce.png'
import Quotes from 'public/assets/svgs/quote.svg'
import Link from 'next/link';
import styles from './CoverArea.module.css';
import LeftBand from 'public/assets/svgs/leftBand.svg'
import LeftBand2 from 'public/assets/svgs/leftBand2.svg'
import LeftBand3 from 'public/assets/svgs/leftBand3.svg'
import RightBand from 'public/assets/svgs/rightBand.svg'
import RightBand1 from 'public/assets/svgs/rightBand1.svg'
import RightBand2 from 'public/assets/svgs/rightBand2.svg'


export default function CoverArea() {
    const [toggleText, setToggleText] = useState();
    useEffect(() => {
        const intervalID = setInterval(() =>  {
            setToggleText((toggle) => !toggle)
        }, 3000);

        return () => clearInterval(intervalID);
    }, [toggleText]);
    return (
        <>
        <section className="max-w-7xl h-screen sm:px-28 lg:px-28">
            <div className="mb-8">
                <div className="flex">
                    <div className="py-28 h-full">
                        <div className="w-full my-6">
                            <h1 className="text-gray-500 text-5xl font-extrabold md:w-40">
                                Automate your
                                {toggleText ?
                                    <span className="text-green-200"> laundry </span> :
                                    <span className="text-green-200"> groceries</span>
                                }
                            </h1>
                        </div>
                        <div className="my-6">
                            <p className="md:w-65 text-base font-medium gray-500">
                                Cancel laundry day forever, resolve your laundry in minutes, on your mobile.
                            </p>
                        </div>

                        <div className="flex items-baseline space-x-4">
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

                        <div className="my-4">

                            <Link href="" passHref >
                                <div className="inline-flex align-center space-x-4">
                                    <p className="text-green-100 text-md font-semibold mr-2 ">Pricing calculator</p>
                                    <Image src={ArrowAction} alt="Arrow"/>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.clips}>
                        <div className={styles.bands}>

                            <div className={styles.rightBand}> <Image src={RightBand} alt="leftBand" /></div>
                            <div className={styles.rightBand1}> <Image src={RightBand1} alt="leftBand" /></div>
                            <div className={styles.rightBand2}> <Image src={RightBand2} alt="leftBand" /></div>
                        </div>
                        <div className={styles.clip}></div>
                    </div>
                    <div className="w-full md:relative md:left-12 md:py-0">
                        <div className="styles.imgWrapper">
                            <Image
                                src={CoverImg}
                                width={531}
                                height={505.94}
                                alt="Cover Image"
                                layout='responsive'
                                priority
                            />
                        </div>

                        <div className="">
                            <div className="bg-white relative -top-22 left-6 w-22 rounded-large shadow-sm md:p-6">
                                <Image src={Quotes} alt="quotes" />
                                <div className="p-3">
                                    <p className="text-sm text-gray-100 mb-3 font-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Condimentum diam orci pretium a pharetra,
                                    </p>
                                    <p className="text-sm font-medium text-gray-500">
                                        Subomi Falogun
                                    </p>
                                    <p className="text-sm font-normal text-gray-500">
                                        Creative design director
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.clips}>
                        <div className={styles.leftBand}> <Image src={LeftBand} alt="leftBand" /></div>
                        <div className={styles.bands}>
                            <div className={styles.leftBand1}> <Image src={LeftBand2} alt="leftBand" /></div>
                            <div className={styles.leftBand2}> <Image src={LeftBand3} alt="leftBand" /></div>
                        </div>
                        <div className={styles.clip}></div>
                        <div className={styles.clipExt}></div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}