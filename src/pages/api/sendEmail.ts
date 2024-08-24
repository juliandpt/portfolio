import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

// Outputs: /builtwith.json
export const POST: APIRoute = async ({ params, request}) => {

    const { email, message } = await request.json()

    if (!email || !message) return new Response(null, {
        status: 404,
        statusText: "Message is required"
    })

    const send = await resend.emails.send({
        from: "new.email@resend.dev",
        to: "juliandpt98@gmail.com",
        subject: "Nuevo mensaje del portfolio!!",
        html: "<h1>test</h1>",
        text: message
    })

    if (send.data) {
        return new Response(
            JSON.stringify({
                output: send.data
            })
        )
    } else {
        return new Response(
            JSON.stringify({
                output: send.error
            })
        )
    }
}