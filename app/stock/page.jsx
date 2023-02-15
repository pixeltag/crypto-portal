import BackIcon from "../components/icons/Back";
import EthuruemIcon from "../components/icons/Ethuruem";
import TimeTabs from "../components/stock/TimeTabs";
import Image from "next/image"

export default function Stock() {
    return (
        <>
            <div className="p-5">
                <div className="flex items-center justify-between mt-5">
                    <div className="">
                        <BackIcon width="30" height="30" fill="#fff" />
                    </div>
                    <div className="flex">
                        <span className="rounded-full bg-white w-6 h-6 block mr-3 p-0.5 font-light">
                            <EthuruemIcon width="20" height="20" fill="black" />
                        </span>
                        <span className="group-hover:text-black">ethereum</span>
                    </div>
                    <div className=""></div>
                </div>

                <div className="flex items-center justify-start mt-5">
                    <div className="text-5xl">$1234.25</div>
                    <div className="text-oliver font-light ml-3 mt-5">+11.62(0.74%)</div>
                </div>
            </div>
                <TimeTabs />

                <Image
                    src="/assets/images/chart.png"
                    alt="Picture of the author"
                    width={500}
                    height={600}
                    className="my-4"
                />

                <div className="flex items-center">
                    <button className="rounded bg-blur w-100 rounded-xl p-5 flex-grow m-1 text-2xl">
                        Sell
                    </button>
                    <button className="rounded bg-oliver w-100 rounded-xl p-5 flex-grow m-1 text-2xl text-black ml-0">
                    Buy
                    </button>
                </div>
        </>
  );
}
