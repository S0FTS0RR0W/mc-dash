import { Rcon } from 'rcon-client';

let client: Rcon | null = null;

export async function getRcon() {
    if (client) return client;

    client = await Rcon.connect({
        host: process.env.RCON_HOST,
        port: process.env.RCON_PORT,
        password: process.env.RCON_PASSWORD,
    });

    client.on('end', () => {
        console.log('RCON connection closed');
        client = null;
    });

    return client;
}