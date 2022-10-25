import { config } from "dotenv-safe";

config();

export default {
  twillio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    messageFrom: process.env.TWILIO_MESSAGE_FROM,
  },
};
