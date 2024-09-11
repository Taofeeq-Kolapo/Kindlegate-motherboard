

import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/our_mandate/da1e8bb0-6dd0-4f5d-86b7-45fa0544adc9/field_organization_information?resourceVersion=id%3A43`
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