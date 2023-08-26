import { NextResponse } from "next/server";
import { conn } from "@/libs/db";

//TODO: GET  PRODUCTS BY ID
export async function GET(request= Request, {params}) {
  try {

    const id = params.id
    const [rows] = await conn.query(`SELECT * FROM product WHERE ID=${id}`)
    if( !rows[0]){
      return NextResponse.json({
        msg:"product not found"
      },{status:404})
    }
    return NextResponse.json({
      product:rows
    })
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

//TODO: PUT UPDATE PRODUCT
export async function PUT(request = Request, {params}) {
  try {

    const id = params.id
    const {name, price, description} = await request.json()
    


    const [rows] = await conn.query(`UPDATE  product SET ? WHERE ID=${id} `,{
      name,
      price,
      description
    })

    // if( !rows[0]) {
    //   return NextResponse.json({
    //     error: 'Product not found'
    //   }, {status: 404})

    // }

    return NextResponse.json({
      msg: rows
    },{status:200})

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}



//TODO: DELETE PRODUCT
export async function DELETE(request = Request, {params}) {
    try {

      const id = params.id
      
        
      const [rows] = await conn.query(`DELETE FROM product WHERE id=${id}`)

      if( !id ){
        return NextResponse.json({
          msg:"product not found"
        },{status:404})
      }

      return NextResponse.json({
        deleted: rows
      },{status:200})
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  