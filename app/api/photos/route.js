import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await getAllPhotos();

  return NextResponse.json(result);
}
