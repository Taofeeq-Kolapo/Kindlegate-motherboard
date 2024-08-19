import { NextResponse } from "next/server"
export async function POST(req) {
    const token = req.headers.get("token")
    const payload = await req.json()

    console.log(payload)

    // try {
    //     // const base_url = `${process.env.NEXT_PUBLIC_BASE_URL}/....`
    //     const response = await axios.post(base_url, payload, {
    //         headers: {
    //             token: token
    //         }
    //     })
    //     const result = response.data
    //     console.log(result)
    //     if (result.statusCode === "00") {
    //         return NextResponse.json(result)
    //     } else {
    //         // return null
    //         console.log(error)
    //     }
    // } catch (error) {
    //     console.log(error)
    //     return NextResponse.json(error)
    // }


}