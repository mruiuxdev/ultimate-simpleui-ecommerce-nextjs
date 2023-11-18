import Category from "@/models/category";
import dbConnect from "@/utils/dvConnect";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  try {
    const { name } = body;

    const category = await Category.create({ name, slug: slugify(name) });

    return NextResponse.json(category, { status: 201 });
  } catch (err) {
    return NextResponse.json(err._message, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    return NextResponse.json(categories);
  } catch (err) {
    return NextResponse.json(err.message, { status: 500 });
  }
}
