
import axios from "axios"
// import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/media/image/5c3c0f20-153e-4fe2-a0d6-6c9cb96066de/field_media_image?resourceVersion=id%3A69`
    try {
        const resp = await axios.get(base_url)
        const result = resp.data
        console.log(result)
        if(result){
            return NextResponse.json(result)
        }else{
            console.log(error)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
