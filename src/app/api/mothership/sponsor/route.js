import axios from "axios"
import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/sponsors/6a66f6e0-14d8-4bf7-bce4-d73e11dc83ef/field_sponsor_hero_section?resourceVersion=id%3A56`
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
// import axios from "axios"
// import { error } from "console"
// import { NextResponse } from "next/server"

// export async function GET(req){
//     const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/sponsors`
//     // const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/sponsors/6a66f6e0-14d8-4bf7-bce4-d73e11dc83ef/field_sponsor_hero_section?resourceVersion=id%3A56`
//     try {
//         const resp = await axios.get(base_url)
//         const result = resp.data
//         if(result){
//             return NextResponse.json(result)
//         }else{
//             console.log(error)
//         }
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json(error)
//     }
// }