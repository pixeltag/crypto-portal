import React from 'react'
import Image from 'next/image'
import EthuruemIcon from "../icons/Ethuruem";

export default function CryptoCard() {
  return (
    <div className="p-1">
            <Image
                src="/assets/images/5.jpeg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-t-xxl rounded-b-lg"
            />
            <div className="bg-gray-800 rounded-t-lg rounded-b-xxl flex mt-1 justify-between items-center p-6">
                <div className="flex items-center">
                    <EthuruemIcon width="20" height="20" fill="#fff" />
                    <span className="ml-2 text-xl font-lg">0.04</span>
                </div>
                <div className="text-xl font-light text-gray-400">
                    <time>07:24:35</time>
                </div>
            </div>
        </div>
  )
}
