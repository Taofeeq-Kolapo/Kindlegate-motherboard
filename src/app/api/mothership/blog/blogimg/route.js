import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/media/image/cd07d6ef-6740-4ccf-8016-4627ce86f95e/field_media_image?resourceVersion=id%3A64`
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

