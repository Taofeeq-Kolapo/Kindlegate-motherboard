import axios from "axios"
import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/mentors/e3102d7a-26d8-40b2-bfcc-a3322d0a76af/field_mentor_hero_section?resourceVersion=id%3A54`
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
