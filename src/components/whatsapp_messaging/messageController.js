import { sendWhatsAppMessage } from "../../helper/twillioHelper.js";
import { validateSendMessage } from "../../validation/messageValidator.js";
import config from "../../core/config.js";
const sendWPMessage = async (req, res) => {
  try {
    // we can validate this data with joi for proper data format
    const _body = {
      mediaUrl: req.body.mediaUrl,
      messageFrom: req.body.messageFrom || config.twillio.messageFrom,
      messageTo: req.body.messageTo,
      messageData: req.body.messageData,
    };
    const { err } = validateSendMessage(_body);

    if (err) {
      return res.status(422).json({
        err: err,
      });
    }

    const { messageData, messageFrom, messageTo, mediaUrl } = _body;

    const messageResponse = await sendWhatsAppMessage({
      body: messageData,
      from: messageFrom,
      to: messageTo,
      mediaUrl,
    });

    if (messageResponse.errorCode != null) {
      return res.status(500).json({
        message: messageResponse.errorMessage,
      });
    }
    return res.status(200).send({
      message: "Message Sent",
      messageResponse,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Something went wrong");
  }
};

export { sendWPMessage };
