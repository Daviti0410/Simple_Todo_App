import { NextResponse } from "next/server";
import pool from "../../libs/connection";

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (id === undefined) {
      return NextResponse.json(
        { error: "Task already have been deleted" },
        { status: 404 }
      );
    }

    const db = await pool.getConnection();
    const query = "DELETE FROM todoes WHERE id = ?";
    await db.execute(query, [id]);
    db.release();

    return NextResponse.json({ message: "Updated" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
