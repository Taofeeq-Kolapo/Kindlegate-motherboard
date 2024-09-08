import axios from "axios"
import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `${process.env.KGF_BASE_URL}/node/47`
    try {
        const resp = await axios.get(base_url)
        const result = resp.data
        if(result){
            return NextResponse.json(result)
        }else{
            return NextResponse.json()
        }
    } catch (error) {
        console.log(error)
    }
}