import Image from "next/image";
import CalcSreen from "./screen/CalcSreen";

export default function Home() {
  return (
    <div className="w-80 h-[90%] bg-black md:w-80 md:my-10 mx-auto rounded-xl shadow-2xl shadow-black">
        <CalcSreen/>

    </div>
  );
}
