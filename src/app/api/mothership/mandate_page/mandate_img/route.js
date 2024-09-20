
import axios from "axios"
// import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/media/image/ea700b6f-fe78-4307-a3c4-cf89f9175167/field_media_image?resourceVersion=id%3A75`
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