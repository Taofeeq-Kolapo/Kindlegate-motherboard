import axios from "axios"
import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/paragraph/programs_section/a96dc85a-38d4-4e2a-a045-b41772481d79/field_program_items?resourceVersion=id%3A22`
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