import React from 'react'
import Image from 'next/image'
import EthuruemIcon from "../components/icons/Ethuruem";
import ProfileIcon from "../components/icons/Profile";
import AddIcon from "../components/icons/Add";
import BackIcon from "../components/icons/Back";

export default function page() {
    return (
        <>
        <div className="relative">
            <Image
                src="/assets/images/5.jpeg"
                alt="Picture of the author"
                width={500}
                height={800}
                className="rounded-b-xxl"
            />
             <div className="absolute top-10 left-5">
                        <BackIcon width="30" height="30" fill="#fff" />
                    </div>
        </div>

        <div className="flex justify-between items-center p-5">
            <div>
                <div className="text-4xl">Infinity #88</div>
            </div>
        </div>


        <div className="flex justify-between items-center p-5 pt-0">
            <div>
                <label className="text-sm text-200 text-gray-400 font-light">
                    Creator
                </label>
                
                <div className="flex mt-2">
                    <div className="bg-yellow-300 w-7 h-7 rounded-full flex-grow mr-3 p-1 text-center">
                        <ProfileIcon width="20" height="20" />
                    </div>
                    <div className="text-lg">@ready</div>
                </div>
            </div>
            <div>
                <a href="" className="block p-4 border border-solid border-blur rounded-xl">
                    <AddIcon width="18" height="18" fill="white" />
                </a>
            </div>
        </div>

            <div className="flex mt-1 justify-between items-center">
                <div className="text-xl font-light text-gray-400 bg-gray-800 rounded-xxl p-6 flex-grow text-center m-1">
                    <time>07:24:35</time>
                </div>
                <div className="flex bg-gray-800 rounded-xxl p-6 flex-grow items-center justify-center m-1  ml-0">
                    <div>
                        <EthuruemIcon width="20" height="20" fill="gray" />
                        </div>
                    <span className="ml-2 text-xl font-lg">0.04</span>
                </div>
            </div>

            <div className="flex items-center p-1 mt-3">
            <button className="rounded bg-oliver w-100 rounded-xl font-normal p-5 flex-grow text-2xl text-black ml-0">
                    Place a bid
                    </button>
                    </div>
    </>
)
}
