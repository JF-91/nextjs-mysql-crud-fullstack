import { NextResponse } from "next/server";
import { conn } from "@/libs/db";

export async function GET(){

    try {
       
     conn.query('SELECT NOW()', 
            function(err, rows, fields){
                console.log(err);
                console.log(rows);
                console.log(fields);
            })
        
        return NextResponse.json({
            msg:"Hola mundo!"
        })
    } catch (error) {
        console.log(error);
    }
}