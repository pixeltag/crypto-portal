"use client"

import React from "react";
import Marquee from "react-fast-marquee";

export default function TimeTabs() {
    return (
    <div className="flex">
        <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
            <span className="group-hover:text-black">15min</span>
        </div>
        <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
            <span className="group-hover:text-black">1h</span>
        </div>
        <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
            <span className="group-hover:text-black">1d</span>
        </div>
        <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
            <span className="group-hover:text-black">1Week</span>
        </div>
        <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
            <span className="group-hover:text-black">1Month</span>
        </div>
        <div className="bg-gray-900 rounded-xl px-8 py-5 flex m-0.5 group hover:bg-oliver">
            <span className="group-hover:text-black">6Month</span>
        </div>
    </div>
    );
}
