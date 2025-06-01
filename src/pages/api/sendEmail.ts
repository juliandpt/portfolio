import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { getSecret } from 'astro:env/server'

const resend = new Resend(getSecret('RESEND_API_KEY'))

export const POST: APIRoute = async ({ request }) => {
  const { email, message } = await request.json()

  if (!email || !message)
    return new Response(null, {
      status: 404,
      statusText: 'Message is required',
    })

  const send = await resend.emails.send({
    from: 'new.email@resend.dev',
    to: 'juliandpt98@gmail.com',
    subject: 'Nuevo mensaje del portfolio',
    html: `
            <div style="font-family: Arial, sans-serif;">
                <h3>Has recibido un nuevo mensaje:</h3>
                <p>${message}</p>
                <hr>
                <small>Contacto: ${email || 'No proporcionado'}</small>
            </div>
        `,
    text: message,
  })

  if (send.data) return new Response(JSON.stringify({ output: send.data }))

  return new Response(JSON.stringify({ output: send.error }))
}
