import MarqueeCrypto from "./components/home/MarqueeCrypto";
import PlusIcon from "./components/icons/PlusIcon";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between items-center p-5">
        <div>
          <label className="text-xl text-200 text-gray-400 font-light">
            your balance
          </label>
          <div className="text-4xl">$1234.25</div>
        </div>
        <div>
          <a href="" className="block p-3 bg-white text-black rounded-xl">
            <PlusIcon width="50" height="50" />
          </a>
        </div>
      </div>

      <MarqueeCrypto />
    </main>
  );
}
