import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(req){
    // const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/sponsors`
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/get_involved`
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