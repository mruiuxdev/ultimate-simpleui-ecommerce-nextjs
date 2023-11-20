import Tag from "@/models/tag";
import dbConnect from "@/utils/dvConnect";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function PUT(req, context) {
  await dbConnect();

  const body = await req.json();

  try {
    const { name } = body;

    const updateTag = await Tag.findById(
      context.params.id,
      { ...body, slug: slugify(name) },
      { new: true }
    );

    return NextResponse.json(updateTag);
  } catch (err) {
    return NextResponse.json(err._message, { status: 500 });
  }
}

export async function DELETE(req, context) {
  await dbConnect();

  try {
    const deletingTag = await Tag.findByIdAndDelete(context.params.id);

    return NextResponse.json(deletingTag);
  } catch (err) {
    return NextResponse.json(err._message, { status: 500 });
  }
}
