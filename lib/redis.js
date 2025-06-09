import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: process.env.DB_PASSWORD,
    socket: {
        host: 'redis-12733.c334.asia-southeast2-1.gce.redns.redis-cloud.com',
        port: 12733
    }
});

client.on('error', err => console.log('Redis Client Error', err));

async function main() {
    await client.connect();
}

main();

export default client;