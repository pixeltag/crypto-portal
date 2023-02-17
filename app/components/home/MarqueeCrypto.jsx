"use client"

import Marquee from "react-fast-marquee";
import EthuruemIcon from "../icons/Ethuruem";
import PolygonIcon from "../icons/Polygon";
import BitcoinIcon from "../icons/Bitcoin";
import CosmosIcon from "../icons/Cosmos";
import Link from "next/link";


export default function MarqueeCrypto() {
    return (
        <>
        <Marquee gradient={false}>
            <Link href="stock">
                <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
                    <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                        <EthuruemIcon width="20" height="20" fill="black" />
                    </span>
                    <span className="group-hover:text-black">ethereum</span>
                </div>
            </Link>
            <Link href="stock">
                <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
                    <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                        <PolygonIcon width="20" height="20" fill="black" />
                    </span>
                    <span className="group-hover:text-black">polygon</span>
                </div>
            </Link>
            <Link href="stock">
                <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
                    <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                        <BitcoinIcon width="20" height="20" fill="black" />
                    </span>
                    <span className="group-hover:text-black">bitcoin</span>
                </div>
            </Link>
            <Link href="stock">
                <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
                    <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                        <CosmosIcon width="20" height="20" fill="black" />
                    </span>
                    <span className="group-hover:text-black">cosmos</span>
                </div>
            </Link>
        
        </Marquee>

        <Marquee gradient={false} direction="right">
        <Link href="stock">
                <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
                    <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                        <EthuruemIcon width="20" height="20" fill="black" />
                    </span>
                    <span className="group-hover:text-black">ethereum</span>
                </div>
            </Link>
            <Link href="stock">
                <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
                    <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                        <PolygonIcon width="20" height="20" fill="black" />
                    </span>
                    <span className="group-hover:text-black">polygon</span>
                </div>
            </Link>
            <Link href="stock">
                <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
                    <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                        <BitcoinIcon width="20" height="20" fill="black" />
                    </span>
                    <span className="group-hover:text-black">bitcoin</span>
                </div>
            </Link>
            <Link href="stock">
                <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
                    <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                        <CosmosIcon width="20" height="20" fill="black" />
                    </span>
                    <span className="group-hover:text-black">cosmos</span>
                </div>
            </Link>
        </Marquee>
        </>
    )
}