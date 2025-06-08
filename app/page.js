"use client"

import Image from "next/image";
import tahuIsi from "../public/tahu-isi.jpg";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import keripikKaca from "../public/keripik-kaca.jpeg";
import basreng from "../public/basreng.jpeg";
import airMineral from "../public/air-mineral.webp";
import { useTheme } from "next-themes";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter, CardAction } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { AlertCircleIcon } from "lucide-react";

export default function Home () {
    const [popUp, setPopUp] = useState(false);
    const [name, setName] = useState("");
    const [order, setOrder] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    let price;
    switch (order) {
        case 'Tahu Isi':
            price = "5.000"
            break;
        case 'Keripik Kaca':
            price = '10.000'
            break;
        case 'Basreng Asin':
            price = '10.000'
            break;
        case 'Basreng Pedas':
            price = '10.000'
            break;
        case 'Air Mineral':
            price = '5.000'
            break;
        default:
            price = null;
    }

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 7000);
        }

        return () => clearTimeout();
    }, [error]);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(null);
            }, 5000);
        }

        return () => clearTimeout();
    }, [success])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setPopUp(false);
            const res = await axios.post(`/api/preorder`, {
                name,
                order
            });

            if (res.status === 201) {
                setSuccess("Sukses.");
            }
        } catch (error) {
            if (error.response.status === 400) {
                setError("Kredensial tidak lengkap.")
            }
            if (error.response.status === 500) {
                setError("Error.")
            }
        }
    }
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

    const preorderVariants = {
        hidden: {
            y: 10,
            filter: 'blur(5px)',
            opacity: 0,
        },
        show: {
            y: 0,
            filter: 'blur(0px)',
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const { setTheme } = useTheme()

    return (
        <div className="flex flex-col items-center w-screen">
            <div className={`grid place-items-center w-screen px-16 py-32 gap-16 ${ popUp || error || success ? 'blur-[3px] opacity-60' : '' } grid-rows-[auto_auto_auto] transition-all duration-500`}>
                <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ margin: "-50px", once: true }} className="flex flex-col items-center gap-2">
                    <motion.h1 variants={variants} className="text-3xl font-sans text-center font-bold">Mau <span className="bg-gradient-to-r from-blue-300 to-[#ddd] bg-clip-text text-transparent">nikmat</span>? Beli di <span className="bg-gradient-to-r from-yellow-300 to-[#ddd] bg-clip-text text-transparent">9.4 Joseph Class</span>.</motion.h1>
                    <motion.h2 variants={variants} className="text-[#bbb] font-mono text-center">Pre-order sekarang, nikmati nanti.</motion.h2>
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
            <AnimatePresence>
                {popUp  ? (
                    <motion.div variants={preorderVariants} initial="hidden" animate="show" exit="hidden"
                        className="fixed inset-0 flex justify-center items-center"
                    >
                        <Card className="shadow-xl md:w-100">
                            <CardHeader>
                                <CardTitle>Informasi Pre-order</CardTitle>
                                <CardDescription>Pilihlah makanan atau minuman yang ingin anda pre-order beserta kredensial lainnya.</CardDescription>
                                <CardAction>
                                    <Button variant="link" onClick={() => setPopUp(false)}>Kembali</Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="text">Nama Lengkap/Kelas</Label>
                                            <Input type="text" 
                                                required 
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Laurentius Lionel/9.4"
                                                className="sm:text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="select">Pilihan pre-order</Label>
                                            <Select required onValueChange={(setOrder)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih makanan/minuman" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Makanan</SelectLabel>
                                                        <SelectItem value="Tahu Isi">Tahu Isi</SelectItem>
                                                        <SelectItem value="Keripik Kaca">Keripik Kaca</SelectItem>
                                                        <SelectItem value="Basreng Pedas">Basreng Pedas</SelectItem>
                                                        <SelectItem value="Basreng Asin">Basreng Asin</SelectItem>
                                                    </SelectGroup>
                                                    <SelectSeparator />
                                                    <SelectGroup>
                                                        <SelectLabel>Minuman</SelectLabel>
                                                        <SelectItem value="Air Mineral">Air Mineral</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex-col flex gap-2">
                                            <h3 className="font-bold">{price}</h3>
                                            <Button type="submit" onClick={handleSubmit}>Pre-order</Button>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                ) : null }
            </AnimatePresence>
            <AnimatePresence>
                {success ? (
                    <motion.div variants={preorderVariants} initial="hidden" animate="show" exit="hidden"
                        className="fixed inset-0 flex justify-center items-center md:max-w-100 max-w-65 mx-auto">
                        <Alert>
                            <CheckCircle2Icon />
                            <AlertTitle>Sukses</AlertTitle>
                            <AlertDescription>Pre-ordermu telah tersimpan. Silahkan menunggu!</AlertDescription>
                        </Alert>
                    </motion.div>
                ) : null }
            </AnimatePresence>
            <AnimatePresence>
                {error ? (
                    <motion.div variants={preorderVariants} initial="hidden" animate="show" exit="hidden"
                        className="fixed inset-0 flex justify-center items-center md:max-w-100 max-w-65 mx-auto">
                        <Alert variant="destructive">
                            <AlertCircleIcon />
                            <AlertTitle>{error}</AlertTitle>
                            <AlertDescription>{error === 'Kredensial tidak lengkap.' ?
                            'Isilah ulang formulir pre-order dengan semua informasi lengkap dan akurat.'
                            : 'Terjadi masalah saat memproses pre-order milikmu. Cobalah lagi.'}</AlertDescription>
                        </Alert>
                    </motion.div>
                ) : null }
            </AnimatePresence>
        </div>
    );
}