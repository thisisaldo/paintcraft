import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, phone, email, service, suburb, message } = await req.json()

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.RESEND_TO_EMAIL
  if (!apiKey) return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 })
  if (!to) return NextResponse.json({ error: 'Missing RESEND_TO_EMAIL' }, { status: 500 })

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'PaintCraft Quote <quotes@paintcraft.com.au>',
    to,
    replyTo: email,
    subject: `New quote request from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111110">
        <h2 style="margin-bottom:24px">New Quote Request</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#78716C;font-size:13px;width:140px">Name</td><td style="padding:8px 0;font-size:13px">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#78716C;font-size:13px">Phone</td><td style="padding:8px 0;font-size:13px">${phone || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#78716C;font-size:13px">Email</td><td style="padding:8px 0;font-size:13px">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#78716C;font-size:13px">Service</td><td style="padding:8px 0;font-size:13px">${service || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#78716C;font-size:13px">Suburb</td><td style="padding:8px 0;font-size:13px">${suburb || '—'}</td></tr>
        </table>
        <div style="margin-top:24px;padding:16px;background:#f5f5f4;border-radius:8px">
          <p style="margin:0;font-size:13px;color:#78716C;margin-bottom:6px">Project details</p>
          <p style="margin:0;font-size:14px">${message || '—'}</p>
        </div>
      </div>
    `,
  })

  if (error) return NextResponse.json({ error }, { status: 500 })

  return NextResponse.json({ success: true })
}
