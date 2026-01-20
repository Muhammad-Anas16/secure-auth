import { sendEmail } from "@/lib/mailer";

export const sendEmailFuncton = async ({ to, subject, htmlContent }) => {
    try {
        if (!to || !subject || !htmlContent) {
            throw new Error("Missing fields");
        }
        const res = await sendEmail(to, subject, htmlContent);
        if (!res) {
            throw new Error("Email failed");
        }
        return { success: true };
    } catch (error) {
        console.error("Email Helper Error:", error);
        return { success: false, error: error.message };
    }
}