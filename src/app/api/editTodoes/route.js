import { NextResponse } from "next/server";
import pool from "../../libs/connection";

export async function POST(req) {
  try {
    const { id, task } = await req.json();

    if (task === undefined || id === undefined) {
      return NextResponse.json(
        { error: "Task and id are required fields" },
        { status: 400 }
      );
    }

    const db = await pool.getConnection();
    const query = "UPDATE todoes SET task = ? WHERE id = ?";
    await db.execute(query, [task, id]);
    db.release();

    return NextResponse.json({ message: "Updated" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
