import Category from "@/models/category";
import dbConnect from "@/utils/dvConnect";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function PUT(req, context) {
  await dbConnect();

  const body = await req.json();

  try {
    const { name } = body;

    const updatingCategory = await Category.findByIdAndUpdate(
      context.params.id,
      { ...body, slug: slugify(name) },
      { new: true }
    );

    return NextResponse.json(updatingCategory);
  } catch (err) {
    return NextResponse.json(err.message, { status: 500 });
  }
}

export async function DELETE(req, context) {
  await dbConnect();

  try {
    const deletingCategory = await Category.findByIdAndDelete(
      context.params.id
    );

    return NextResponse.json(deletingCategory);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err.message, { status: 500 });
  }
}
