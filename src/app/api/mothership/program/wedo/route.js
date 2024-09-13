
import axios from "axios"
// import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/paragraph/what_we_do_section/82094301-42d9-4e9f-a14d-50aefef4e125/field_what_we_do_items?resourceVersion=id%3A63`
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