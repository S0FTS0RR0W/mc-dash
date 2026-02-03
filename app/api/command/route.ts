import { NextResponse } from "next/server";
import { getRcon } from '@/lib/rcon';

export async function POST(req: Request) {
    const { command } = await req.json();

    if (!command) {
        return NextResponse.json({ error: 'No command provided' }, { status: 400 });
    }

    try {
        const rcon = await getRcon();
        const result await rcon.send(command);

        return NextResponse.json({ output: result });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}