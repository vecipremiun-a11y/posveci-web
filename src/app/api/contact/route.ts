import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, business, message } = body;

        // Validation
        if (!name || !email) {
            return NextResponse.json(
                { error: "Nombre y email son obligatorios" },
                { status: 400 }
            );
        }

        const isDemo = !!business;
        const subject = isDemo
            ? "🆕 Nueva solicitud de Demo - " + name
            : "📩 Nuevo Mensaje de Contacto - " + name;

        const title = isDemo ? "Nueva Solicitud de Demo" : "Nuevo Mensaje de Contacto";

        const data = await resend.emails.send({
            from: "PosVeci Demo <no-reply@posveci.com>",
            to: ["contacto@posveci.com"],
            subject: subject,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
                    <h2 style="color: #4f46e5; text-align: center; margin-bottom: 20px;">${title}</h2>
                    <table style="width: 100%; border-collapse: collapse; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        <tbody>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 16px; width: 30%; background-color: #eef2ff; color: #4338ca; font-weight: 600;">Nombre</td>
                                <td style="padding: 16px; color: #1e293b;">${name}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 16px; width: 30%; background-color: #f5f3ff; color: #581c87; font-weight: 600;">Email</td>
                                <td style="padding: 16px; color: #1e293b;">
                                    <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            ${phone ? `
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 16px; width: 30%; background-color: #eef2ff; color: #4338ca; font-weight: 600;">Teléfono</td>
                                <td style="padding: 16px; color: #1e293b;">
                                    <a href="tel:${phone}" style="color: #4f46e5; text-decoration: none;">${phone}</a>
                                </td>
                            </tr>
                            ` : ''}
                            ${business ? `
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 16px; width: 30%; background-color: #f5f3ff; color: #581c87; font-weight: 600;">Negocio</td>
                                <td style="padding: 16px; color: #1e293b;">${business}</td>
                            </tr>
                            ` : ''}
                            ${message ? `
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 16px; width: 30%; background-color: #f5f3ff; color: #581c87; font-weight: 600;">Mensaje</td>
                                <td style="padding: 16px; color: #1e293b;">${message}</td>
                            </tr>
                            ` : ''}
                        </tbody>
                    </table>
                    <p style="text-align: center; color: #64748b; font-size: 12px; margin-top: 20px;">
                        Enviado desde el formulario web de PosVeci.
                    </p>
                </div>
            `,
        });

        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
