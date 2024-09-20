// 
import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/media/image/2a6fb4dc-60e5-4abf-be88-f70ad16bdffd/field_media_image?resourceVersion=id%3A76`
    try {
        const resp = await axios.get(base_url)
        const result = resp.data
        if(result){
            return NextResponse.json(result)
        }else{
            // return NextResponse.json(result)
            console.log(error)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}