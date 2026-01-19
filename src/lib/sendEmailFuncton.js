import { toast } from "sonner";

export const sendEmailFuncton = async ({ to, subject, htmlContent }) => {
    try {
        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ to, subject, htmlContent }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Email failed");
        }

        toast.success("Email sent successfully ✅");
        return { success: true, data };
    } catch (error) {
        console.error(error);
        toast.error("Failed to send email ❌");
        return { success: false, error };
    }
};
