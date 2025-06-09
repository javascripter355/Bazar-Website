import client from "@/lib/redis";
import { config } from "dotenv";

config();

export async function POST(req) {
    try {
        const { name, order, amount } = await req.json();
        if (!name || !order || !amount) {
            return new Response(JSON.stringify({ message: "Kredensial tidak lengkap." }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (isNaN(amount)) {
            return new Response(JSON.stringify({ message: "Jumlah tidak valid." }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }


        const userId = await client.incr('user:id');
        await client.hSet(`user:${userId}`, {
            nama: name,
            pesanan: order,
            jumlah: amount
        });
        const user = await client.hGetAll(`user:${userId}`);
        console.log(user);
        return new Response(JSON.stringify({ message: "Pre-order sukses!" }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (err) {
        console.log(err)
        return new Response('Error saat memproses pre-order.', {
            status: 500
        })
    }
}