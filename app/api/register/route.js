import { NextResponse } from "next/server";
import dbConnect from "@/utils/dvConnect";
import bcrypt from "bcrypt";
import User from "@/models/user";

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  try {
    const { name, email, password } = body;

    await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    return NextResponse.json(
      { success: "Registered Successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
