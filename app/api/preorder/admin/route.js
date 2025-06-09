import client from "@/lib/redis";

export async function GET() {
    let cursor = "0";
    const hashes = [];
    do {
        const [newCursor, keys] = await client.scan(cursor, "TYPE", "hash");

        for (const key of keys) {
            const hashData = await client.hGetAll(key);
            hashes.push({
                key,
                fields: hashData
            });
        }
    } while (cursor !== "0");

    return Response.json(hashes);
}