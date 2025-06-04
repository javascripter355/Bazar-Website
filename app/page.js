export default function Home () {
    return (
        <div className="grid place-items-center w-screen px-16 py-32 gap-25 grid-rows-[auto_auto_auto]">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-xl font-sans text-center font-bold">Lorem ipsum dolor sit amet.</h1>
                <p className="text-[#bbb] font-mono text-center">Consetectur adispicing elit.</p>
                <button className="border-1 font-sans bg-[#fff] transition-all duration-300 ease-out hover:bg-[#dfdfdf] mt-4 
                text-[#0a0a0a] rounded-full px-6 py-3 text-sm flex justify-center">
                Pre-order
                </button>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-sans font-bold text-lg">Food</h1>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-sans font-bold text-lg">Drink</h1>
            </div>
        </div>
    )
}