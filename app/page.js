"use client";

import MarqueeCrypto from "./components/home/MarqueeCrypto";
import CryptoListing from "./components/home/CryptoListing";
import PlusIcon from "./components/icons/PlusIcon";
import Link from "next/link";
import { delay, motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: "0.5" }}
      exit={{ opacity: 1 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <main>
        <div className="flex justify-between items-center p-5">
          <div>
            <m.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <label className="text-xl text-200 text-gray-400 font-light">
                your balance
              </label>
              <div className="text-4xl">$1234.25</div>
            </m.div>
          </div>
          <div>
            <m.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link
                href={"stock"}
                className="block p-3 bg-white text-black rounded-xl"
              >
                <PlusIcon width="50" height="50" />
              </Link>
            </m.div>
          </div>
        </div>

        <MarqueeCrypto />

        <CryptoListing />
      </main>
    </m.div>
  );
}
