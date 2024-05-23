import { NextResponse } from "next/server";
import pool from "../../libs/connection";

export async function POST(req) {
  try {
    const { task } = await req.json();

    if (task === undefined) {
      return NextResponse.json(
        { error: "Task and complete are required fields" },
        { status: 400 }
      );
    }

    const db = await pool.getConnection();
    const query = "INSERT INTO todoes (task) VALUES (?)";
    await db.execute(query, [task]);
    db.release();

    return NextResponse.json({ message: "Created" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
