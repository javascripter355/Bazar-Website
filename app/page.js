"use client"

import Image from "next/image";
import tahuIsi from "../public/tahu-isi.jpg";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import keripikKaca from "../public/keripik-kaca.jpeg";
import basreng from "../public/basreng.jpeg";
import airMineral from "../public/air-mineral.webp";
import { useTheme } from "next-themes";

export default function Home () {
    const [popUp, setPopUp] = useState(false);

    const variants = {
        hidden: {
            y: 10,
            opacity: 0,
            filter: 'blur(5px)'
        },
        show: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    }

    const { setTheme } = useTheme()

    return (
        <div className={`grid place-items-center w-screen px-16 py-32 gap-16 ${ popUp ? 'blur-[3px] opacity-60' : '' } grid-rows-[auto_auto_auto] transition-all duration-500`}>
            <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ margin: "-50px", once: true }} className="flex flex-col items-center gap-2">
                <motion.h1 variants={variants} className="text-3xl font-sans text-center font-bold">Lorem ipsum <span className="bg-gradient-to-r from-blue-300 to-[#ddd] bg-clip-text text-transparent">dolor</span> sit amet.</motion.h1>
                <motion.h2 variants={variants} className="text-[#bbb] font-mono text-center">Consetectur adispicing elit.</motion.h2>
                <motion.span variants={variants} className="hidden"></motion.span>
                <motion.span variants={variants} className="hidden"></motion.span>
                <motion.div variants={variants}>
                    <Button className="font-sans mt-4" onClick={() => setPopUp(true)}>Pre-order</Button></motion.div>
            </motion.div>
            <motion.div variants={variants} className="flex flex-col items-center mt-10 font-sans gap-5">
                <motion.h2 variants={variants} initial="hidden" whileInView="show" viewport={{ margin: "-50px", once: true }} className="font-sans font-bold text-2xl mb-1">Food</motion.h2>
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ margin: "-50px", once: true }} className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={tahuIsi} alt="Tahu Isi" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Tahu Isi</h3>
                </motion.div>
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ margin: "-50px", once: true }} className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={keripikKaca} alt="Keripik Kaca" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Keripik Kaca</h3>
                </motion.div>
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ margin: "-50px", once: true }} className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={basreng} alt="Basreng" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Basreng</h3>
                </motion.div>
            </motion.div>
            <motion.div variants={variants} className="flex flex-col items-center gap-5">
                <motion.h2 variants={variants} initial="hidden" whileInView="show" viewport={{ margin: "-50px", once: true }} className="font-sans font-bold text-2xl">Drink</motion.h2>
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ margin: "-50px", once: true }} className="flex flex-col gap-2 items-center">
                    <Image className="rounded-lg shadow-md" src={airMineral} alt="Air Mineral" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Air Mineral</h3>
                </motion.div>
            </motion.div>
        </div>
    );
}