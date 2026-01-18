"use client";

import { useState } from "react";

export default function SendEmailPage() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "anas.dev122@gmail.com",
          subject: "Test Email from Next.js",
          htmlContent: "<h2>Hello 👋</h2><p>Email sent successfully!</p>",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Email failed");
      }

      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Email failed to send");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={sendEmail} disabled={loading}>
      {loading ? "Sending..." : "Send Email"}
    </button>
  );
}
