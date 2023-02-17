'use client'

import BackIcon from "../components/icons/Back";
import EthuruemIcon from "../components/icons/Ethuruem";
import TimeTabs from "../components/stock/TimeTabs";
import Image from "next/image"
import Link from "next/link";
import { motion as m } from "framer-motion";
import CountUp from 'react-countup';



export default function Stock() {
    return (
        <m.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{x:"100%"}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-full">
            <div className="p-5">
                <div className="flex items-center justify-between mt-5">
                    <div className="">
                        <m.div initial={{scale:0, rotate:90, opacity:0}} animate={{scale:1, rotate: 0, opacity:1}} transition={{duration:1, ease:'easeInOut',delay:'0.75'}}>
                        <Link href="/">
                            <BackIcon width="30" height="30" fill="#fff" />
                        </Link>
                        </m.div>
                    </div>
                    <div className="flex">
                        <m.div className="flex" initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{duration:1, ease:'easeInOut',delay:'0.75'}}>
                            <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                                <EthuruemIcon width="20" height="20" fill="black" />
                            </span>
                            <span className="group-hover:text-black">ethereum</span>
                        </m.div>
                    </div>
                    <div className=""></div>
                </div>

                <div className="flex items-center justify-start mt-5">
                    <div className="text-5xl">
                        <CountUp start={0} end={1234.25} prefix="$" decimals={2} duration={0.75} decimal="," />
                    </div>
                    <m.div initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.3, ease:'easeInOut',delay:'0.75'}}>
                    <div className="text-oliver font-light ml-3 mt-5">+11.62(0.74%)</div>
                    </m.div>
                </div>
            </div>
            <m.div initial={{x:300, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1.3, ease:'easeInOut',delay:'0.75'}}>
                <TimeTabs />
            </m.div>

            <m.div initial={{y:300, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.3, ease:'easeInOut',delay:'0.75'}}>
                <Image
                    src="/assets/images/chart.png"
                    alt="Picture of the author"
                    width={500}
                    height={600}
                    className="my-4"
                />
                </m.div>

                <div className="flex items-center">
                <m.div className="flex-grow m-1" initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:1, ease:'easeInOut',delay:'0.75'}}>
                    <button className="rounded bg-blur w-100 rounded-xl p-5 w-full text-2xl ">
                        Sell
                    </button>
                    </m.div>
                    <m.div className="flex-grow m-1" initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:1, ease:'easeInOut',delay:'0.75'}}>

                    <button className="rounded bg-oliver w-100 rounded-xl p-5 w-full m-1 text-2xl text-black ml-0">
                    Buy
                    </button>
                    </m.div>
                </div>
        </m.div>
  );
}
