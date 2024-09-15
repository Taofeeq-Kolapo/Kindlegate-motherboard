// http://test.kindlegatefoundation.org/sites/default/files/2024-09/image226_0.jpg
import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(req){
    const base_url = `http://test.kindlegatefoundation.org/jsonapi/paragraph/news_section/e45a0eb2-3c4e-4344-9c11-89bdc9ed6593/field_news_item_section?resourceVersion=id%3A69`
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
// import axios from "axios"
// import { NextResponse } from "next/server"

// export async function GET(req){
//     const base_url = `http://test.kindlegatefoundation.org/jsonapi/file/image/da7eff6b-f9be-4cfd-add0-67a4cbef2804`
//     try {
//         const resp = await axios.get(base_url)
//         const result = resp.data
//         if(result){
//             return NextResponse.json(result)
//         }else{
//             // return NextResponse.json(result)
//             console.log(error)
//         }
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json(error)
//     }
// }