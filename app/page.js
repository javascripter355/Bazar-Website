import Image from "next/image";
import tahuIsi from "../public/tahu-isi.jpg";
import keripikKaca from "../public/keripik-kaca.jpeg";
import basreng from "../public/basreng.jpeg";

export default function Home () {
    return (
        <div className="grid place-items-center w-screen px-16 py-32 gap-10 grid-rows-[auto_auto_auto]">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl font-sans text-center font-bold">Lorem ipsum dolor sit amet.</h1>
                <h2 className="text-[#bbb] font-mono text-center">Consetectur adispicing elit.</h2>
                <button className="border-1 font-sans bg-[#fff] transition-all duration-300 ease-out hover:bg-[#dfdfdf] 
                mt-4 text-[#0a0a0a] rounded-full px-6 py-3 text-sm flex justify-center">Pre-order</button>
            </div>
            <div className="flex flex-col items-center mt-10 font-sans gap-5">
                <h2 className="font-sans font-bold text-2xl mb-1">Food</h2>
                <div className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={tahuIsi} alt="Tahu Isi" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Tahu Isi</h3>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={keripikKaca} alt="Keripik Kaca" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Keripik Kaca</h3>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={basreng} alt="Basreng" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Basreng</h3>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sans font-bold text-2xl">Drink</h2>
            </div>
        </div>
    );
}