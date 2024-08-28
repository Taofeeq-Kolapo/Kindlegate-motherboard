import axios from "axios"
import { NextResponse } from "next/server"
export async function POST(req) {
    const payload = await req.json()

    console.log(payload)
    const base_url = `${process.env.KGF_BASE_URL}/contact-us`
    console.log(base_url)

    try {
        const response = await axios.post(base_url, payload)
        const result = response.data
        const result2= result.message
        if (result) {
            return NextResponse.json(result2)
        } else {
            // return null
            console.log(error)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }


}