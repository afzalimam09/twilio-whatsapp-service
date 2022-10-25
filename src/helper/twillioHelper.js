import twilio from "twilio";
import config from "../core/config.js";

const accountSid = config.twillio.accountSid;
const authToken = config.twillio.authToken;
const client = twilio(accountSid, authToken);

const sendWhatsAppMessage = async ({ from, to, body, mediaUrl }) => {
  try {
    const createOption = {
      body: body ? body : "",
      from: `whatsapp:${from}`,
      to: `whatsapp:${to}`,
    };
    if (mediaUrl) createOption.mediaUrl = mediaUrl;
    const response = await client.messages.create(createOption);
    return response;
  } catch (err) {
    throw err;
  }
};

export { sendWhatsAppMessage };
