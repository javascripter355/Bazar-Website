"use client"

import Image from "next/image";
import tahuIsi from "../public/tahu-isi.jpg";
import { motion } from "motion/react";
import { useState } from "react";
import keripikKaca from "../public/keripik-kaca.jpeg";
import basreng from "../public/basreng.jpeg";
import airMineral from "../public/air-mineral.webp";

export default function Home () {
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

    return (
        <div className="grid place-items-center w-screen px-16 py-32 gap-10 grid-rows-[auto_auto_auto]">
            <motion.div variants={variants} initial="hidden" whileInView="show" className="flex flex-col items-center gap-2">
                <motion.h1 variants={variants} className="text-3xl font-sans text-center font-bold">Lorem ipsum <span className="bg-gradient-to-r from-blue-300 to-[#ddd] bg-clip-text text-transparent">dolor</span> sit amet.</motion.h1>
                <motion.h2 variants={variants} className="text-[#bbb] font-mono text-center">Consetectur adispicing elit.</motion.h2>
                <motion.span variants={variants} className="hidden"></motion.span>
                <motion.span variants={variants} className="hidden"></motion.span>
                <motion.button variants={variants} className="border-1 font-sans bg-[#fff] transition-all duration-300 ease-out hover:bg-[#dfdfdf] 
                mt-4 text-[#0a0a0a] rounded-full px-6 py-3 text-sm flex justify-center">Pre-order</motion.button>
            </motion.div>
            <motion.div variants={variants} className="flex flex-col items-center mt-10 font-sans gap-5">
                <motion.h2 variants={variants} initial="hidden" whileInView="show" className="font-sans font-bold text-2xl mb-1">Food</motion.h2>
                <motion.div variants={variants} initial="hidden" whileInView="show" className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={tahuIsi} alt="Tahu Isi" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Tahu Isi</h3>
                </motion.div>
                <motion.div variants={variants} initial="hidden" whileInView="show" className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={keripikKaca} alt="Keripik Kaca" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Keripik Kaca</h3>
                </motion.div>
                <motion.div variants={variants} initial="hidden" whileInView="show" className="flex flex-col items-center gap-2">
                    <Image className="rounded-lg shadow-md" src={basreng} alt="Basreng" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Basreng</h3>
                </motion.div>
            </motion.div>
            <motion.div variants={variants} className="flex flex-col items-center gap-5">
                <motion.h2 variants={variants} initial="hidden" whileInView="show" className="font-sans font-bold text-2xl">Drink</motion.h2>
                <motion.div variants={variants} initial="hidden" whileInView="show" className="flex flex-col gap-2 items-center">
                    <Image className="rounded-lg shadow-md" src={airMineral} alt="Air Mineral" width={200} height={120}></Image>
                    <h3 className="text-[#ddd]">Air Mineral</h3>
                </motion.div>
            </motion.div>
        </div>
    );
}