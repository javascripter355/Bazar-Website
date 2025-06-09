"use client"


import { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await axios.get("/api/admin");
        setData(prev => [...prev, res])
    }

    useEffect(() => {
        fetchData;
    });

    return (
        <div>
            {data.map((data, i) => (
                <div key={i}>
                    <h1>{data.key}</h1>
                    <h1>{data.fields.name}</h1>
                    <h1>{data.fields.pesanan}</h1>
                    <h1>{data.fields.amount}</h1>
                </div>
            ))}
        </div>
    )
}