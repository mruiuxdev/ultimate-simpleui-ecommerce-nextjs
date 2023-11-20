import Tag from "@/models/tag";
import dbConnect from "@/utils/dvConnect";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  try {
    const { name, parent } = body;

    const tag = await Tag.create({ name, parent, slug: slugify(name) });

    return NextResponse.json(tag, { status: 201 });
  } catch (err) {
    return NextResponse.json(err._message);
  }
}

export async function GET() {
  await dbConnect();

  try {
    const tags = await Tag.find().sort({ createdAt: -1 });

    return NextResponse.json(tags);
  } catch (err) {
    return NextResponse.json(err._message, { status: 500 });
  }
}
