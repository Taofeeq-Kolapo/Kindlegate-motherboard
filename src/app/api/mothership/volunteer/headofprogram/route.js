
import axios from "axios"
import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/paragraph/head_of_program_section/76dfe928-6fad-4ffc-b72b-0d32c47aff81/field_head_of_program_item?resourceVersion=id%3A107`
    try {
        const resp = await axios.get(base_url)
        const result = resp.data
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
