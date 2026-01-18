import { sendEmail } from "@/lib/mailer";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const { to, subject, htmlContent } = await req.json();

        if (!to || !subject || !htmlContent) {
            return NextResponse.json(
                { message: "Missing fields" },
                { status: 400 }
            );
        }

        await sendEmail(to, subject, htmlContent);

        return NextResponse.json({ message: "Email sent" });
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to send email" },
            { status: 500 }
        );
    }
};
