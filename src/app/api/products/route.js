import { NextResponse } from "next/server";
import { conn } from "@/libs/db";
//TODO: GET ALL PRODUCTS
export async function GET() {
  try {

    const [rows] = await conn.query("SELECT * FROM product" )

      return NextResponse.json({
        rows: rows
      })

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

//TODO: POST CREATE PRODUCT
export async function POST(request = Request) {
  try {

      const {name, description, price} = await request.json();
      const result = await conn.query("INSERT INTO product SET ?", {
        name,
        description,
        price
      })

      console.log(result);
    return NextResponse.json(
      {
        new_product: result,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
