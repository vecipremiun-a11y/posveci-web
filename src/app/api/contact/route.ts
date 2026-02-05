import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, business } = body;

        // Validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Nombre, email y teléfono son obligatorios" },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "PosVeci Demo <no-reply@posveci.com>",
            to: ["contacto@posveci.com"],
            subject: "🆕 Nueva solicitud de Demo - " + name,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
                    <h2 style="color: #4f46e5; text-align: center; margin-bottom: 20px;">Nueva Solicitud de Demo</h2>
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
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 16px; width: 30%; background-color: #eef2ff; color: #4338ca; font-weight: 600;">Teléfono</td>
                                <td style="padding: 16px; color: #1e293b;">
                                    <a href="tel:${phone}" style="color: #4f46e5; text-decoration: none;">${phone}</a>
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 16px; width: 30%; background-color: #f5f3ff; color: #581c87; font-weight: 600;">Negocio</td>
                                <td style="padding: 16px; color: #1e293b;">${business || "No especificado"}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="text-align: center; color: #64748b; font-size: 12px; margin-top: 20px;">
                        Enviado desde el formulario de solicitud de demo de PosVeci.
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
